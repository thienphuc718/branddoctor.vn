<template>
  <div class="content-cta">
    <div class="content-cta-ticket">
      <div
        class="cta-header content-box !rounded-8rem dark p-20rem base-shadow border-dashed border-1"
      >
        <p class="small font-medium mb-4rem">
          <span class="blueLighter">Chuyên đề đào tạo:</span>
        </p>
        <p class="large thick leading-1.3em">
          Thương hiệu cá nhân 5.0 – Góc nhìn từ những điểm khác biệt
        </p>
      </div>
      <div
        class="light p-20rem !rounded-8rem base-shadow col gap-8rem border-dashed border-1 cta-info"
      >
        <div v-for="info in info" :key="info" class="flex justify-between">
          <p class="flex">
            <BaseIcon :name="info.icon" class="mr-8rem" />
            {{ info.title }}
          </p>
          <p>
            <span class="inkBasic" :class="{ 'font-semibold': info.bold }">
              {{ info.desc }}
            </span>
          </p>
        </div>
      </div>
      <div
        class=" light p-20rem !rounded-8rem base-shadow col gap-8rem border-dashed border-1"
      >
        <div class="flex justify-between">
          <div class="counter flex gap-16rem">
            <div v-for="(digit, index) in digit" :key="digit">
              <h4>{{ ('0' + counter[digit.type]).slice(-2) }}</h4>
              <p>{{ digit.text }}</p>
            </div>
          </div>
          <PageIndexProgress bar="#5584E5" inner="#DFE3E8" bg="white" />
        </div>
        <div class="col gap-12rem mt-8rem">
          <BaseButton
            theme="dark"
            size="regular"
            title="Đăng ký Talk Show"
            @click="isCheckout = true"
          />
          <PageIndexCta
            title="Đăng ký chuyên đề"
            size="regular"
            theme="light"
            @click="isCheckout = true"
          />
        </div>
      </div>
    </div>
    <div class="w-100% relative pt-24rem overflow-hidden">
      <div class="bg-successLighter rounded-8rem base-shadow p-24rem">
        <div class="heading-box w-182rem">
          <h4>
            <span class="leading-1.4em successBasic"><span class="successDark">60 phút gặp mặt Viện trưởng</span> cho
              2 học viên giỏi nhất</span>
          </h4>
        </div>
        <img
          src="/ldp-content-cta-img1.png"
          width="200"
          height="200"
          class="absolute -right-40rem top-0rem w-60%"
        >
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.content-cta {
  p {
    line-height: 1.4em;
  }
}
.cta-header {
  background: radial-gradient(100% 100% at 49.83% 0%, #5584e5 0%, #003e9f 100%);
}
.counter {
  div {
    position: relative;
    &:not(div:first-child) {
      &:before {
        content: '';
        height: 60%;
        width: 1px;
        background-color: #00000050;
        position: absolute;
        left: -6rem;
        bottom: 8rem;
      }
    }
    p {
      text-align: center;

      &:first-child {
        font-weight: 700;
      }
      &:last-child {
        font-size: 8rem;
      }
    }
  }
}
</style>
<style lang="scss">
.cta-info {
  svg {
    path {
      fill: black;
    }
  }
}
</style>
<script setup lang="ts">
import Counter from '~/logic/Counter.ts'

const isCheckout = inject('isCheckout')
const digit = [
  { type: 'days', text: 'NGÀY' },
  { type: 'hours', text: 'GIỜ' },
  { type: 'minutes', text: 'PHÚT' },
  { type: 'seconds', text: 'GIÂY' },
]
const counter = Counter('Jan 8 2022 09:00:00 GMT+0700 (Giờ Đông Dương)')

const info = [
  { icon: 'calendar', title: 'Khai giảng:', desc: '08/01/2021', bold: true },
  {
    icon: 'calendar-day',
    title: 'Ngày học:',
    desc: 'Thứ 7 & Chủ nhật',
    bold: false,
  },
  { icon: 'zoom', title: 'Hình thức:', desc: 'Zoom Meeting', bold: false },
]
</script>
