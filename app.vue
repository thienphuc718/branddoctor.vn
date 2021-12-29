<template>
  <main style="overflow: hidden">
    <Head>
      <!-- Facebook Pixel Code -->
      <Script src="/pixel.js" />
      <noscript><img
        height="1"
        width="1"
        style="display:none"
        src="https://www.facebook.com/tr?id=295000139110577&ev=PageView&noscript=1"
        /></noscript>
      <!-- End Facebook Pixel Code -->
    </Head>
    <NuxtPage />
  </main>
</template>

<style lang="scss">
@import '~/assets/scss/base.scss', '~/assets/scss/typography.scss',
  '~/assets/scss/form.scss', '~/assets/scss/reset.scss';
</style>
<script setup lang="ts">
import 'uno.css'
</script>
