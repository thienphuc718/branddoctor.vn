<template>
  <div class="content-why">
    <div class="heading-2">
      <h2 class="pb-32rem mb-32rem">
        <span class="carolinaLight font-semibold">
          Tôi sẽ làm được gì sau chuyên đề?
        </span>
      </h2>
      <div class="col gap-32rem">
        <div
          v-for="(why, index) in why"
          :key="why"
          class="why flex gap-16rem items-start"
        >
          <BaseIcon :name="`why-${index + 1}`" />
          <div>
            <p class="thick">
              <span class=" inkLight text-18rem">{{ why.title }}</span>
            </p>
            <p>
              <span class="inkLighter">{{ why.desc }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const why = [
  {
    title: 'Phân tích SWOT của bản thân',
    desc: 'Biết được đâu là điểm mạnh và cơ hội của mình nhằm tận dụng chúng.',
    link: '',
  },
  {
    title: 'Định hình hình ảnh bản thân mong muốn ',
    desc: 'Khám phá điểm giúp bạn tỏa sáng và khắc họa chân dung của bạn.',
    link: '',
  },
  {
    title: 'Kế hoạch lan tỏa hình ảnh thương hiệu của bản thân',
    desc: 'Từ đó xây dựng tầm ảnh hưởng của bạn.',
    link: '',
  },
]
</script>
<style lang="scss" scoped>
@include size('small') {
  .heading-1 {
    .hidden-des {
      &:before {
        content: '';
        display: block;
        min-height: 40rem;
        width: 8rem;
        background: $blueLight;
        margin-right: 16rem;
      }
    }
  }
}
</style>
