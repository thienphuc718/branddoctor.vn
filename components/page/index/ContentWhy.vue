<template>
  <div class="content-why">
    <div class="heading-1">
      <h2 class="inkBasic">
        <span class="hidden-des flex">Về chuyên đề</span>
      </h2>
    </div>
    <div class="heading-2">
      <h2 class="pb-32rem border-b-1 mb-32rem mt-40rem">
        <span class="carolinaLight font-semibold">
          Tại sao bạn nên tham gia chương trình này?
        </span>
      </h2>
      <div class="col gap-32rem">
        <div
          v-for="(why, index) in why"
          :key="why"
          class="why flex gap-16rem items-start"
        >
          <BaseIcon :name="`why-${index + 1}`" />
          <div>
            <p class="thick">
              <span class=" inkLight">{{ why.title }}</span>
            </p>
            <p>
              {{ why.desc }}
              <a
                v-if="why.link.length"
                class="font-semibold hover:text-#5584E5"
                href="#dien-gia"
              >{{ why.link }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const why = [
  {
    title: 'Xây dựng 1 hình ảnh bản thân chuyên nghiệp',
    desc: 'Từ đó bạn sẽ được săn đón và quý trọng.',
    link: '',
  },
  {
    title: 'Cơ sở phát triển niềm tin của mọi người với chính mình',
    desc: 'Khám phá điểm giúp bạn tỏa sáng và khắc họa chân dung của bạn.',
    link: '',
  },
  {
    title: 'Sẽ nhận ra điểm khác biệt của chính bản thân?',
    desc:
      'Từ đó xây dựng uy tín và tầm ảnh hưởng của bạn và cho cả doanh nghiệp bạn đang làm việc hoặc sở hữu.',
    link: '',
  },
  {
    title: 'Và một vài công thức bí mật...',
    desc:
      'BDA sẽ giúp doanh chủ nắm trong tay bí mật tạo nên thương hiệu cá nhân 5.0 đặc sắc…',
    link: '',
  },
  {
    title: '1 buổi Talk Show có sự góp mặt mặt của Hoa hậu Lê Âu Ngân Anh',
    desc:
      'Và hành trình xây dựng thương hiệu cá nhân của chị trong 3 năm qua. ',
    link: 'Tìm hiểu diễn giả',
  },
]
</script>
<style lang="scss" scoped>
@include size('small') {
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
}
</style>
