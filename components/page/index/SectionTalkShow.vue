<template>
  <div class="padding-all !pb-0">
    <div
      class="talkshow-header flex justify-between mb-48rem light border-b-2rem pb-24rem border-skyLight"
    >
      <div class="heading-1">
        <h2 class="inkBasic">
          <span class="hidden-mob inkLight">Thông tin buổi Talk Show</span>
          <span class="hidden-des flex font-semibold">Về Talk Show</span>
        </h2>
      </div>
      <div
        class="border-2rem !border-#FFBC05 rounded-40rem flex gap-8rem py-8rem px-16rem bg-yellowLighter hidden-mob"
      >
        <BaseIcon name="gold-star" />
        <p>
          <span class="font-semibold !text-#FFBC05">Bạn được tặng 1 vé Talk Show</span>
        </p>
      </div>
    </div>
    <div class="talkshow-content flex gap-24rem overflow-hidden max-h-580rem">
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
    padding-top: 40rem;
    padding-bottom: 0;

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
    .max-h-580rem {
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
