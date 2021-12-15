import { getDocument, getWindow } from 'ssr-window'

const window = getWindow()
const document = getDocument()

export default function scrollAnimation() {
  const scrollSections = document.querySelectorAll('[scroll-el-section]')
  InviewCheck(scrollSections)
  let scrollReady = true

  window.addEventListener('scroll', () => {
    if (scrollReady) {
      scrollReady = false
      InviewCheck(scrollSections)
      setTimeout(() => {
        scrollReady = true
      }, 10)
    }
  })
}

function InviewCheck(scrollElements: any) {
  scrollElements.forEach((item: any) => {
    addClass(item, 'section')
    if (item.classList.contains('section-is-inview')) {
      const scrollElements = item.querySelectorAll('[scroll-el]')
      scrollElements.forEach((item: any) => {
        addClass(item, 'el')
      })
    }
  })
}

function addClass(item: any, type: string) {
  const itemBounding = item.getBoundingClientRect()

  if (
    itemBounding.top - window.innerHeight < -50
    && itemBounding.bottom > -50
  ) {
    item.classList.remove(`${type}-not-inview`)
    item.classList.add(`${type}-is-inview`)
  }
  else {
    item.classList.add(`${type}-not-inview`)
    item.classList.remove(`${type}-is-inview`)
  }
}
