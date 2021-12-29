<template>
  <main style="overflow: hidden">
    <NuxtPage />
  </main>
</template>

<style lang="scss">
@import '~/assets/scss/base.scss', '~/assets/scss/typography.scss',
  '~/assets/scss/form.scss', '~/assets/scss/reset.scss';
</style>
<script setup lang="ts">
import 'uno.css'
useMeta({
  script: { src: '/pixel.js' },
})
</script>
