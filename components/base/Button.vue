<template>
  <button class="cta center" :class="theme + ' btn-' + size">
    <span v-if="isIcon" class="icon">
      <slot />
    </span>
    {{ title }}
  </button>
</template>
<script setup lang="ts">
import { useSlots } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  theme: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
  external: {
    type: Boolean,
    default: false,
  },
})
const slots = useSlots()
const isIcon = computed(() => {
  return !!Object.keys(slots).length
})
const isText = computed(() => {
  return !!Object.keys(props.title).length
})
</script>
<style lang="scss">
.cta {
  border-radius: 6rem;
  display: flex;
  border: solid 1rem;
  border-color: transparent;
  cursor: pointer;
  font-family: 'IBM Plex Sans', sans-serif;
  line-height: 1.2em;
  display: flex;
  gap: 8rem;
  justify-content: center;
  align-items: center;
  color: $blueBasic;
  font-weight: 600;

  &:hover {
    color: $blueLight;
  }

  &:active {
    color: $blueDark;
  }

  &.dark {
    background: $blueBasic;
    border-color: $blueBasic;
    color: $white;

    &:hover {
      background: $blueLight;
      border-color: $blueLight;
    }

    &:active {
      background: $blueBasic;
      border-color: $blueBasic;
    }
  }

  &.light {
    background: $white;
    border-color: $inkLight;
    color: $inkLight;

    &:hover {
      border-color: $blueLight;
      color: $blueLight;
    }

    &:active {
      background: $blueLighter;
      border-color: $blueDark;

      a {
        color: $blueDark;
      }
    }
  }

  &.disable {
    pointer-events: none;
    background: $skyLighter;
    border-color: $skyLight;
    color: $inkLightest;
  }

  &.btn-plain {
    font-size: 16rem;
    padding: 0 12rem;
    height: 48rem;
    border-color: transparent;
    color: $blueBasic;

    &:hover {
      background: $blueLighter;
      border-color: $blueLighter;
      color: $blueLight;
    }

    &:active {
      background: $blueLighter;
      border-color: $blueLighter;
      color: $blueDark;
    }
  }

  &.icon-heading {
    justify-content: flex-start;
    pointer-events: none;
    background: transparent;
    color: $blueBasic;
    font-size: 16rem;

    .icon {
      margin-left: -5rem;
    }
  }

  &.btn-big {
    font-size: 16rem;
    padding: 0 12rem;
    height: 48rem;
  }

  &.btn-regular {
    font-size: 16rem;
    padding: 0 8rem;
    height: 40rem;
  }

  &.btn-small {
    font-size: 14rem;
    padding: 0 6rem;
    height: 32rem;
  }
  .icon {
    display: flex;
    align-items: center;
    svg {
      width: 1.3em;
      height: 1.3em;
    }
  }
}
</style>
