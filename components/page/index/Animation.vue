<template>
  <div class="animation center fixed top-0 bottom-0 left-0 right-0 z-9999">
    <div
      class="background bg-#0D1F30DA absolute top-0 bottom-0 left-0 right-0 -z-1"
    />
    <div class="ani-col col center">
      <BaseIcon name="quote" class="mb-48rem" />
      <div class="heading-box w-490rem mb-80rem">
        <div class="heading-1">
          <h2 class="align text-center overflow-hidden ani-text">
            <span class="white"><span class="yellowBasic">Nào, hãy cùng đặt câu hỏi: </span> Tại
              sao tôi cần thương hiệu cá nhân?</span>
          </h2>
        </div>
      </div>
      <div
        class="progress-bar w-96rem rounded-22rem h-6rem border-2rem border-white flex items-center"
      >
        <div class="bar bg-white w-100% rounded-22rem h-5rem" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'

const isAnimated = inject('isAnimated')
onMounted(() => {
  gsap
    .timeline()
    .from('.animation', { top: '100%', duration: 0.75, ease: 'linear' })
    .from('.ani-col', { opacity: 0, duration: 0.75, ease: 'linear' })
    .from('.progress-bar .bar', {
      width: '0%',
      duration: 2,
      ease: 'linear',
      onComplete: () => {
        gsap
          .timeline()
          .to('.animation', { opacity: 0, duration: 0.5, ease: 'linear' })
        gsap.to('.animation', {
          top: '100%',
          duration: 1,
          ease: 'linear',
          onComplete: () => {
            isAnimated.value = false
          },
        })
      },
    })
  gsap.from('.ani-text span', {
    y: '-150%',
    duration: 2,
    delay: 2,
    ease: 'linear',
  })
})
</script>
<style lang="scss" scoped>
.progress-bar {
  width: 96rem;
}
.background {
  background: #0d1f30cc;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
@include size('small') {
  .animation {
    padding: 24rem;

    h2 {
      text-align: center;
      font-size: 26rem;
    }
  }
}
</style>
