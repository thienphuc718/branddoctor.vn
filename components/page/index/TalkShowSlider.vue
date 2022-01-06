<template>
  <div class="flex flex-grow gap-24rem">
    <BaseNav
      fill="#fff"
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
    <div
      id="talkshowSlider"
      class="slider light flex-grow"
      @mouseover="isPause = true"
      @mouseout="isPause = false"
    >
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
                  <span class="text-12rem">SÁNG | 08/01/2022</span>
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
import { getDocument, getWindow } from 'ssr-window'
import Slider from '~/logic/slider.ts'
import { mediaMobile } from '~/logic/mediaQuery.ts'

const document = getDocument()
const window = getWindow()

const slide = [
  {
    time: '09:00',
    title: 'Khai giảng chuyên đề',
    before: '',
    desc: '',
    speaker: false,
  },
  {
    time: '09:15',
    title: 'Câu chuyện xây dựng thương hiệu của tôi',
    before: '',
    desc:
      'Lắng nghe diễn giả chia sẻ về câu chuyện xây dựng thương hiệu cá nhân của họ.',
    speaker: true,
  },
  {
    time: '09:40',
    title:
      'Những quan niệm sai lầm về thương hiệu cá nhân và các nhân tố tạo thành thương hiệu cá nhân',
    before: '',
    desc:
      'Phá tan những hiểu lầm về thương hiệu cá nhân và tìm hiểu đâu là các nhân tố tạo thành thương hiệu cá nhân.',
    speaker: true,
  },
  {
    time: '10:20',
    title: 'Tổng quan lộ trình 3 bước xây dựng thương hiệu cá nhân 5.0',
    before: '',
    desc:
      'Khám phá con đường xây dựng thương hiệu cá nhân trong thời đại 5.0 và tìm cách thấu hiểu bản thân.',
    speaker: true,
  },
  {
    time: '11:10',
    title: 'Giải đáp thắc mắc',
    before: '',
    desc:
      'Đi tìm lời giải đáp cho những thắc mắc về thương hiệu cá nhân 5.0 thông qua việc đặt câu hỏi cho diễn giả.',
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
const hello = Slider('#talkshowSlider', 3, 'verticle')

const scrollTalkshowSlider = () => {
  const talkshowSlider = document.getElementById('talkshowSlider')
  const sliderBounding = talkshowSlider.getBoundingClientRect()

  if (sliderBounding.top < window.innerHeight * (1 / 3)) {
    setInterval(() => {
      if (!isPause.value && !mediaMobile.matches) hello.slideNext()
    }, 2000)
    window.removeEventListener('scroll', scrollTalkshowSlider)
  }
}

const isPause = ref(false)

onMounted(() => {
  window.addEventListener('scroll', scrollTalkshowSlider)
})
onUnmounted(() => {
  window.removeEventListener('scroll', scrollTalkshowSlider)
})
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
      border: solid 1px #00000040;

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
