import { getDocument } from 'ssr-window'
import { onMounted, onUnmounted, ref } from 'vue'
const document = getDocument()
export default function fixOnDiv(fixedElement: any) {
  const isFix = ref(false)
  fixedElement = document.querySelector(fixedElement)
  if (fixedElement) {
    const fixedElementParent = fixedElement.parentNode
    const scrollStuff = () => {
      const offSetBounding = fixedElementParent.getBoundingClientRect()
      if (
        offSetBounding.top < 160
        && offSetBounding.bottom > window.innerHeight
      ) {
        isFix.value = true
        fixedElementParent.style.position = 'relative'
        fixedElement.setAttribute(
          'style',
          `position: absolute;top: ${-offSetBounding.top
            + 60}px; transition: 0.25s ease`,
        )
      }
      else if (offSetBounding.bottom < window.innerHeight) {
        isFix.value = false
      }
    }
    onMounted(() => {
      window.addEventListener('scroll', scrollStuff)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', scrollStuff)
    })
  }
  return {
    isFix,
  }
}
