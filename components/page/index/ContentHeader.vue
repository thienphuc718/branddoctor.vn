<template>
  <div
    class="flex justify-between content-header bg-white z-9999 border-b-1px"
    :class="{ 'item-active': isHeaderActive }"
  >
    <div class="flex gap-32rem content-box items-center">
      <p
        v-for="menu in menu"
        :key="menu"
        class="font-medium menu"
        :class="{ 'item-active': activeMenu === menu }"
      >
        <span class="inkLightest">{{ menu }}</span>
      </p>
    </div>

    <div v-if="isActive" class="flex justify-between gap-32rem items-center">
      <div class="counter flex gap-16rem">
        <div v-for="(digit, index) in digit" :key="digit">
          <h4>{{ ('0' + counter[digit.type]).slice(-2) }}</h4>
          <p>{{ digit.text }}</p>
        </div>
      </div>
      <PageIndexProgress bar="#5584E5" inner="#DFE3E8" bg="white" />
      <div class="flex gap-16rem items-center">
        <PageIndexCta theme="light" title="Tham gia Talk Show" />
        <BaseButton title="Đăng ký chuyên đề" size="regular" theme="dark" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Counter from '~/logic/Counter.ts'

const menu = ['Tại sao', 'Tổng quan', 'Chương trình', 'Chuyên gia', 'FAQ']
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
const counter = Counter('Dec 27 2021 09:00:00 GMT+0700 (Giờ Đông Dương)')
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
