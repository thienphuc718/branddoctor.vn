<template>
  <div
    class="show-hide"
    :style="{ '--min': props.min, '--max': props.max }"
    :class="{ 'item-active': isShow }"
  >
    <slot />
    <div
      class="showmore flex gap-12rem justify-center mt-32rem items-start absolute bottom-16rem w-200rem"
    >
      <p
        class="font-semibold border-b-2 !border-#454F5B leading-1.2em flex-shrink-0"
        @click="isShow = !isShow"
      >
        <span v-if="isShow">{{ props.hide }}</span>
        <span v-else>{{ props.show }}</span>
      </p>
      <BaseIcon name="cheviron-down" :class="{ 'item-active': isShow }" />
    </div>
  </div>
</template>
<script setup lang="ts">
const isShow = ref(false)
const props = defineProps({
  show: { type: String, default: 'Hiển thị thêm' },
  hide: { type: String, default: 'Thu lại' },
  min: { type: String, default: '300rem' },
  max: { type: String, default: '1500rem' },
})
</script>
<style lang="scss">
.show-hide {
  transition: 1s ease;
  overflow: hidden;
  max-height: var(--min);

  &.item-active {
    max-height: var(--max);
  }
  .showmore {
    left: calc(50% - 100rem);
    .item-active {
      svg {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
