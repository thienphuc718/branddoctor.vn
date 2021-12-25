<template>
  <div class="py-48rem px-120rem">
    <p class="mb-24rem">
      <span class="font-semibold">Chọn nội dung bạn muốn đăng ký </span>
    </p>
    <div class="tab rounded-8rem border-1 bg-skyLightest">
      <div class="tab-header flex px-24rem py-12rem">
        <div class="flex w-100% items-center">
          <div class="flex w-6% ticket-checkbox items-center">
            <input type="checkbox" class="w-18rem h-18rem">
          </div>
          <p class="w-49%">
            Tất cả
          </p>
          <p class="pl-12rem w-17% hidden-mob">
            Đơn giá
          </p>
          <p class="pl-12rem w-17% hidden-mob">
            Số lượng
          </p>
          <p class="w-17%  text-right hidden-mob">
            Thành tiền
          </p>
        </div>
      </div>
      <div
        v-for="(ticket, index) in ticket"
        :key="ticket"
        class="flex w-100% items-center bg-white p-24rem ticket-row"
      >
        <div id="ticket-checkbox" class="flex w-6% ">
          <input
            type="checkbox"
            value="Đăng ký"
            class="w-18rem h-18rem"
            :name="ticket.name"
          >
        </div>
        <div class="row w-100%">
          <div class="w-49% flex gap-24rem ticket-name">
            <img
              :src="`/ldp-ticket-${index + 1}.jpg`"
              alt=""
              width="112"
              height="112"
            >
            <div>
              <p>
                <span class="font-medium inkLightest text-14rem mb-12rem">{{
                  ticket.title
                }}</span>
              </p>
              <p>
                <span class="text-18rem font-medium inkLight">{{ ticket.desc.before }}
                  <span class="block">{{ ticket.desc.content }}</span>{{ ticket.desc.after }}</span>
              </p>
            </div>
          </div>
          <div class="flex ticket-price flex-grow items-center">
            <p class="pl-12rem w-33%">
              <span class="text-18rem font-medium inkLight">{{
                currency(ticket.price)
                  .toString()
                  .replaceAll(',', '.')
              }}đ</span>
            </p>
            <div class="pl-12rem w-33%">
              <p class="h-32rem w-32rem bg-inkLightest rounded-4rem center">
                <span class="font-semibold white">{{ cloneIndex }}</span>
              </p>
            </div>
            <p class="w-33%  text-right  hidden-mob">
              <span class="text-18rem font-medium blueLight">{{
                currency(ticket.price * cloneIndex)
                  .toString()
                  .replaceAll(',', '.')
              }}đ</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const ticket = [
  {
    title: 'Chuyên đề',
    name: 'chuyende',
    desc: {
      before: 'Thương hiệu cá nhân 5.0 –',
      content: ' Góc nhìn từ ',
      after: 'những điểm khác biệt',
    },
    price: 5000000,
  },
  {
    title: 'Talk Show',
    name: 'talkshow',
    desc: {
      before: 'Vé Talk Show “Thương hiệu cá nhân 5.0”',
      content: '',
      after: '',
    },
    price: 0,
  },
]
const cloneIndex = inject('cloneIndex')
const currency = function(number) {
  return new Intl.NumberFormat('ja-JP', {
    style: 'decimal',
    minimumFractionDigits: 0,
  }).format(number)
}
</script>
<style lang="scss" scoped>
#ticket-checkbox {
  width: 6%;
}
@include size('small') {
  #ticket-checkbox {
    min-width: 30px;
    min-height: 30px;

    input[type='checkbox'] {
    }
  }

  .ticket-row {
    .ticket-name {
      width: 100%;
    }
    .ticket-price {
      width: 100%;
      justify-content: space-between;
      margin-top: 24rem;
    }
  }
}
</style>
