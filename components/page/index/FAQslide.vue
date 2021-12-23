<template>
  <div class="padding-all">
    <div class="divider mb-80rem hidden-mob" />
    <div class="heading-2 flex items-start justify-between ">
      <h2 class="mb-24rem">
        <span class="carolinaLight font-medium">
          Hình ảnh thực tế
        </span>
      </h2>
      <div class="flex items-center gap-12rem hidden-mob">
        <p>1/10</p>
        <BaseNav fill="#5584E5" stroke="#5584E5" class="gap-8rem">
          <BaseIcon
            name="cheviron-prev"
            class="nav-prev"
            @click="hello.slidePrev"
          />
          <BaseIcon
            name="cheviron-next"
            class="nav-next"
            @click="hello.slideNext"
          />
        </BaseNav>
      </div>
    </div>
    <div class="slider">
      <div class="track flex gap-8rem">
        <img
          v-for="slide in 4"
          :src="`/ldp-slider-${slide}.png`"
          width="275.5"
          height="210"
          class="slide"
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Slider from '~/logic/slider.ts'
import { mediaMobile } from '~/logic/mediaQuery.ts'

const hello = Slider('.slider[data-v-f70604a6]', 1)
onMounted(() => {
  if (mediaMobile.matches) {
    setInterval(() => {
      hello.slideNext()
    }, 3000)
  }
})
</script>
<style lang="scss" scoped>
.divider {
  height: 1px;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(2, 0, 36, 0) 100%
  );
}
@include size('small') {
  .slider {
    .track {
      gap: 24rem;
    }
  }
}
</style>
