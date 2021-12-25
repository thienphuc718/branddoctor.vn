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
  cursor: pointer;
  &:hover {
    path {
      fill: var(--fill);
    }
    rect {
      fill: var(--stroke);
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
      fill: var(--stroke);
    }
  }
}
</style>
