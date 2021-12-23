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
</script>

<style lang="css" scoped></style>
