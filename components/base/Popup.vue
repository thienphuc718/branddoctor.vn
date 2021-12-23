<template>
  <section class="light center">
    <div class="popup-content">
      <slot />
      <div class="close-btn" @click="isPopupActive = false" />
    </div>
  </section>
</template>

<script setup lang="ts">
const isPopupActive = inject('isPopupActive')
</script>

<style lang="scss" scoped>
.light {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  background: transparent;
  &:before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #000000;
    opacity: 0.8;
    pointer-events: none;
    z-index: -1;
  }
  .popup-content {
    min-width: 500rem;
    min-height: 500rem;
    background: white;
    position: relative;
    padding: 24rem;
    border-radius: 4rem;
    @include size(small) {
      min-width: calc(100% - 48rem);
      width: calc(100% - 48rem);
      padding: 24rem;
    }
    .close-btn {
      height: 24rem;
      width: 24rem;
      position: absolute;
      top: 12rem;
      right: 12rem;
      opacity: 0.5;
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
      &:before {
        content: '';
        height: 24rem;
        width: 3rem;
        background: black;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:after {
        content: '';
        height: 24rem;
        width: 3rem;
        background: black;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
}
</style>
