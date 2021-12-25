<template>
  <div class="light padding-all">
    <div class="heading-1 mb-40rem">
      <h2 class="inkBasic">
        <span class="hidden-mob inkLight">Thông tin chuyên đề học</span>
        <span class="hidden-des flex font-semibold">Về chuyên đề</span>
      </h2>
    </div>
    <PageIndexContentHeader v-if="!mediaMobile.matches" />
    <div class="row">
      <div class="content pr-80rem">
        <PageIndexContentWhy class="border-b-2rem pb-64rem pt-48rem" />
        <PageIndexContentAudience class="border-b-2rem pb-64rem pt-48rem" />
        <PageIndexThematicGeneral class="border-b-2rem pb-64rem pt-48rem" />
        <PageIndexContentResult class="border-b-2rem pb-64rem pt-48rem" />
        <PageIndexThematicContent class="border-b-2rem pb-64rem pt-48rem" />
        <PageIndexThematicSpeaker class=" pt-48rem" />
      </div>
      <div v-if="!mediaMobile.matches" class="col flex-shrink-0 w-346rem">
        <PageIndexContentCta class="mt-40rem" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import fixOnDiv from '~/logic/fixOnDiv.ts'
import { mediaMobile } from '~/logic/mediaQuery.ts'

const isHeaderActive = ref(false)
const isCtaActive = ref(false)
provide('isHeaderActive', isHeaderActive)
provide('isCtaActive', isCtaActive)

const isFix = fixOnDiv('.content-cta')

watchEffect(() => {
  if (isFix.isFix.value) isCtaActive.value = false
  else isCtaActive.value = true
})

const contentScroll = () => {
  if (!mediaMobile.matches) {
    const header = document.querySelector('.content-header')
    const headerBounding = header.parentNode.getBoundingClientRect()

    if (headerBounding.top < 0) isHeaderActive.value = true
    else isHeaderActive.value = false
  }
}
onMounted(() => {
  window.addEventListener('scroll', contentScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', contentScroll)
})
</script>
<style lang="scss" scoped>
@include size('small') {
  .padding-all {
    padding-top: 80rem;
    padding-bottom: 0;
    .content {
      padding-right: 0rem;
    }
    .heading-1 {
      .hidden-des {
        &:before {
          content: '';
          display: block;
          min-height: 40rem;
          width: 8rem;
          background: $blueLight;
          margin-right: 16rem;
        }
      }
    }
  }
}
</style>
