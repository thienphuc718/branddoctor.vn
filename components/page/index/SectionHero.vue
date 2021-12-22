<template>
  <div class="dark bg-black p-24rem section-hero">
    <PageIndexSectionHeroHeader />
    <div
      class="row content-row center p-80rem gap-48rem content-box heading-box"
    >
      <img src="/ldp-hero-poster.jpg" width="239" height="298" alt="">
      <div class="col items-start">
        <p
          class="font-medium button p-5.5rem bg-blueBasic rounded-4rem mb-21rem"
        >
          Chuyên đề đào tạo
        </p>
        <div class="heading-1">
          <h2 class="mb-24rem">
            <span class="font-medium leading-1.4em">
              Thương hiệu cá nhân 5.0
              <span class="block"><span class="hidden-des">– </span>Góc nhìn từ
              </span>
              <span class="block">những điểm khác biệt</span>
            </span>
          </h2>
          <div
            class="flex flex-wrap justify-center flex-1 gap-16rem hidden-des mt-32rem"
          >
            <div class="border-1 rounded-40rem flex gap-8rem py-8rem px-16rem">
              <p>
                07/11/2021
              </p>
            </div>
            <div class="border-1 rounded-40rem flex gap-8rem py-8rem px-16rem">
              <p>
                Zoom Meeting
              </p>
            </div>
            <div class="border-1 rounded-40rem flex gap-8rem py-8rem px-16rem">
              <p>
                <span class="font-semibold">Toàn chuyên đề: 4 buổi (10 giờ)</span>
              </p>
            </div>
          </div>
        </div>
        <div class="counter flex gap-8rem">
          <div v-for="(digit, index) in digit" :key="digit">
            <div class="flex gap-8rem items-start">
              <div>
                <div class="center h-40rem w-40rem rounded-4rem border-1">
                  <h4>{{ ('0' + counter[digit.type]).slice(-2) }}</h4>
                </div>
                <p class="mt-8rem">
                  <span class="text-12rem">{{ digit.text }}</span>
                </p>
              </div>
              <p>
                <span
                  v-if="index < 3"
                  class="font-semibold text-18rem mt-12rem inline-block"
                >:</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row content-box items-center justify-between">
      <div class="row items-center hidden-mob">
        <BaseIcon name="play-btn" class="mr-12rem" />
        <p>Xem trailer</p>
      </div>
      <div class="row gap-24rem">
        <div
          class="relative"
          @mouseover="overTooltip"
          @mouseout="isTooltip = false"
        >
          <div
            class="tooltip rounded-8rem p-16rem absolute left-0rem -right-80rem -top-600% bg-white hidden-mob"
            :class="{ 'item-active': isTooltip }"
          >
            <img src="/ldp-ticket.jpg" class="mb-16rem">
            <p>
              <span class="blueLight">Bạn được tặng miễn phí 1 vé talk show Thương hiệu cá nhân.
                <a href="#dang-ky"><span class="blueLight font-semibold">Đăng ký ngay!</span></a></span>
            </p>
          </div>
          <BaseButton
            title="Tham gia Talk Show"
            size="regular"
            theme="dark"
            @mouseover="isTooltip = true"
            @mouseout="isTooltip = false"
          />
        </div>
        <p class="text-center hidden-des">
          Bạn được tặng miễn phí 1 vé talk show Thương hiệu cá nhân.
          <a href="#dang-ky"><span class="font-semibold">Đăng ký ngay!</span></a>
        </p>
        <PageIndexCta theme="dark" title="Đăng ký chuyên đề" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@include size('small') {
  .dark.section-hero {
    padding-bottom: 80rem;
    .content-row {
      padding-left: 0;
      padding-right: 0;
      .col {
        align-items: center;
        h2 {
          font-size: 27.5rem;
          text-align: center;
        }
      }
    }
    .counter {
      margin-top: 24rem;
    }
    .cta {
      min-width: 100%;
      font-weight: 500;
    }
  }
}
.tooltip {
  opacity: 0;
  transition: 0.5s ease;
  &.item-active {
    opacity: 1;
  }

  &:before {
    content: '';
    position: absolute;
    top: 100%;
    left: 10%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }
}
</style>
<script setup lang="ts">
import Counter from '~/logic/Counter.ts'

const digit = [
  { type: 'days', text: 'NGÀY' },
  { type: 'hours', text: 'GIỜ' },
  { type: 'minutes', text: 'PHÚT' },
  { type: 'seconds', text: 'GIÂY' },
]
const counter = Counter('Dec 27 2021 09:00:00 GMT+0700 (Giờ Đông Dương)')
const isTooltip = ref(false)
const overTooltip = () => {
  if ((isTooltip.value = true)) isTooltip.value = true
}
</script>
