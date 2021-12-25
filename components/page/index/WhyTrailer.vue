<template>
  <iframe
    id="trailer"
    src="https://www.youtube.com/embed/6dQT3FVslVQ"
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
