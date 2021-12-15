export default function detectMouseWheelDirection(e) {
  let delta = null
  let direction = false
  if (!e) {
    // if the event is not provided, we get it from the window object
    e = window.event
  }
  if (e.wheelDelta) {
    // will work in most cases
    delta = e.wheelDelta / 60
  }
  else if (e.detail) {
    // fallback for Firefox
    delta = -e.detail / 2
  }
  if (delta !== null)
    direction = delta > 0 ? 'up' : 'down'

  return direction
}
