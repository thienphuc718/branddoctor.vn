<template>
  <div class="dark h-100vh relative" :class="{ 'item-active': isShow }">
    <div class="padding-all z-6 relative" :class="{ 'item-active': isShow }">
      <div class="heading-box w-555rem mt-80rem">
        <h1 class="!leading-1.0em" :class="{ 'item-active': isShow }">
          <span class="text-48rem ">Nhận ebook<span class="yellowLight">*</span> từ BDA để xây dựng
            thương hiệu cá nhân theo kiểu mới!</span>
        </h1>
        <form
          id="book-form"
          class="flex gap-12rem mt-32rem"
          action="https://sever.branddoctorgroup.com/wp-json/contact-form-7/v1/contact-forms/12067/feedback"
          method="post"
          @submit.prevent="submitHandler"
        >
          <input
            type="email"
            placeholder="example@email.com"
            class=" px-14rem rounded-4rem border-none flex-grow font-medium"
            name="your-email"
          >
          <BaseButton
            ref="submitBtn"
            :title="submitTitle"
            size="big"
            theme="light"
            class="border-white blueBasic"
            type="submit"
            form="book-form"
          />
        </form>
        <label
          for="checkbox"
          class="flex gap-8rem text-white font-medium mt-32rem block !text-18rem"
        >
          <input
            id="checkbox"
            class="font-medium w-24rem h-24rem border-3px border-white"
            type="checkbox"
          >
          <span>Cập nhật thông tin, sự kiện thương hiệu mới cho tôi.</span>
        </label>
        <div
          class="bookcontent flex gap-12rem justify-start mt-24rem items-start"
        >
          <p
            class="font-medium  border-b-2 !border-white leading-1.2em flex-shrink-0 cursor-pointer"
            @click="isShow = !isShow"
          >
            <span class="text-18rem"><span v-if="isShow">Thu gọn nội dung</span>
              <span v-else>Sơ lược về ebook này</span></span>
          </p>
          <BaseIcon name="cheviron-down" :class="{ 'item-active': isShow }" />
        </div>
        <p class="mt-12rem content-book" :class="{ 'item-active': isShow }">
          <span class="text-18rem blueLighter"><span class="yellowLight">*</span>Kỷ nguyên 4.0 sắp kết thúc cũng
            là lúc kỷ nguyên 5.0 nổi lên, để chuẩn bị cho sự chuyển mình đó
            Brand Doctor Academy với sứ mệnh đứng sau mỗi cá nhân và doanh
            nghiệp giúp họ khai phá giá trị đặc biệt tiềm ẩn bên trong. Mỗi loài
            hoa đều có ý nghĩa và tỏa hương sắc, vậy nên mỗi chúng ta cũng hãy
            tỏa sáng!</span>
        </p>
      </div>
    </div>
    <img
      src="/bubbles.png"
      width="136.61"
      height="119.69"
      class="absolute left-54rem bottom-100rem z-5"
    >
    <img
      src="/book.png"
      width="417.58"
      height="666.44"
      class="absolute w-417.58rem h-666.44rem right-200rem -bottom-20rem z-3 book-img hidden-mob"
      :class="{ 'item-active': isShow }"
    >
    <img
      v-for="wave in 4"
      :key="wave"
      src="/wave1.svg"
      alt=""
      :class="`wave wave${wave} absolute`"
      width="3017.5"
      height="427.37"
    >
    <BasePopup v-if="isPopupActive" class="popup-guidebook">
      <div class="row gap-61rem">
        <div class="text">
          <div class="heading-1 heading-box w-370rem">
            <h2 class="mb-32rem !leading-1.3em">
              <span class="blueLight font-medium">
                Bạn có muốn tham gia talkshow về sự
                <span class="yellowBasic"> khác biệt?</span>
              </span>
            </h2>
            <div class="col gap-24rem">
              <p>
                <span class="inkLight text-18rem">Cảm ơn bạn đã đăng ký nhận ebook từ BDA. Vui lòng kiểm tra
                  thư email:
                  <span class="inkBasic font-medium">{{
                    popupContent
                  }}</span></span>
              </p>
              <p>
                <span class="inkLight text-18rem">Nếu không thấy email của chúng tôi, hãy Kiểm tra thư mục thư
                  rác hoặc nhấn “Gửi lại email” bên dưới.</span>
              </p>
            </div>
          </div>
          <div class="row mt-32rem gap-12rem">
            <BaseButton
              title="Gửi lại email"
              theme="light"
              size="big"
              class="blueBasic border-blueBasic"
              @click="submitBtnClick"
            />
            <NuxtLink to="/">
              <BaseButton
                title="Tìm hiểu Talk Show"
                theme="bg-blueBasic"
                size="big"
                class="white hover:!bg-blue-600"
              />
            </NuxtLink>
          </div>
        </div>
        <img
          src="/ldp-popup-img.jpg"
          width="293"
          alt="481"
          class="rounded-4rem hidden-mob"
        >
      </div>
    </BasePopup>
  </div>
