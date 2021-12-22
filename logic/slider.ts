import { getDocument } from 'ssr-window'
import { ref, watchEffect, onMounted } from 'vue'

const document = getDocument()

export default function Slider(
  sliderName: string,
  maxSlide: number,
  direction: string,
) {
  if (typeof direction === 'undefined') direction = 'horizontal'

  let slider: any
  let track: any
  let slide: any
  let slideWidth = 0
  let slideHeight = 0
  let distanceY = 0
  let distanceX = 0
  const slideIndex = ref(0)
  onMounted(() => {
    slider = document.querySelector(`${sliderName}`)
    track = slider.querySelector('.track')
    slide = track.querySelectorAll('.slide')

    watchEffect(() => {
      const slideGap = parseFloat(getComputedStyle(track).gap)

      if (direction === 'horizontal') {
        if (slideIndex.value > 0) {
          slideWidth = parseFloat(
            getComputedStyle(slide[slideIndex.value - 1]).width,
          )
        }
        distanceX
          = (slide.length * slideWidth + (slide.length - 1) * slideGap)
          / slide.length
        distanceY = 0
      }

      if (direction === 'verticle') {
        if (slideIndex.value > 0) {
          slideHeight = parseFloat(
            getComputedStyle(slide[slideIndex.value - 1]).height,
          )
        }
        distanceY
          = (slide.length * slideHeight + (slide.length - 1) * slideGap)
          / slide.length
        distanceX = 0
      }
      track.setAttribute(
        'style',
        `transform: translate3d(-${distanceX
          * slideIndex.value}px,-${distanceY * slideIndex.value}px,0)`,
      )
    })
  })
  const slideNext = () => {
    if (slideIndex.value == slide.length - maxSlide)
      slideIndex.value = 0

    if (slideIndex.value < slide.length - maxSlide) {
      slideIndex.value++
    }
  }
  const slidePrev = () => {
    if (slideIndex.value > 0) {
      slideIndex.value--
    }
    else slide.index = slide.length - maxSlide
  }
  return {
    slideIndex,
    slideNext,
    slidePrev,
  }
}
