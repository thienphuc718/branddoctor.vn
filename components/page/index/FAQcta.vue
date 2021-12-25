<template>
  <div class="padding-all dark !pb-0">
    <div class="p-48rem rounded-8rem cta-box">
      <div class="heading-box max-w-500rem">
        <h2
          class="text-48rem carolinaLighter font-700 leading-57.6rem mb-24rem"
        >
          Tặng lộ trình xây dựng <span class="white">thương hiệu cá nhân</span>
        </h2>
        <p class="mb-24rem">
          Tặng bạn <span class="yellowBasic">EBOOK</span> “Lộ trình xây dựng
          thương hiệu cá nhân 5.0”. Đăng ký ngay. Chúng tôi sẽ gửi qua email
          bạn.
        </p>
        <div class="flex gap-12rem">
          <input
            type="text"
            placeholder="example@email.com"
            class="py14rem px-14rem rounded-4rem border-none w-60%"
          >
          <button
            class="bg-white border-none center w-65rem rounded-4rem form-btn"
          >
            <BaseIcon name="send" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.cta-box {
  background: radial-gradient(100% 100% at 49.83% 0%, #4d52e2 0%, #3e42ab 100%);
  position: relative;
  &:before {
    content: '';
    height: 100%;
    width: 50%;
    position: absolute;
    right: 0rem;
    top: 0;
    background-image: url('/ldp-cta-bg.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
}
.form-btn {
  &:hover {
    background: $blueLighter;
  }
}
@include size('small') {
  .padding-all {
    padding-top: 80rem;

    .cta-box {
      padding: 32rem;
      &:before {
        display: none;
      }
      h2 {
        font-size: 29rem;
        font-weight: 500;
        line-height: 1.4;
      }
      input {
        flex-grow: 1;
      }
    }
  }
}
</style>
