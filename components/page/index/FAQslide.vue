<template>
  <div class="padding-all !py-0">
    <div class="heading-2 flex items-start justify-between ">
      <h2 class="mb-24rem">
        <span class="carolinaLight font-semibold">
          Hình ảnh thực tế
        </span>
      </h2>
      <div class="flex items-center gap-12rem hidden-mob">
        <p>{{ hello.slideIndex.value + 1 }}/10</p>
        <BaseNav fill="white" stroke="#5584E5" class="gap-8rem">
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
    <div id="faq-slider" class="slider">
      <div class="track flex gap-8rem">
        <img
          v-for="slide in 10"
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

const hello = Slider('#faq-slider', 2)
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
.slide {
  max-width: calc(100% / 4 - 8rem * 3 / 4);
  min-width: calc(100% / 4 - 8rem * 3 / 4);
}
@include size('small') {
  .slider {
    .track {
      gap: 24rem;
      .slide {
        max-width: 100%;
        min-width: 100%;
      }
    }
  }
}
</style>
