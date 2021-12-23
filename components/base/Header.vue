<template>
  <div
    id="header"
    class="flex gap-24rem items-center justify-between h-70rem p-24rem dark border-b-1 w-100vw absolute left-0 top-40rem z-9999"
  >
    <div class="search-bar flex gap-24rem items-center flex-1">
      <BaseIcon name="search" />
      <input
        type="text"
        placeholder="Tìm kiếm khóa học, giảng viên,...."
        class="italic bg-transparent border-0 w-300rem hidden-mob"
      >
    </div>
    <div class="logo flex-auto flex justify-center">
      <BaseIcon name="bda-logo-text" />
    </div>
    <div class="menu flex flex-1 justify-end">
      <p class="thick border-r-1 pr-24rem hidden-mob">
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
#header {
  .logo {
    @include size('small') {
      justify-content: center;

      .icon-bda-logo-text {
        width: 90%;
      }
    }
  }

  .menu {
    @include size('small') {
      justify-content: flex-start;
    }

    .hamburger {
      @include size('small') {
        height: 20rem;
        margin-left: 0;
      }

      &:hover {
        .line {
          width: 20rem;
          transition: 0.5s ease;
        }
      }
    }
  }
}
</style>
