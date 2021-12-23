<template>
  <div
    class="padding-all fixed left-0 right-0 top-0 bottom-0 z-99999 light overflow-y-scroll"
  >
    <div
      class="heading-1 flex gap-24rem mb-40rem heading-box cursor-pointer"
      @click="isCheckout = false"
    >
      <BaseIcon name="cheviron-prev" />
      <h2><span class="white">Xác nhận đăng ký tham gia</span></h2>
    </div>
    <form
      id="contact-form"
      class="sign-up-form bg-white rounded-8rem overflow-hidden"
      action="https://sever.branddoctorgroup.com/wp-json/contact-form-7/v1/contact-forms/12063/feedback"
      method="post"
      @submit.prevent="submitHandler"
    >
      <div class="tab-header row">
        <div
          v-for="(tab, index) in tab"
          :key="tab"
          class="tab-heading flex gap-12rem items-center flex-1  py-24rem px-48rem"
          :class="{ 'item-active': activeTab.heading == tab.heading }"
          @click="activeTab = tab"
        >
          <div
            class="dark h-32rem w-32rem rounded-50% bg-skyBasic center indexCont"
          >
            <p class="font-semibold">
              {{ index + 1 }}
            </p>
          </div>
          <p class="font-medium">
            <span class="skyBasic">{{ tab.heading }}</span>
          </p>
        </div>
      </div>
      <PageIndexPopupTab1
        class="popup-tab"
        :class="{ 'item-active': activeTab.heading == tab[0].heading }"
      />
      <PageIndexPopupTab2
        class="popup-tab"
        :class="{ 'item-active': activeTab.heading == tab[1].heading }"
      />
      <div
        class="tab-footer bg-skyLightest flex justify-between px-48rem py-32rem items-center"
      >
        <p class="hidden-mob">
          <span class="inkLightest font-semibold">
            Mọi thông tin của bạn sẽ được BDA bảo mật an toàn.
          </span>
        </p>
        <div class="flex gap-12rem">
          <BaseIcon v-if="buttonText.loading" name="loading" />
          <BaseButton
            :title="buttonText.title"
            size="big"
            :theme="buttonText.theme"
            class="nextBtn white hover:!bg-blue-700 flex flex-row-reverse"
            type="submit"
            form="contact-form"
          >
            <BaseIcon :name="buttonText.icon" />
          </BaseButton>
        </div>
      </div>
    </form>
    <BasePopup v-if="isPopupActive">
      <div class="center heading-box min-h-500rem bg-blueLight">
        <div class="heading-2">
          <h2 style="max-width:500rem; text-align:center">
            <span class="white">
              {{ popupContent }}
            </span>
          </h2>
        </div>
      </div>
    </BasePopup>
  </div>
</template>
<script setup lang="ts">
import axios from 'axios'
import formValidate from '~/logic/formValidate.ts'

const isCheckout = inject('isCheckout')
const tab = [
  { heading: 'Nhập thông tin cá nhân' },
  { heading: 'Chọn nội dung tham gia' },
]
const activeTab = ref(tab[0])
const popupContent = ref('')
const isPopupActive = ref(false)
provide('isPopupActive', isPopupActive)
const fieldsOne = ref([
  {
    number: '',
    title: '',
    fields: [
      {
        type: 'text',
        label: 'Họ và tên*',
        name: 'your-name',
        required: true,
        placeholder: 'Nguyễn Văn Anh',
        width: '100',
      },
      {
        type: 'text',
        label: 'Số điện thoại (Zalo)*',
        name: 'your-phone',
        required: true,
        placeholder: '0123456789',
        width: '50',
      },
      {
        type: 'email',
        label: 'Email*',
        name: 'your-email',
        required: true,
        placeholder: 'nguyenvananh@email.com',
        width: '50',
      },
      {
        type: 'textarea',
        name: 'your-note',
        label: 'Ghi chú của bạn',
        required: false,
        placeholder: 'Tôi muốn được gọi điện trong giờ hành chính',
        width: '100',
      },
    ],
  },
])
const cloneIndex = ref(1)
provide('cloneIndex', cloneIndex)
provide('fields', fieldsOne)

const buttonText = reactive({
  title: 'Chọn nội dung tham gia',
  theme: 'bg-blueLight',
  icon: 'cheviron-next',
  loading: false,
})

const submitHandler = async(e) => {
  if (formValidate(e)) {
    if (activeTab.value.heading == tab[0].heading) {
      activeTab.value = tab[1]
      buttonText.title = 'Đăng ký ngay'
      buttonText.theme = 'dark'
      buttonText.icon = 'checked'
    }
    else {
      const formElement = e.target
      const { action, method } = formElement
      const body = new FormData(formElement)

      buttonText.title = 'Đang gửi...'
      buttonText.loading = true

      axios
        .post(action, body)
        .then((response) => {
          isPopupActive.value = true
          popupContent.value = response.data.message
          buttonText.title = 'Chọn nội dung tham gia'
          buttonText.theme = 'bg-blueLight'
          buttonText.icon = 'cheviron-next'
          buttonText.loading = false
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.padding-all {
  background: $blueLight url('/ldp-popup-bg.png') no-repeat top;
  background-size: cover;
  .tab-heading {
    border-bottom: solid 3px $skyBasic;
    &:hover {
      cursor: pointer;
      .indexCont {
        background: $blueLight;
      }
      p {
        span {
          color: $blueLight;
        }
      }
    }

    &.item-active {
      border-color: $blueLight;

      .indexCont {
        background: $blueLight;
      }
      p {
        span {
          color: $blueLight;
        }
      }
    }
  }
  .popup-tab {
    display: none;
    &.item-active {
      display: block;
    }
  }
}
@include size('small') {
  .padding-all {
    padding: 24rem 0;
    &::-webkit-scrollbar {
      width: 0px;
    }
    .heading-1 {
      padding: 0 24rem;
      align-items: center;
      h2 {
        font-size: 20rem;
        font-weight: 500;
      }
    }
    .tab-footer {
      div {
        width: 100%;

        .nextBtn {
          width: 100%;
        }
      }
    }
    form {
      border-radius: 0;
      .popup-tab {
        padding: 24rem;
      }
    }
  }
}
</style>
<style lang="scss">
.icon-cheviron-prev[data-v-5cb4a96c] {
  path {
    fill: white;
  }
  rect {
    stroke: white;
  }
}
.icon-cheviron-next[data-v-5cb4a96c] {
  svg {
    transform: scale(1.5);
    path {
      fill: white;
    }
    rect {
      display: none;
    }
  }
}
</style>
