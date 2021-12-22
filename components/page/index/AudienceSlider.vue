<template>
  <div id="audienceSlider" class="slider">
    <div ref="track" class="track flex gap-16rem">
      <div
        v-for="(slide, index) in slide"
        class="slide flex gap-12rem border-1 rounded-4rem p-24rem items-start base-shadow"
        :class="{ 'item-active': activeSlide.title == slide.title }"
      >
        <BaseIcon :name="`human-${index + 1}`" class="icon" />
        <div class="col">
          <p class="font-semibold leading-1.4em mb-8rem">
            <span class="blueLight">Cá nhân có nhu cầu xây dựng thương hiệu cá nhân</span>
          </p>
          <p>Để phát triển doanh nghiệp của chính mình trong tương lai.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const slide = [
  {
    title: 'Cá nhân có nhu cầu xây dựng thương hiệu cá nhân',
    desc: 'Để phát triển doanh nghiệp của chính mình trong  tương lai.',
  },
  {
    title: 'Lãnh đạo doanh nghiệp',
    desc:
      'Doanh nghiệp không được khách hàng biết đến vì sự khác biệt nào. Vẫn sử dụng ăn theo các doanh...',
  },
  {
    title: 'Quản lý cấp trung',
    desc:
      'Vẫn chưa vượt khỏi giá trị cốt lõi của sản phẩm - không tạo ra được giá trị cộng thêm/ các kênh vẫn còn chỉ...',
  },
  {
    title: 'Nhân viên phòng ban',
    desc:
      'Có mong đợi được thăng tiến lên các vị trí cao hơn trong tương lai. Tư duy về thị trường chưa tốt...',
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
    .icon[data-v-44eae652] {
      path {
        fill: white;
      }
    }
  }
}
</style>
