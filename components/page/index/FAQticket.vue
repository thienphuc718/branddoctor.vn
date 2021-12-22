<template>
  <div class="col w-100% items-center mb-120rem faq-ticket">
    <div class="col items-center w-728rem content-box heading-box">
      <div class="col items-center gap-56rem">
        <div class="why row gap-32rem items-start">
          <div
            class="min-w-40rem min-h-40rem rounded-50% bg-blueLight shrink-0 center mt-6rem"
          />
          <div class="heading-2">
            <h2 class="mb-12rem border-b-1 pb-20rem border-skyLight">
              <span class="inkLight">Bạn “không thể” tham gia chuyên đề này</span>
              <span class="thick blueLight">?</span>
            </h2>
            <h2 class="mt-24rem">
              <span class="inkLight">Đừng lo lắng, BDA vẫn tặng bạn:</span>
              <span class="thick blueLight block mt-4rem">1 vé tham gia Talk Show miễn phí</span>
            </h2>
            <img
              src="/ldp-ticket.jpg"
              width="656"
              height="250.4"
              class="width-100% mt-32rem"
            >
            <div class="flex justify-between mt-16rem">
              <div class="counter flex gap-16rem">
                <div v-for="(digit, index) in digit" :key="digit">
                  <h4>
                    <span class="inkLight">{{
                      ('0' + counter[digit.type]).slice(-2)
                    }}</span>
                  </h4>
                  <p>
                    <span class="inkLight">{{ digit.text }}</span>
                  </p>
                </div>
              </div>
              <PageIndexProgress bar="#5584E5" inner="#DFE3E8" bg="white" />
            </div>
            <BaseButton
              title="Tham gia talk show"
              size="big"
              theme="dark"
              class="w-288rem my-32rem"
            />
            <p class="font-semibold py-24rem border-t-1">
              Hoặc nếu bạn suy nghĩ lại, bạn vẫn có thể đăng ký chuyên đề đào
              tạo tại đây:
            </p>
            <PageIndexCta
              theme="light"
              size="big"
              title="Đăng ký chuyên đề"
              class="w-288rem mb-32rem"
            />
          </div>
        </div>
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
const counter = Counter('Dec 27 2021 09:00:00 GMT+0700 (Giờ Đông Dương)')
</script>
<style lang="scss" scoped>
@include size('small') {
  .faq-ticket {
    padding: 24rem;
    h2 {
      font-weight: 600;
    }
  }
}
</style>
