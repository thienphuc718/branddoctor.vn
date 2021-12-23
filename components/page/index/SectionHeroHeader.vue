<template>
  <div class="row content-box heading-box">
    <div class="row items-center flex-1 gap-16rem hidden-mob">
      <div
        class="border-1 !border-#FFBC05 rounded-40rem flex gap-8rem py-8rem px-16rem"
      >
        <BaseIcon name="human-chat" />
        <p>
          <span class="font-semibold !text-#FFBC05">Tặng vé Talk Show (buổi đầu)</span>
        </p>
      </div>
      <div class="border-1 rounded-40rem flex gap-8rem py-8rem px-16rem">
        <BaseIcon name="calendar" />
        <p>
          08/01/2021
        </p>
      </div>
      <div class="border-1 rounded-40rem flex gap-8rem py-8rem px-16rem">
        <BaseIcon name="zoom" />
        <p>
          Zoom Meeting
        </p>
      </div>
    </div>
    <div class="row-counter flex flex-1 justify-end gap-16rem">
      <div class="counter flex gap-16rem hidden-des">
        <div v-for="(digit, index) in digit" :key="digit">
          <h4>{{ ('0' + counter[digit.type]).slice(-2) }}</h4>
          <p>{{ digit.text }}</p>
        </div>
      </div>
      <PageIndexProgress bar="white" inner="#637381" bg="black" />
      <div
        class="border-1 rounded-40rem flex gap-8rem py-8rem px-16rem hidden-mob"
      >
        <BaseIcon name="clock" />
        <p>
          <span class="font-semibold">Cả chuyên đề: 4 buổi</span><span> (10 giờ)</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Counter from '~/logic/Counter.ts'

const digit = [
  { type: 'days', text: 'NGÀY' },
  { type: 'hours', text: 'GIỜ' },
  { type: 'minutes', text: 'PHÚT' },
  { type: 'seconds', text: 'GIÂY' },
]
const counter = Counter('Jan 8 2022 09:00:00 GMT+0700 (Giờ Đông Dương)')
</script>
<style lang="scss" scoped>
@include size('small') {
  .row-counter {
    justify-content: space-between;
  }
}
.time {
  padding: 0 8rem;

  &:not(.time:last-child) {
    border-right: solid 1px;
  }
  &.progress {
    span {
      text-align: left;
    }
  }

  span {
    display: block;
    text-align: center;
    &.digit {
      font-weight: 700;
      font-size: 20rem;
      margin-bottom: -8rem;
    }
    &.text {
      font-size: 8rem;
    }
  }
}
</style>
<style lang="scss">
[data-v-540dbd8a] {
  svg {
    path {
      fill: white;
    }
  }
  .icon-human-chat {
    path {
      fill: $yellowBasic;
    }
  }
}
</style>
