<template>
  <div ref="subHeader" class="sub-header content-box" scroll-el>
    <div ref="track" class="track">
      <p
        v-for="(menu, index) in menuList"
        :style="{ order: index }"
        :class="{ 'item-active': activeMenu == menu.menuTitle }"
        class="menu"
        @click="menuHandler(menu)"
      >
        {{ menu.menuTitle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getWindow } from 'ssr-window'
import { mediaMobile } from '~/logic/mediaQuery.ts'
import drag from '~/logic/drag.ts'
const window = getWindow()

// Declare Props
const props = defineProps({
  menuList: {
    type: Array,
    default: () => {
      [
        {
          menuTitle: 'Menu Title',
          menuHandler: (e) => {
            console.log(e)
          },
        },
      ]
    },
  },
})

// Declare active Menu
const activeMenu = ref(props.menuList[0].menuTitle)

// Change Active Menu Onclick and call Menu Handler
const menuHandler = (menu) => {
  activeMenu.value = menu.menuTitle
  menu.menuHandler()
}

// Fixed when reach top screen
const subHeader = ref(null)
const subHeaderScrollHandler = () => {
  if (subHeader.value) {
    if (subHeader.value.parentNode.getBoundingClientRect().top <= 0) {
      subHeader.value.setAttribute(
        'style',
        'position: fixed; top: 0rem; width: 100%;',
      )
      subHeader.value.parentNode.setAttribute(
        'style',
        `padding-top: ${subHeader.value.offsetHeight}px`,
      )
    }
    else {
      subHeader.value.setAttribute('style', '')
      subHeader.value.parentNode.setAttribute('style', '')
    }
  }
}
onMounted(() => {
  window.addEventListener('scroll', subHeaderScrollHandler)
})

// remove EventListener when change Route
const route = useRoute()
watchEffect(() => {
  if (route.path !== '/su-kien')
    window.removeEventListener('scroll', subHeaderScrollHandler)
})

// Mobile Ontouch Drag menu
const track = ref(null)

onMounted(() => {
  drag(track.value)
})
</script>

<style lang="scss" scoped>
.sub-header {
  box-shadow: 0px 4px 21px 0px #00493d1a;
  padding: 24rem 200rem;
  background: white;
  z-index: 99;
  position: relative;
  max-width: 100vw;
  @include size(small) {
    padding: 16rem 32rem;
    position: relative;
    min-height: 60rem;
  }
  &.unClickable {
    .menu {
      &:first-child {
        color: #2e3837 !important;
      }
    }
  }

  .track {
    display: flex;
    gap: 40rem;
    @include size(small) {
      gap: 32rem;
      width: 260vw !important;
      touch-action: none;
    }
    p {
      color: $inkBasic;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        color: $blueBasic;
      }
      &.item-active {
        color: $blueBasic;
      }
    }
  }
}
</style>
