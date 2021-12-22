<template>
  <div class="dark h-40rem bg-blueBasic w-100vw overflow-hidden running-text">
    <div class="track justify-start flex items-center h-100%">
      <p v-for="text in 5" :key="text" class="uppercase thick no-wrap">
        – TẶNG BẠN 1 VÉ TALK SHOW THƯƠNG HIỆU CÁ NHÂN 08.01.2022 –
        <span class="warningLight">GIỮ CHỖ NGAY&nbsp;</span>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.running-text {
  .track {
    animation-name: running;
    animation-duration: 60s;
    animation-iteration-count: infinite;
  }
}
@keyframes running {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
