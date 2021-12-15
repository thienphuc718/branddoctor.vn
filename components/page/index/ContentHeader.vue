<template>
  <div class="content-header flex gap-32rem content-box border-b-1px">
    <p
      v-for="menu in menu"
      :key="menu"
      class="font-medium menu pb-12rem"
      :class="{ 'item-active': activeMenu === menu }"
    >
      <span class="inkLightest">{{ menu }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
const menu = ['Đặt vấn đề', 'Tổng quan', 'Nội dung', 'Giảng viên', 'FAQ']
const activeMenu = ref(menu[0])
</script>

<style lang="scss" scoped>
.menu {
  &:hover {
    span {
      color: $blueLight;
      cursor: pointer;
    }
  }

  &.item-active {
    border-bottom: solid 3px $blueLight;

    span {
      color: $blueLight;
    }
  }
}
</style>
