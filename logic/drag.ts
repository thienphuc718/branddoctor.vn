import { mediaMobile } from './mediaQuery'
export default function drag(track: any) {
  let initialPosition: any = null
  let moving = false
  let transform = 0
  let lastPageX = 0
  let transformValue = 0

  const gestureStart = (e: any) => {
    initialPosition = e.pageX
    moving = true
    const transformMatrix = window
      .getComputedStyle(track)
      .getPropertyValue('transform')
    if (transformMatrix !== 'none')
      transform = parseInt(transformMatrix.split(',')[4].trim())
  }

  const gestureMove = (e: any) => {
    if (moving) {
      const currentPosition = e.pageX
      const diff = currentPosition - initialPosition

      if (e.pageX - lastPageX > 0) {
        if (transformValue > 0) return
      }
      else {
        if (Math.abs(transformValue) > track.offsetWidth - 320) return
      }
      transformValue = transform + diff

      track.style.transform = `translateX(${transformValue}px)`
    }
    lastPageX = e.pageX
  }

  const gestureEnd = () => {
    moving = false
  }

  if (mediaMobile.matches) {
    if (window.PointerEvent) {
      track.addEventListener('pointerdown', gestureStart)
      track.addEventListener('pointermove', gestureMove)
      track.addEventListener('pointerup', gestureEnd)
    }
    else {
      track.addEventListener('touchdown', gestureStart)
      track.addEventListener('touchmove', gestureMove)
      track.addEventListener('touchup', gestureEnd)

      track.addEventListener('mousedown', gestureStart)
      track.addEventListener('mousemove', gestureMove)
      track.addEventListener('mouseup', gestureEnd)
    }
  }
}
