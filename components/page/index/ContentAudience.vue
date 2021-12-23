<template>
  <div class="row gap-80rem">
    <div class="col flex-grow">
      <div class="flex justify-between">
        <div class="heading-2">
          <h2>
            <span class="carolinaLight font-medium">
              Đối tượng tham dự
            </span>
          </h2>
        </div>
        <div class="row items-center gap-16rem hidden-mob">
          <p>
            <span class="inkLightest"> {{ slideProgress }}/2 </span>
          </p>
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
      <PageIndexAudienceSlider class="mt-32rem" />
    </div>
  </div>
</template>
<script setup lang="ts">
import Slider from '~/logic/slider.ts'
import { mediaMobile } from '~/logic/mediaQuery.ts'

const hello = Slider('.slider[data-v-44eae652]', 1)
onMounted(() => {
  if (mediaMobile.matches) {
    setInterval(() => {
      hello.slideNext()
    }, 3000)
  }
})
provide('slideIndex', hello.slideIndex)
const slideProgress = ref(1)

watchEffect(() => {
  if (hello.slideIndex.value > 1) slideProgress.value = 2
  else slideProgress.value = 1
})
</script>
