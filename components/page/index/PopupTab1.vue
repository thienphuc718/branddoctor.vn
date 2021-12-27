<template>
  <div class="py-48rem px-120rem">
    <p class="font-semibold mb-24rem">
      Chọn hình thức mà bạn muốn đăng ký
    </p>
    <div class="tab rounded-8rem border-2rem bg-skyLightest">
      <div class="tab-header row">
        <div
          v-for="(tab, index) in tab"
          :key="tab"
          class="tab-heading flex gap-12rem items-start flex-1  py-24rem px-48rem"
          :class="{ 'item-active': activeTab.title == tab.title }"
          @click="activeTab = tab"
        >
          <div
            class="h-20rem w-20rem rounded-50% border-2 !border-skyBasic p-2rem center mt-4rem"
          >
            <div class="indexCont rounded-50 h-100% w-100%" />
          </div>
          <div>
            <p class="font-medium">
              <span class="skyBasic">{{ tab.title }}</span>
            </p>
            <p class="small">
              {{ tab.desc }}
            </p>
          </div>
        </div>
      </div>
      <div
        v-if="activeTab.title !== tab[1].title"
        class="tab-content py-24rem px-48rem"
      >
        <div v-for="field in fields" :key="field" class="flex flex-wrap">
          <div
            v-if="activeTab.title == tab[2].title"
            class="flex gap-12rem min-w-100%"
          >
            <div class="number w-24rem h-24rem bg-inkLight center rounded-50%">
              <span class="white font-semibold">{{ field.number }}</span>
            </div>
            <p>
              <span class="font-semibold">{{ field.title }}</span>
            </p>
          </div>
          <p
            v-for="field in field.fields"
            :key="field"
            :class="`min-w-${field.width} ${field.class}`"
            @click="activeField = field"
          >
            <label :class="{ 'item-active': activeField.label == field.label }">
              {{ field.label }}
              <textarea
                v-if="field.type === 'textarea'"
                :data-required="field.required"
                placeholder="Tôi muốn được gọi điện trong giờ hành chính"
                :name="field.name"
              />
              <input
                v-else
                :data-required="field.required"
                type="text"
                :name="field.name"
                :placeholder="field.placeholder"
              >
            </label>
          </p>
        </div>
      </div>
      <input type="hidden" name="your-type" :value="activeTab.title">
      <div
        v-for="index in cloneIndex"
        v-if="activeTab.title == tab[1].title"
        :key="index"
        class="tab-content py-24rem px-48rem"
      >
        <div v-for="field in fields" :key="field" class="flex flex-wrap">
          <p class="min-w-100%">
            <span class="font-semibold">Thành viên {{ index }}</span>
          </p>
          <p
            v-for="field in field.fields"
            :key="field"
            :class="`min-w-${field.width} ${field.class}`"
            @click="activeField = field"
          >
            <label :class="{ 'item-active': activeField.label == field.label }">
              {{ field.label }}
              <textarea
                v-if="field.type === 'textarea'"
                :data-required="field.required"
                placeholder="Tôi muốn được gọi điện trong giờ hành chính"
                :name="field.name"
              />
              <input
                v-else
                :data-required="field.required"
                type="text"
                :name="field.name"
                :placeholder="field.placeholder"
              >
            </label>
          </p>
        </div>
      </div>
      <p
        v-if="activeTab.title == tab[1].title"
        class="p-48rem !pt-0 cursor-pointer"
        @click="cloneIndex++"
      >
        <span class="font-semibold blueLight">+ Thêm bạn cùng nhóm</span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const tab = [
  { title: 'Cá nhân', desc: '1 người' },
  { title: 'Nhóm', desc: '2-14 người' },
  { title: 'Doanh nghiệp', desc: '15 người trở lên' },
]
const fields = inject('fields')
const activeTab = ref(tab[0])
const activeField = ref(fields.value[0])
const cloneIndex = inject('cloneIndex')
const firstTabValue = fields.value

watchEffect(() => {
  if (activeTab.value.title === tab[2].title) {
    fields.value = [
      {
        number: 'a',
        title: 'Thông tin liên hệ',
        fields: [
          {
            type: 'text',
            label: 'Họ và tên người đại diện*',
            required: true,
            name: 'your-name',
            placeholder: 'Nguyễn Văn Anh',
            width: '100',
            class: '',
          },
          {
            type: 'text',
            label: 'Số điện thoại (Zalo)*',
            required: true,
            name: 'your-phone',
            placeholder: '0123456789',
            width: '50',
            class: '',
          },
          {
            type: 'text',
            label: 'Email*',
            required: true,
            name: 'your-email',
            placeholder: 'nguyenvananh@email.com',
            width: '50',
            class: '',
          },
          {
            type: 'text',
            label: 'Tổ chức Anh/Chi đang làm việc *',
            required: true,
            name: 'your-company',
            placeholder: 'Công ty ABC',
            width: '50',
            class: '!pl-0 !pr-12rem',
          },
          {
            type: 'text',
            label: 'Quy mô tổ chức',
            required: false,
            name: 'your-scale',
            placeholder: 'Nhập số lượng nhân viên tương ứng',
            width: '50',
            class: '',
          },
        ],
      },
      {
        number: 'b',
        title: 'Thông tin đăng ký tham dự',
        fields: [
          {
            type: 'text',
            label: 'Số lượng học viên tham dự dự kiến',
            required: true,
            name: 'your-number',
            placeholder: 'Nhập số lượng học viên dự kiến',
            width: '50',
            class: '',
          },
          {
            type: 'text',
            label: 'Ghi chú',
            required: false,
            name: 'your-note',
            placeholder: 'Tôi muốn được gọi điện trong giờ hành chính',
            width: '50',
            class: '',
          },
        ],
      },
    ]
  }
  else {
    fields.value = firstTabValue
  }
})
</script>
<style lang="scss">
.tab-heading {
  border-bottom: solid 3px $skyBasic;
  &:hover {
    cursor: pointer;

    p {
      span {
        color: $blueLight;
      }
    }
  }
  p {
    line-height: 1.4em;
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
      &.small {
        color: $inkLighter;
      }
    }
  }
}
.tab-content {
  p {
    margin-bottom: 24rem;
    padding-right: 12rem;
    position: relative;

    &.min-w-100 {
      min-width: 100%;
      padding-right: 0;
    }
    &.min-w-50 {
      min-width: 50%;
      & ~ .min-w-50 {
        padding-left: 12rem;
        padding-right: 0;
      }
    }
  }
}
@include size('small') {
  .tab-heading {
    padding: 24rem;
  }
  .tab-content {
    padding: 24rem;
    p {
      &.min-w-50 {
        padding: 0 !important;
        min-width: 100%;
      }
    }
  }
}
</style>
