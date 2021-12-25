<template>
  <div
    class="flex justify-between content-header bg-white z-9999 border-b-2rempx"
    :class="{ 'item-active': isHeaderActive }"
  >
    <div class="flex gap-32rem content-box items-center">
      <p
        v-for="menu in menu"
        :key="menu"
        class="font-medium menu"
        :class="{ 'item-active': activeMenu.title === menu.title }"
        @click="menu.callback"
      >
        <span class="inkLightest">{{ menu.title }}</span>
      </p>
    </div>

    <div v-if="isActive" class="flex justify-between gap-16rem items-center">
      <div class="counter flex gap-12rem">
        <div v-for="(digit, index) in digit" :key="digit">
          <h4>{{ ('0' + counter[digit.type]).slice(-2) }}</h4>
          <p>
            {{ digit.text }}
          </p>
        </div>
      </div>
      <PageIndexProgress bar="#5584E5" inner="#DFE3E8" bg="white" />
      <div class="flex gap-16rem items-center">
        <BaseButton
          title="Tham gia Talk Show"
          size="big"
          theme="dark"
          @click="isCheckout = true"
        />
        <PageIndexCta
          theme="light"
          size="big"
          title="Đăng ký chuyên đề"
          @click="isCheckout = true"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getWindow, getDocument } from 'ssr-window'
import Counter from '~/logic/Counter.ts'

const window = getWindow()
const document = getDocument()

const isCheckout = inject('isCheckout')

const menu = [
  {
    title: 'Tại sao',
    callback: () => {
      document.getElementById('why').scrollIntoView({ behavior: 'smooth' })
    },
  },
  {
    title: 'Tổng quan',
    callback: () => {
      document.getElementById('general').scrollIntoView({ behavior: 'smooth' })
    },
  },
  {
    title: 'Chương trình',
    callback: () => {
      document.getElementById('program').scrollIntoView({ behavior: 'smooth' })
    },
  },
  {
    title: 'Chuyên gia',
    callback: () => {
      document.getElementById('speaker').scrollIntoView({ behavior: 'smooth' })
    },
  },
  {
    title: 'FAQ',
    callback: () => {
      document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })
    },
  },
]

const scrollMenu = () => {
  const sections = ['why', 'general', 'program', 'speaker', 'faq']

  sections.forEach((name, index) => {
    const section = document.getElementById(name)
    const sectionBounding = section.getBoundingClientRect()
    if (sectionBounding.top < 0 && sectionBounding.bottom > 0)
      activeMenu.value = menu[index]
  })
}

onMounted(() => {
  window.addEventListener('scroll', scrollMenu)
})
onUnmounted(() => {
  window.removeEventListener('scroll', scrollMenu)
})

const activeMenu = ref(menu[0])
const isHeaderActive = inject('isHeaderActive')
const isCtaActive = inject('isCtaActive')

const isActive = computed(() => {
  if (isHeaderActive.value && isCtaActive.value) return true
  else return false
})

const digit = [
  { type: 'days', text: 'NGÀY' },
  { type: 'hours', text: 'GIỜ' },
  { type: 'minutes', text: 'PHÚT' },
  { type: 'seconds', text: 'GIÂY' },
]
const counter = Counter('Jan 8 2022 09:00:00 GMT+0700 (Giờ Đông Dương)')
</script>

<style lang="scss" scoped>
.content-header {
  &.item-active {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 2px 16px 0px #212b3614;
    padding: 20rem 200rem;
  }

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
}
</style>
