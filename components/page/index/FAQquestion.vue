<template>
  <div class="padding-all">
    <div class="heading-2 flex items-start justify-between ">
      <h2 class="mb-24rem">
        <span class="carolinaLight font-semibold">
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
          Lectus sit amet est placerat in egestas erat imperdiet in massa tempor
          nec feugiat nisl?
        </p>
        <p class="mb-8rem">
          Penatibus et magnis dis parturient. Varius morbi enim nunc faucibus a
          pellentesque sit amet. Quam nulla porttitor massa id neque aliquam
          vestibulum morbi.
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
      'Lectus sit amet est placerat in egestas erat imperdiet in massa tempor nec feugiat nisl?',
    desc:
      'Penatibus et magnis dis parturient. Varius morbi enim nunc faucibus a pellentesque sit amet. Quam nulla porttitor massa id neque aliquam vestibulum morbi.',
    up: false,
    down: false,
  },
  {
    title:
      'Lectus sit amet est placerat in egestas erat imperdiet in massa tempor nec feugiat nisl?',
    desc:
      'Penatibus et magnis dis parturient. Varius morbi enim nunc faucibus a pellentesque sit amet. Quam nulla porttitor massa id neque aliquam vestibulum morbi.',
    up: false,
    down: false,
  },
  {
    title:
      'Lectus sit amet est placerat in egestas erat imperdiet in massa tempor nec feugiat nisl?',
    desc:
      'Penatibus et magnis dis parturient. Varius morbi enim nunc faucibus a pellentesque sit amet. Quam nulla porttitor massa id neque aliquam vestibulum morbi.',
    up: false,
    down: false,
  },
  {
    title:
      'Lectus sit amet est placerat in egestas erat imperdiet in massa tempor nec feugiat nisl?',
    desc:
      'Penatibus et magnis dis parturient. Varius morbi enim nunc faucibus a pellentesque sit amet. Quam nulla porttitor massa id neque aliquam vestibulum morbi.',
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
