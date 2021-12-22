<template>
  <BaseButton
    :title="props.title"
    :size="props.size"
    :theme="props.theme"
    class="special-eff-btn"
  >
    <BaseIcon name="glitter" class="glitter-1" />
    <BaseIcon name="glitter" class="glitter-2" />
  </BaseButton>
</template>
<script setup lang="ts">
import gsap from 'gsap'

const props = defineProps({
  theme: '',
  title: '',
  size: { default: 'regular', type: String },
})

onMounted(() => {
  const glitterOne = gsap
    .timeline()
    .add()
    .to('.glitter-1', { left: 'calc(100% - 20rem)' })
    .to('.glitter-1', { top: 'calc(100% - 20rem)' })
    .to('.glitter-1', { left: '4rem' })
    .to('.glitter-1', { top: '4rem' })

  const glitterTwo = gsap
    .timeline()
    .add()
    .to('.glitter-2', { right: 'calc(100% - 20rem)' })
    .to('.glitter-2', { bottom: 'calc(100% - 20rem)' })
    .to('.glitter-2', { right: '4rem' })
    .to('.glitter-2', { bottom: '4rem' })

  glitterOne.repeat(-1).duration(3)
  glitterTwo.repeat(-1).duration(3)
})
</script>
<style lang="scss">
.cta.special-eff-btn {
  background: transparent;
  position: relative;
  padding-right: 16rem;
  &.dark {
    border-color: white;
    &:hover {
      border-color: $blueLight;
      background: transparent;
      color: $blueLight;
    }
  }
  &.light {
    border-color: $skyLight;
    &:hover {
      border-color: $blueLight;
      background: transparent;
      color: $blueBasic;
    }
  }

  .icon-glitter {
    position: absolute;
    &.glitter-1 {
      top: 4rem;
      left: 4rem;
    }
    &.glitter-2 {
      bottom: 4rem;
      right: 4rem;
    }
    svg {
      width: 15px;
    }
  }
}
</style>
