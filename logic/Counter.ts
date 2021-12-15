import { reactive } from 'vue'
export default function Counter(date: string) {
  const remainTime = reactive({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const countDownDate: any = new Date(date)
  setInterval(() => {
    const now = new Date().getTime()
    const distance = countDownDate - now

    remainTime.days = Math.floor(distance / (1000 * 60 * 60 * 24))
    remainTime.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    remainTime.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    remainTime.seconds = Math.floor((distance % (1000 * 60)) / 1000)

    if (distance < 0) {
      remainTime.days = 0
      remainTime.hours = 0
      remainTime.minutes = 0
      remainTime.seconds = 0
    }
  }, 1000)
  return remainTime
}
