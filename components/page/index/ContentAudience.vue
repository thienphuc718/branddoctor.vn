<template>
  <div class="py-48rem row gap-80rem">
    <div class="col flex-grow">
      <div class="flex justify-between">
        <div class="heading-2">
          <h2>
            <span class="carolinaLight font-semibold">
              Đối tượng tham dự
            </span>
          </h2>
        </div>
        <div class="row items-center gap-16rem">
          <p>
            <span class="inkLightest">
              1/2
            </span>
          </p>
          <BaseNav fill="#5584E5" stroke="#5584E5" class="gap-8rem">
            <BaseIcon name="cheviron-prev" class="nav-prev" />
            <BaseIcon name="cheviron-next" class="nav-next" />
          </BaseNav>
        </div>
      </div>
      <PageIndexAudienceSlider class="mt-32rem" />
    </div>
  </div>
</template>
