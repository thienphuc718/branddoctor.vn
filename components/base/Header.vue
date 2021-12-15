<template>
  <div
    id="header"
    class="row gap-24rem items-center justify-between bg-black h-80rem padding-all content-box dark border-b-1"
  >
    <div class="search-bar row gap-24rem items-center flex-1">
      <BaseIcon name="search" />
      <input
        type="text"
        placeholder="Tìm kiếm khóa học, giảng viên,...."
        class="italic bg-transparent border-0"
      >
    </div>
    <div class="logo flex-auto row justify-center">
      <BaseIcon name="bda-logo-text" />
    </div>
    <div class="menu row flex-1 justify-end">
      <p class="thick border-r-1 pr-24rem ">
        ĐĂNG NHẬP
      </p>
      <div
        class="hamburger col items-end justify-evenly cursor-pointer m-l-24rem"
      >
        <div class="line bg-white h-1.9px w-15rem" />
        <div class="line bg-white h-1.9px w-20rem" />
        <div class="line bg-white h-1.9px w-15rem" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mediaMobile } from 'mediaQuery'
</script>

<style lang="scss" scoped>
.hamburger {
  &:hover {
    .line {
      width: 20rem;
      transition: 0.5s ease;
    }
  }
}
</style>
