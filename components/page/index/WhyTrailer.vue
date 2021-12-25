<template>
  <iframe
    id="trailer"
    :src="src"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    class="video-trailer w-1126rem h-622rem rounded-8rem bg-black center"
  />
</template>
<style lang="scss" scoped>
@include size('small') {
  .video-trailer {
    width: 100vw;
    height: 207rem;
    border-radius: 0;
  }
}
</style>
<script setup lang="ts">
const src = ref('https://www.YouTube.com/embed/6dQT3FVslVQ')
const scrollTrailer = () => {
  const trailer = document.getElementById('trailer')
  const trailerBounding = trailer.getBoundingClientRect()

  if (trailerBounding.top < window.innerHeight / 2) {
    src.value = 'https://www.YouTube.com/embed/6dQT3FVslVQ?autoplay=1'
    window.removeEventListener('scroll', scrollTrailer)
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollTrailer)
})
onUnmounted(() => {
  window.removeEventListener('scroll', scrollTrailer)
})
</script>
