<template>
  <div class="padding-all dark !pb-0">
    <div class="p-48rem rounded-8rem cta-box">
      <div class="heading-box max-w-500rem">
        <h2
          class="text-48rem carolinaLighter font-700 leading-57.6rem mb-24rem"
        >
          Tặng lộ trình xây dựng <span class="white">thương hiệu cá nhân</span>
        </h2>
        <p class="mb-24rem">
          Tặng bạn <span class="yellowBasic">EBOOK</span> “Lộ trình xây dựng
          thương hiệu cá nhân 5.0”. Đăng ký ngay. Chúng tôi sẽ gửi qua email
          bạn.
        </p>
        <form
          id="book-form"
          class="flex gap-12rem"
          action="https://sever.branddoctorgroup.com/wp-json/contact-form-7/v1/contact-forms/12067/feedback"
          method="post"
          @submit.prevent="submitHandler"
        >
          <input
            type="email"
            placeholder="example@email.com"
            class="py14rem px-14rem rounded-4rem border-none w-60%"
            name="your-email"
          >
          <button
            class="bg-white border-none center w-65rem rounded-4rem form-btn"
          >
            <BaseIcon :name="btnIcon" type="submit" form="book-form" />
          </button>
        </form>
      </div>
    </div>
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

const popupContent = ref('')
const isPopupActive = ref(false)
const btnIcon = ref('send')
provide('isPopupActive', isPopupActive)

const submitHandler = async(e) => {
  if (formValidate(e)) {
    const formElement = e.target
    const { action, method } = formElement
    const body = new FormData(formElement)
    btnIcon.value = 'loading'

    axios
      .post(action, body)
      .then((response) => {
        isPopupActive.value = true
        popupContent.value = response.data.message
        btnIcon.value = 'send'
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>
.cta-box {
  background: radial-gradient(100% 100% at 49.83% 0%, #4d52e2 0%, #3e42ab 100%);
  position: relative;
  &:before {
    content: '';
    height: 100%;
    width: 50%;
    position: absolute;
    right: 0rem;
    top: 0;
    background-image: url('/ldp-cta-bg.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
}
.form-btn {
  &:hover {
    background: $blueLighter;
  }
}
@include size('small') {
  .padding-all {
    padding-top: 80rem;

    .cta-box {
      padding: 32rem;
      &:before {
        display: none;
      }
      h2 {
        font-size: 29rem;
        font-weight: 500;
        line-height: 1.4;
      }
      input {
        flex-grow: 1;
      }
    }
  }
}
</style>
