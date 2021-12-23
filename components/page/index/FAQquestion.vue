<template>
  <div class="padding-all">
    <div class="heading-2 flex items-start justify-between ">
      <h2 class="mb-24rem">
        <span class="carolinaLight font-medium">
          Câu hỏi thường gặp
        </span>
      </h2>
    </div>
    <div class="questions flex flex-wrap gap-32rem">
      <div
        v-for="(question, index) in question"
        :key="question"
        class="question content-box p-24rem border-2 !border-#C4CDD5 rounded-4rem"
      >
        <p class="thick mb-8rem">
          {{ question.title }}
        </p>
        <p class="mb-8rem">
          {{ question.desc }}
        </p>
        <div class="flex gap-16rem">
          <BaseIcon name="upvote" @click="toggleUp(index)" />
          <BaseIcon name="downvote" @click="toggleDown(index)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getDocument } from 'ssr-window'

const document = getDocument()

const question = [
  {
    title:
      'Tại sao BDA tặng tôi vé tham gia Talk Show “Thương hiệu cá nhân 5.0 – Góc nhìn từ những điểm khác biệt”?',
    desc:
      'Vì sứ mệnh “Kiến tạo sự nghiệp của bạn”, BDA mong muốn mỗi thanh niên Việt Nam đều hiểu và biết vận dụng Thương hiệu cá nhân.',
    up: false,
    down: false,
  },
  {
    title: 'Chuyên đề này có được mở lớp thường xuyên không?',
    desc:
      'Có. BDA sẽ mở lớp chuyên đề này thường xuyên. Trong trường hợp bạn không thể tham gia trong thời gian này, bạn vẫn có thể đăng ký & bổ sung ở phần ghi chú “Tôi muốn học một lịch khác”, bộ phận CSKH sẽ liên lạc bạn.',
    up: false,
    down: false,
  },
  {
    title: 'Ebook “Lộ trình xây dựng thương hiệu cá nhân 5.0” có gì?',
    desc:
      'Ai là người cần xây dựng thương hiệu? Thương hiệu cá nhân 5.0 là gì? Đâu là điều khiến bạn tỏa sáng? Tổng quan 3 bước xây dựng thương hiệu cá nhân & Lời khuyên từ chuyên gia? – Tất cả sẽ được giải đáp trong ebook này.',
    up: false,
    down: false,
  },
  {
    title: 'Chuyên đề này trị giá bao nhiêu?',
    desc:
      'Mức học phí cho chuyên đề này là 5.000.000 VNĐ/học viên. Khi đăng ký học theo nhóm 3 người, nhóm sẽ được giảm 10% học phí. Và khi đăng ký học theo nhóm 5 người, nhóm sẽ được giảm 20% học phí.',
    up: false,
    down: false,
  },
]
const toggleUp = (index) => {
  const questions = document.querySelectorAll('.question[data-v-13adc31a]')
  const upVote = questions[index].querySelector('.icon-upvote')
  const downVote = questions[index].querySelector('.icon-downvote')

  upVote.classList.add('item-active')
  downVote.classList.remove('item-active')
}
const toggleDown = (index) => {
  const questions = document.querySelectorAll('.question[data-v-13adc31a]')
  const upVote = questions[index].querySelector('.icon-upvote')
  const downVote = questions[index].querySelector('.icon-downvote')

  upVote.classList.remove('item-active')
  downVote.classList.add('item-active')
}
</script>
<style lang="scss" scoped>
.question {
  width: calc(50% - 16rem);
  &:hover {
    border-color: $blueLighter !important;
    .thick {
      color: $blueLight !important;
    }
  }
}
@include size('small') {
  .padding-all {
    padding-top: 0;
  }
}
</style>
<style lang="scss">
.icon-upvote {
  &:hover,
  &.item-active {
    cursor: pointer;
    path {
      fill: $blueBasic;
    }
  }
}
.icon-downvote {
  &:hover,
  &.item-active {
    cursor: pointer;
    path {
      fill: $errorBasic;
    }
  }
}
</style>
