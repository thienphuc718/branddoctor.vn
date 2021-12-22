<template>
  <div class="flex flex-grow gap-24rem">
    <BaseNav
      fill="#5584E5"
      stroke="#5584E5"
      class="gap-8rem col justify-center items-center base-nav hidden-mob"
    >
      <div class="divider flex-grow" />
      <BaseIcon
        name="cheviron-prev"
        class="nav-prev rotate-90 base-shadow !rounded-50%"
        @click="hello.slidePrev"
      />
      <BaseIcon
        name="cheviron-next"
        class="nav-next rotate-90 base-shadow !rounded-50%"
        @click="hello.slideNext"
      />
      <div class="divider flex-grow" />
    </BaseNav>
    <div id="talkshowSlider" class="slider light flex-grow">
      <div class="track col items-stretch gap-24rem">
        <div
          v-for="slide in slide"
          :key="slide"
          class="slide flex p-32rem rounded-8rem border-2 gap-24rem"
        >
          <div class="time min-w-125rem">
            <div class="time-cont">
              <div>
                <h3>{{ slide.time }}</h3>
                <p class="small" :class="{ 'mb-12rem': slide.speaker }">
                  SÁNG | 07/11/2021
                </p>
              </div>
              <img
                v-if="slide.speaker"
                src="/ldp-talkshow-img.png"
                width="80.77"
                height="48"
              >
            </div>
            <p
              v-if="slide.speaker"
              class="gradient-text font-semibold leading-1.2em underline hidden-mob"
            >
              N. K. Trung<br>
              L. A. N. Anh
            </p>
          </div>
          <div class="content">
            <h3 class=" inkLight">
              <span class="blueLight">{{ slide.before }}</span>
              {{ slide.title }}
            </h3>
            <p
              v-if="slide.desc.length"
              class="font-medium inkLightest mt-20rem slide-desc"
            >
              <span class="text-18rem">{{ slide.desc }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Slider from '~/logic/slider.ts'
const slide = [
  {
    time: '09:00',
    title: 'Cảm ơn đơn vị tổ chức, giới thiệu diễn giả và khai giảng chuyên đề',
    before: '',
    desc: '',
    speaker: false,
  },
  {
    time: '09:30',
    title: 'Câu chuyện xây dựng thương hiệu của tôi',
    before: 'Clip ngắn |',
    desc:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    speaker: true,
  },
  {
    time: '09:40',
    title:
      'Những quan niệm sai lầm về thương hiệu cá nhân & các nhân tố tạo thành thương hiệu cá nhân',
    before: '',
    desc:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    speaker: true,
  },
  {
    time: '10:20',
    title: 'Tổng quan lộ trình 3 bước xây dựng thương hiệu cá nhân 5.0',
    before: '',
    desc:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    speaker: true,
  },
  {
    time: '11:10',
    title: 'Giải đáp thắc mắc',
    before: '',
    desc:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    speaker: true,
  },
  {
    time: '11:30',
    title: 'Cảm ơn và kết thúc chương trình',
    before: '',
    desc: '',
    speaker: false,
  },
]
const hello = Slider('#talkshowSlider', 2, 'verticle')
</script>
<style lang="scss" scoped>
.base-nav {
  min-height: 36rem;
}
.divider {
  width: 1px;
  background: $skyLight;
}
.gradient-text {
  --gradient: linear-gradient(90deg, #ffab00 0%, #ff6600 74.44%, #e22b2b 100%);
}
@include size('small') {
  .slider {
    overflow: visible;
    .slide {
      flex-direction: column-reverse;
      border: none;
      box-shadow: 0px 4px 4px 0px #00000040;

      h3 {
        font-size: 16rem;
        font-weight: 500;
        line-height: 1.4;
      }
      .slide-desc {
        span {
          font-size: 16rem;
          font-weight: 400;
        }
      }
      .time {
        position: relative;
        padding-left: 12rem;
        .time-cont {
          display: flex;
          justify-content: space-between;
          p {
            margin-bottom: 0;
          }
          img {
            margin-left: 0;
          }
        }
        &:before {
          content: '';
          width: 2rem;
          height: 100%;
          background: $blueLight;
          position: absolute;
          left: 0;
          top: 0;
        }

        h3 {
          font-size: 22rem;
          font-weight: 600;
          color: $inkLight;
        }
      }
    }
  }
}
</style>
