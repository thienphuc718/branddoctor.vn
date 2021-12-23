<template>
  <div
    class="cta-box max-w-336rem p-32rem dark rounded-8rem max-h-530rem center col content-box"
  >
    <h3 class="mb-24rem font-medium hidden-mob">
      Buổi 1*
      <span class="yellowLight mb-24rem">
        Thương hiệu cá nhân 5.0 – Góc nhìn từ những điểm khác biệt</span>
    </h3>
    <p class="flex gap-8rem hidden-mob w-100%">
      <BaseIcon name="calendar" /><span class="w-121rem">Ngày tổ chức:</span><span class="font-medium">08/01/2021</span>
    </p>
    <p class="flex gap-8rem mb-24rem hidden-mob w-100%">
      <BaseIcon name="zoom" /><span class="w-121rem">Hình thức:</span><span>Zoom Meeting</span>
    </p>
    <p>
      <span class="block font-medium mb-12rem">(*) Talk Show là buổi 1 của chuyên đề học này. Và hoàn toàn dành tặng
        cho bạn! </span>BDA có thể đào tạo với giá trăm triệu cho chuyên đề này, nhưng với sứ
      mệnh kiến tạo sự nghiệp cho mỗi người, BDA sẵn sàng dành tặng bạn buổi đầu
      tiên.
    </p>
    <div>
      <BaseButton
        title="Tham gia Talk Show"
        theme="light"
        size="big"
        class="mt-24rem cta-box-cta min-w-272rem"
        @click="isCheckout = true"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
const isCheckout = inject('isCheckout')
</script>
<style lang="scss" scoped>
.cta-box-cta {
  color: $blueBasic;
}
</style>
