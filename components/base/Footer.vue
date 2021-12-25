<template>
  <div class="padding-all bg-inkBasic dark">
    <div class="row gap-64rem">
      <div
        v-for="menu in menu"
        :key="menu"
        class="col min-w-200rem content-box"
        :style="`order:${menu.order}; min-width: ${menu.min}rem`"
      >
        <p class="mb-24rem">
          <span class="font-medium">{{ menu.title }}</span>
        </p>
        <a
          v-for="link in menu.list"
          :key="link"
          :href="link.link"
          class="block"
        >
          <p class="mb-8rem">
            <span class="inkLightest hover:underline">{{ link.title }}</span>
          </p>
        </a>
      </div>
      <div
        class="col gap-24rem flex-grow bg-white p-24rem rounded-8rem light cta-col"
        style="order: 2"
      >
        <h4>
          <span class="font-medium inkBasic">Đăng ký nhận bộ tài liệu
            <span class="blueLight">Lộ trình xây dựng thương hiệu cá nhân 5.0</span></span>
        </h4>
        <div class="flex gap-12rem">
          <input
            type="text"
            placeholder="example@email.com"
            class="py14rem px-14rem rounded-4rem border-none w-60% !border-gray-500 !border-2rem"
          >
          <BaseButton
            theme="dark"
            size="icon-only"
            class="border-none center w-65rem rounded-4rem form-btn footer-cta"
          >
            <BaseIcon name="send" />
          </BaseButton>
        </div>
        <p>
          <span class="text-12rem inkLighter leading-1.2em">
            Tài liệu sẽ được gửi qua email của bạn. BDA sẽ cập nhật các sự kiện,
            kiến thức, kỹ năng, kinh nghiệm bổ ích về thương hiệu qua email bạn
            nhé.
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const menu = [
  {
    title: 'Brand Doctor Academy',
    list: [
      { title: 'Giới thiệu', link: '' },
      { title: 'Lộ trình dài hạn', link: '' },
      { title: 'Chuyên đề ngắn hạn', link: '' },
      { title: 'Blog', link: '' },
      { title: 'FAQ', link: '' },
    ],
    order: 1,
    min: 188,
  },
  {
    title: 'Mạng xã hội',
    list: [
      { title: 'Facebook', link: '' },
      { title: 'Instagram', link: '' },
      { title: 'Tiktok', link: '' },
      { title: 'YouTube', link: '' },
    ],
    order: 3,
    min: 150,
  },
  {
    title: 'Chính sách',
    list: [
      { title: 'Chính sách bảo mật', link: '' },
      { title: 'Điều khoản dịch vụ', link: '' },
      { title: 'Chính sách cookie', link: '' },
      { title: 'Phản hồi', link: '' },
    ],
    order: 4,
    min: 145,
  },
]
</script>
<style lang="scss" scoped>
.cta-col {
  order: 3;
  @include size(small) {
    order: 0 !important;
  }
}
</style>
<style lang="scss">
.footer-cta {
  svg {
    path {
      fill: white;
    }
  }
}
</style>
