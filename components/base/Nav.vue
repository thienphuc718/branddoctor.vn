<template>
  <div class="flex" :style="{ '--fill': props.fill, '--stroke': props.stroke }">
    <slot />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  fill: '',
  stroke: '',
})
</script>
<style lang="scss">
.nav-prev {
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
    path {
      fill: var(--fill);
    }
    rect {
      stroke: var(--stroke);
    }
  }
}
.nav-next {
  cursor: pointer;

  &:hover {
    path {
      fill: var(--fill);
    }
    rect {
      stroke: var(--stroke);
    }
  }
}
</style>
