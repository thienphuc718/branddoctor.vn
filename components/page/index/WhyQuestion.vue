<template>
  <div class="col items-center w-708rem content-box heading-box">
    <div class="flex justify-center mb-80rem program-name">
      <p class="whitespace-nowrap">
        Khóa học: Bác sĩ Thương hiệu 1 sao
      </p>
      <p class="whitespace-nowrap px-8rem">
        <span> • </span>
      </p>
      <p class="thick whitespace-nowrap">
        <span class="blueLight">Chuyên đề 01: Thương hiệu cá nhân 5.0 – Góc nhìn từ nh...</span>
      </p>
    </div>
    <div class="col items-center gap-56rem">
      <div
        v-for="(why, index) in why"
        :key="why"
        class="why flex gap-32rem items-start"
      >
        <h4
          class="min-w-40rem min-h-40rem rounded-50% bg-blueLight shrink-0 center mt-6rem"
        >
          <span class="white">{{ index + 1 }}</span>
        </h4>
        <div class="col">
          <div class="heading-2">
            <h2 class="mb-12rem">
              <span class="inkLight">{{ why.before }}
                <span class="yellowDark">{{ why.content }}</span>{{ why.after }}</span>
            </h2>
          </div>
          <p>
            <span class="text-20rem inkLighter">{{ why.desc }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const why = [
  {
    before: 'Tôi mong muốn có được một buổi',
    content: 'phỏng vấn ',
    after: 'thành công?',
    desc: 'Vì cơ hội dành cho không chỉ mình, mà cho cả hằng trăm người khác!',
  },
  {
    before: 'Tôi muốn khẳng định 100% khả năng của mình để',
    content: 'thăng tiến',
    after: '?',
    desc:
      'Vì sự tin tưởng từ đồng nghiệp, nhân viên không xuất phát từ địa vị.',
  },
  {
    before: 'Tôi sợ (hoặc e rằng) một ngày nào đó, tôi sẽ bỏ rơi',
    content: 'các dự định ',
    after: 'của mình?',
    desc: 'Vì tôi thấy mình không đủ khác biệt để thực hiện ước mơ.',
  },
]
</script>
<style lang="scss" scoped>
@include size('small') {
  .why {
    gap: 24rem;
  }
}
</style>
