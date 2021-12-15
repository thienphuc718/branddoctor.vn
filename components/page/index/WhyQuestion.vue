<template>
  <div class="col items-center w-728rem content-box heading-box">
    <div class="flex justify-center mb-80rem">
      <p>Khóa học: Bác sĩ thương hiệu một sao</p>
      <p class="px-8rem">
        •
      </p>
      <p class="thick">
        <span class="blueLight">Chuyên đề 01: Thương hiệu cá nhân 5.0 - Góc nhìn từ nh...</span>
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
              {{ why.title }} <span class="thick blueLight">?</span>
            </h2>
          </div>
          <p>
            {{ why.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const why = [
  {
    title:
      'Vì sao bạn không tìm thấy được khách hàng mặt dù đã chạy quảng cáo rất nhiều ',
    desc:
      'Vì sao bạn không tìm thấy được khách hàng mặt dù đã chạy quảng cáo rất nhiều?',
  },
  {
    title:
      'Vì sao đâm đầu vào chuyển đổi số nhưng kết quả vẫn không khá là bao ',
    desc:
      'Vì sao bạn không tìm thấy được khách hàng mặt dù đã chạy quảng cáo rất nhiều?',
  },
  {
    title: 'Vì sao ai cũng đâm đầu chuyển đổi số mà doanh thu vẫn dậm chân ',
    desc:
      'Vì sao bạn không tìm thấy được khách hàng mặt dù đã chạy quảng cáo rất nhiều?',
  },
]
</script>