</template>
<script setup lang="ts">
import axios from 'axios'
import gsap from 'gsap'
import formValidate from '~/logic/formValidate.ts'

const isShow = ref(false)
const popupContent = ref('')
const isPopupActive = ref(false)
provide('isPopupActive', isPopupActive)

const submitTitle = ref('Nhận ngay')
const submitBtn = ref(null)
const submitBtnClick = () => {
  submitBtn.value.click()
}
onMounted(() => {
  const waves = document.querySelectorAll('.wave')
  const lefts = []
  const bottoms = []

  for (let index = 0; index < waves.length; index++) {
    const element = waves[index]

    const styles = getComputedStyle(element)
    gsap
      .timeline()
      .add()
      .repeat(-1)
      .to(element, {
        left: parseFloat(styles.left) + (50 * (index + 1)) / 5,
        duration: 2,
        ease: 'power1.out',
      })
      .to(element, {
        bottom: parseFloat(styles.bottom) + (50 * (index + 1)) / 5,
        duration: 2,
        ease: 'power1.out',
      })
      .to(element, {
        left: parseFloat(styles.left),
        duration: 2,
        ease: 'power1.out',
      })
      .to(element, {
        bottom: parseFloat(styles.bottom),
        duration: 2,
        ease: 'power1.out',
      })
  }
})

const submitHandler = async(e) => {
  if (formValidate(e)) {
    const formElement = e.target
    const { action, method } = formElement
    const body = new FormData(formElement)

    axios
      .post(action, body)
      .then((response) => {
        isPopupActive.value = true
        popupContent.value = body.get('your-email')
        submitTitle.title = 'Đang gửi'
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style lang="scss" scoped>
.dark {
  background: url('/guidebook-hero-bg.svg') top no-repeat;
  background-size: 101vw;
  @include size(small) {
    background-size: 200vh;
    min-height: 855rem;
    .wave {
      transform: translateX(-50%);
    }
    h1 {
      line-height: 0.8em !important;

      span {
        font-size: 27.5rem;
        line-height: 1em;
      }
    }
    form {
      input {
        max-width: 182rem;
      }

      .cta {
        min-width: 121rem;
      }
    }
    .bookcontent {
      margin-top: 32rem;
    }
  }

  &.item-active {
    .wave {
      transform: translateY(20%);
      @include size(small) {
        transform: translateX(-50%) translateY(20%);
      }
    }
  }
  .content-book {
    max-height: 0;
    transition: 0.5s ease;
    overflow: hidden;
    &.item-active {
      max-height: 500rem;
    }
  }
  .book-img {
    transition: 0.5s ease;
    &.item-active {
      width: 0;
      height: 0;
    }
  }
  .padding-all {
    transition: 0.5s ease;
    &.item-active {
      padding: 80rem 500rem;
      @include size(small) {
        padding: 80rem 24rem;
      }
    }
  }
  h1 {
    transition: 0.5s ease;
    &.item-active {
      font-size: 31rem;
      @include size(small) {
        font-size: 27.5rem;
      }
      span {
        font-size: 31rem;
        line-height: 1.2;
        @include size(small) {
          font-size: 27.5rem;
        }
      }
    }
  }
  .wave {
    max-width: 2017.5rem;
    max-height: 327.37rem;
    object-fit: cover;
    left: -20%;
    bottom: -30%;
    transition: 0.5s ease;
    &.wave1 {
      max-width: 3017.5rem;
      max-height: 427.37rem;
      bottom: -40%;
      z-index: 4;
    }
    &.wave2 {
      max-width: 3017.5rem;
      max-height: 427.37rem;
      bottom: -35%;
      left: -25%;
      z-index: 3;
    }
    &.wave3 {
      bottom: -15%;
      left: -15%;
      z-index: 2;
    }
    &.wave4 {
      bottom: -10%;
      left: -22%;
      z-index: 1;
    }
  }
}
</style>
<style lang="scss">
.bookcontent {
  svg {
    path {
      fill: white;
    }
  }
}
</style>
