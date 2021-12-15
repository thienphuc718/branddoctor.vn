<template>
  <div
    class="flex items-center gap-12rem"
    :style="{ '--bar': props.bar, '--inner': props.inner, '--bg': props.bg }"
  >
    <div class="progress">
      <div class="bar" />
      <div class="inner" />
    </div>
    <div class="col">
      <h4 class="font-bold -mb-8rem">
        30%
      </h4>
      <p><span class="text-8rem">ĐÃ ĐĂNG KÝ</span></p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  bar: '',
  inner: '',
  bg: '',
})
</script>
<style lang="scss" scoped>
.progress {
  border-radius: 50%;
  height: 32rem;
  width: 32rem;
  position: relative;
  div {
    position: absolute;
    left: calc(50% - 16rem);
    top: calc(50% - 16rem);
    width: 32rem;
    height: 32rem;
    border-radius: 50%;
    &.bar {
      background: linear-gradient(90deg, var(--inner) 70%, var(--bar) 70%);
    }
    &.inner {
      background: var(--bg);
      transform: scale(0.85);
      transform-origin: center;
    }
  }
}
</style>
