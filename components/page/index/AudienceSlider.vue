<template>
  <div id="audienceSlider" class="slider pb-8rem">
    <div ref="track" class="track flex gap-16rem">
      <div
        v-for="(slide, index) in slide"
        class="slide flex gap-12rem border-2rem rounded-4rem p-24rem items-start base-shadow"
        :class="{ 'item-active': activeSlide.title == slide.title }"
      >
        <BaseIcon :name="`human-${index + 1}`" class="icon" />
        <div class="col">
          <p class="font-semibold leading-1.4em mb-8rem">
            <span class="blueLight">{{ slide.title }}</span>
          </p>
          <p>{{ slide.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const slide = [
  {
    title: 'Các bạn trẻ đang trên con đường xây dựng sự nghiệp',
    desc: 'Mong muốn có được hình ảnh chuyên nghiệp trong mắt nhà tuyển dụng.',
  },
  {
    title: 'Lãnh đạo doanh nghiệp và quản lý cấp trung',
    desc:
      'Mong muốn nâng cao uy tín, trở nên khác biệt trong mắt nhân viên và đối tác.',
  },
  {
    title: 'Nhân viên thuộc các phòng ban trong doanh nghiệp',
    desc:
      'Mong muốn được thăng tiến trong công việc, đảm nhận các vị trí cao hơn trong tương lai.',
  },
]
const activeSlide = ref(slide[0])
const slideIndex = inject('slideIndex')
watchEffect(() => {
  activeSlide.value = slide[slideIndex.value]
})
</script>
<style lang="scss" scoped>
.slider {
  overflow: hidden;

  .slide {
    min-width: calc(50% - 8rem);
    @include size(small) {
      min-width: 100%;
    }
    min-height: 162rem;
    transition: 0.5s ease;
    &.item-active {
      background: radial-gradient(
        100% 100% at 49.83% 0%,
        #5584e5 0%,
        #003e9f 100%
      );
      p,
      span {
        color: white;
      }
    }
  }
}
</style>
<style lang="scss">
.slide {
  &.item-active {
    svg {
      path {
        fill: white;
      }
    }
  }
}
</style>
