<template>
  <div class="index">
    <PageIndexPopup v-if="isCheckout" />
    <PageIndexAnimation v-if="isAnimated" />
    <BaseRunningText />
    <BaseHeader />
    <PageIndexSectionHero />
    <PageIndexSectionWhy />
    <PageIndexSectionTalkShow />
    <PageIndexSectionContent />
    <PageIndexSectionFAQ />
    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
import { getDocument } from 'ssr-window'

const document = getDocument()
const isAnimated = ref(false)
const isCheckout = ref(false)
provide('isCheckout', isCheckout)
provide('isAnimated', isAnimated)
onMounted(() => {
  isAnimated.value = true
  watchEffect(() => {
    if (isAnimated.value)
      document.querySelector('html').style.overflow = 'hidden'
    else document.querySelector('html').style.overflow = ''
  })
})

useMeta({
  meta: [
    {
      property: 'og:url',
      content: 'https://branddoctor.vn/',
    },
    {
      property: 'og:title',
      content:
        'Chuyên đề “Thương hiệu cá nhân 5.0 – Góc nhìn từ những điểm khác biệt”',
    },
    {
      property: 'og:image',
      content: 'https://branddoctor.vn/_nuxt/ldp-hero-poster.jpg',
    },
    {
      property: 'og:description',
      content: 'Tặng bạn 1 vé Talk Show – buổi đầu tiên của chuyên đề',
    },
  ],
})
</script>

<style lang="css" scoped></style>
