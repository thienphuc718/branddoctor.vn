<template>
  <div class="padding-all mt-80rem">
    <div
      class="talkshow-header flex justify-between mb-48rem light border-b-1 pb-24rem border-skyLight"
    >
      <div class="heading-1">
        <h2 class="inkBasic">
          <span class="hidden-mob">Thông tin buổi Talk Show</span>
          <span class="hidden-des flex">Về Talk Show</span>
        </h2>
      </div>
      <div
        class="border-1 !border-#FFBC05 rounded-40rem flex gap-8rem py-8rem px-16rem bg-yellowLighter hidden-mob"
      >
        <BaseIcon name="gold-star" />
        <p>
          <span class="font-semibold !text-#FFBC05">Bạn được tặng 1 vé Talk Show</span>
        </p>
      </div>
    </div>
    <div class="talkshow-content flex gap-24rem overflow-hidden max-h-530rem">
      <PageIndexTalkShowCtaBox />
      <PageIndexTalkShowSlider />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cta-box {
  background: radial-gradient(100% 100% at 49.83% 0%, #5584e5 0%, #003e9f 100%);
}
@include size('small') {
  .padding-all {
    padding-top: 0;

    .talkshow-content {
      flex-direction: column-reverse;
    }

    .heading-1 {
      .hidden-des {
        &:before {
          content: '';
          display: block;
          min-height: 40rem;
          width: 8rem;
          background: $blueLight;
          margin-right: 16rem;
        }
      }
    }
    .max-h-530rem {
      max-height: 100%;
      overflow: visible;
    }
  }
}
</style>

<style lang="scss">
.cta-box[data-v-6bee05ec] {
  path {
    fill: white;
  }
}
</style>
