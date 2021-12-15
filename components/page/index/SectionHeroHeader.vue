<template>
  <div class="row content-box heading-box">
    <div class="row items-center flex-1 gap-16rem">
      <div
        class="border-1 !border-#FFBC05 rounded-40rem flex gap-8rem py-8rem px-16rem"
      >
        <BaseIcon name="human-chat" />
        <p>
          <span class="font-semibold !text-#FFBC05">Tặng vé Talk Show (buổi đầu)</span>
        </p>
      </div>
      <div class="border-1 rounded-40rem flex gap-8rem py-8rem px-16rem">
        <p>
          07/11/2021
        </p>
      </div>
      <div class="border-1 rounded-40rem flex gap-8rem py-8rem px-16rem">
        <p>
          Zoom Meeting
        </p>
      </div>
    </div>
    <div class="row flex-1 justify-end gap-16rem">
      <PageIndexProgress bar="white" inner="#637381" bg="black" />
      <div class="border-1 rounded-40rem flex gap-8rem py-8rem px-16rem">
        <BaseIcon name="clock" />
        <p>
          <span class="font-semibold">Cả chuyên đề: 4 buổi</span><span> (10 giờ)</span>
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.time {
  padding: 0 8rem;

  &:not(.time:last-child) {
    border-right: solid 1px;
  }
  &.progress {
    span {
      text-align: left;
    }
  }

  span {
    display: block;
    text-align: center;
    &.digit {
      font-weight: 700;
      font-size: 20rem;
      margin-bottom: -8rem;
    }
    &.text {
      font-size: 8rem;
    }
  }
}
</style>
