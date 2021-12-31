<template>
  <main style="overflow: hidden">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-WG5VKPN"
      height="0"
      width="0"
      style="display:none;visibility:hidden"
      ></iframe
      ></noscript>
    <!-- End Google Tag Manager (noscript) -->
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
  script: [{ src: '/pixel.js' }, { src: '/gtm.js' }],
})
</script>
