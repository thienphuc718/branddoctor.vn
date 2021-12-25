<template>
  <div
    class="flex items-center gap-12rem"
    :style="{ '--bar': props.bar, '--inner': props.inner, '--bg': props.bg }"
  >
    <div class="progress">
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
  width: 32rem;
  height: 32rem;
  display: block;
  border-radius: 50%;
  background-color: var(--bar);
  float: left;
  // 10% = 126deg = 90 + ( 360 * .1 )
  background-image: linear-gradient(198deg, transparent 50%, var(--inner) 50%),
    linear-gradient(90deg, var(--inner) 50%, transparent 50%);
  .inner {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background: var(--bg);
    transform: scale(0.85);
    transform-origin: center;
  }
}
</style>
