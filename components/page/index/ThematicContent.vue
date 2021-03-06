<template>
  <div id="program" class="col thematic-content">
    <div class="heading-2">
      <h2 class="mb-24rem">
        <span class="carolinaLight font-semibold">
          Nội dung chuyên đề
        </span>
      </h2>
    </div>
    <div class="row justify-between hidden-mob">
      <p class="flex gap-8rem">
        <span v-for="content in content" :key="content" class="inkLighter">{{
          content
        }}</span>
      </p>
      <p v-if="!isShowAll" class="gradient-text" @click="showAll">
        Hiển thị tất cả nội dung
      </p>
      <p v-else class="gradient-text" @click="showAll">
        Ẩn tất cả nội dung
      </p>
    </div>
    <div id="thematic-accordion" class="accordion mt-24rem">
      <div
        v-for="(accord, index) in accords"
        :key="accord"
        class="accord mb-16rem last:border-b-2rem"
        :class="{
          'item-active': activeAccord.title.content == accord.title.content,
        }"
      >
        <div
          class="accord-header p-24rem flex gap-12rem items-start bg-skyLightest border-2 !border-#E3ECFF rounded-4rem min-h-80rem"
          @click="toggleAccord(accord)"
        >
          <p class="min-w-55rem">
            <span class="font-semibold blueLight">Buổi {{ index + 1 }}.</span>
          </p>
          <p class="font-semibold flex-grow">
            <span
              v-if="accord.title.before.length"
              class="before inkLightest mr-0.2em"
            >{{ accord.title.before }}</span>
            <span class="inkBasic">{{ accord.title.content }}</span>
            <span
              v-if="accord.title.after.length"
              class="after inkLightest ml-0.3em"
            >{{ accord.title.after }}</span>
          </p>
          <BaseIcon
            name="cheviron-down"
            class="rounded-50% border-2rem min-w-24rem min-h-24rem center"
            @click="activeAccord = null"
          />
        </div>
        <div class="accord-content p-24rem col gap-12rem">
          <p v-for="content in accord.content">
            <BaseIcon
              :name="`accord-${content.icon}`"
              :class="{ 'mt-3rem': content.icon == 'pratice' }"
            />
            <span
              v-if="content.icon == 'pratice'"
              class="font-semibold min-w-80rem"
            >
              Thực hành:
            </span>
            <span :class="{ blueLight: content.link.length }">
              {{ content.content }}
              <a
                v-if="content.link.length"
                id="thematicContentlink"
                href="#dang-ky"
                class="font-bold blueLight"
                @click="checkoutToggle"
              >{{ content.link }}</a>
            </span>
          </p>
        </div>
      </div>
    </div>
    <p>
      Sau khi kết thúc buổi 4, bạn sẽ trải qua
      <span class="font-semibold">đánh giá cuối chuyên đề</span> về khả năng tự
      thực hành thương hiệu cá nhân của bạn.
    </p>
  </div>
</template>
<script setup lang="ts">
import { getDocument } from 'ssr-window'
import { mediaMobile } from '~/logic/mediaQuery.ts'

const document = getDocument()
onMounted(() => {
  if (mediaMobile.matches) {
    isShowAll.value = true
    showAll()
  }
})
const isCheckout = inject('isCheckout')
const checkoutToggle = (e) => {
  isCheckout.value = true
  fbq('trackCustom', e.target.getAttribute('id'))
}

const content = ['4 buổi ', '•', '10 giờ học', '•', '2 giảng viên hướng dẫn']
const accords = [
  {
    title: {
      before: 'Talk Show |',
      content: 'Thương hiệu cá nhân 5.0 – Góc nhìn từ những điểm khác biệt',
      after: '(Hiểu đúng và đủ về làm thương hiệu cá nhân 5.0)',
    },
    content: [
      {
        icon: 'speaker',
        content: 'TS. Nguyễn Khánh Trung, HH. Lê Âu Ngân Anh',
        link: '',
      },
      {
        icon: 'book',
        content: 'Thực trạng chung về xây dựng thương hiệu cá nhân.',
        link: '',
      },
      {
        icon: 'book',
        content:
          'Những hình thức bên ngoài (tài sản vật chất, cách cư xử...) có được xem là thương hiệu?',
        link: '',
      },
      {
        icon: 'book',
        content:
          'Các quan điểm sai lầm về thương hiệu cá nhân: Triệu follow – khách hàng hay data rác?',
        link: '',
      },
      {
        icon: 'book',
        content:
          'Vì sao cần phải xây dựng thương hiệu cá nhân 5.0 chứ không phải là 4.0?',
        link: '',
      },
      {
        icon: 'book',
        content: 'Tổng quan về lộ trình 3 bước xây dựng thương hiệu cá nhân.',
        link: '',
      },
      {
        icon: 'pratice',
        content:
          'Phân tích SWOT để thấu hiểu bản thân và tối ưu hóa điểm mạnh.',
        link: '',
      },
      {
        icon: 'present',
        content: 'Tặng ngay vé buổi 1 (Talk Show).',
        link: 'Đăng ký ngay',
      },
    ],
  },
  {
    title: {
      before: '',
      content:
        'Khai phá điểm khác biệt, thiết lập định vị thương hiệu cá nhân 5.0',
      after: '',
    },
    content: [
      {
        icon: 'speaker',
        content: 'TS. Nguyễn Khánh Trung',
        link: '',
      },
      {
        icon: 'book',
        content: 'Xác lập tầm nhìn, sứ mệnh và mục tiêu đúng đắn.',
        link: '',
      },
      {
        icon: 'book',
        content:
          'Trở thành Top of mind: Xây dựng điểm khác biệt POD theo công thức của Brand Doctor.',
        link: '',
      },
      {
        icon: 'book',
        content:
          'Khám phá tính cách thương hiệu bạn: Để khách hàng nghĩ về bạn theo cách bạn muốn?',
        link: '',
      },
      {
        icon: 'book',
        content:
          'Hoàn thiện định vị thương hiệu cá nhân để phát triển được cộng đồng theo dõi chất lượng.',
        link: '',
      },
      {
        icon: 'pratice',
        content:
          'Thiết lập bảng định vị thương hiệu cá nhân trong nhóm Cộng đồng Brand Doctors với sự hỗ trợ trực tiếp từ các chuyên gia.',
        link: '',
      },
    ],
  },
  {
    title: {
      before: '',
      content:
        'Lan tỏa thương hiệu của bản thân để mở rộng vòng tròn quan hệ trong kinh doanh',
      after: '',
    },
    content: [
      {
        icon: 'speaker',
        content: 'TS. Nguyễn Khánh Trung',
        link: '',
      },
      {
        icon: 'book',
        content:
          '3 nguyên tắc để tạo dấu ấn trên các nền tảng mạng xã hội.',
        link: '',
      },
      {
        icon: 'book',
        content:
          'Mở rộng tầm ảnh hưởng của bạn trong các vòng tròn quan hệ: Dễ hay khó?',
        link: '',
      },
      {
        icon: 'pratice',
        content:
          'Xây dựng chiến lược phát huy tầm ảnh hưởng tại Cộng đồng Brand Doctors.',
        link: '',
      },
    ],
  },
  {
    title: {
      before: '',
      content:
        'Nâng cấp giá trị bản thân dựa trên mô hình 5 cấp độ thương hiệu theo Brand Doctor',
      after: '',
    },
    content: [
      {
        icon: 'speaker',
        content: 'TS. Nguyễn Khánh Trung',
        link: '',
      },
      {
        icon: 'book',
        content: 'Bạn cần làm gì để đạt được những cấp độ thương hiệu cao hơn?',
        link: '',
      },
      {
        icon: 'book',
        content:
          'Thương hiệu cá nhân ảnh hưởng thế nào đến thương hiệu tổ chức?',
        link: '',
      },
      {
        icon: 'pratice',
        content:
          'Lên kế hoạch nâng cấp giá trị bản thân để đạt được những cấp độ thương hiệu cao hơn.',
        link: '',
      },
    ],
  },
]
const activeAccord = ref(accords[0])
const isShowAll = ref(false)

const showAll = () => {
  const accords = document.querySelectorAll('#thematic-accordion')
  isShowAll.value = !isShowAll.value
  if (isShowAll.value) {
    accords.forEach((item) => {
      item.classList.add('item-active')
    })
  }
  else {
    accords.forEach((item) => {
      item.classList.remove('item-active')
    })
  }
}
const toggleAccord = (accord) => {
  activeAccord.value = accord
  setTimeout(() => {
    document.querySelector('.accord.item-active').scrollIntoView()
  }, 100)
}
</script>
<style lang="scss" scoped>
.gradient-text {
  --gradient: radial-gradient(100% 100% at 49.83% 0%, #5584e5 0%, #003e9f 100%);
  font-weight: 600;
  cursor: pointer;
}
.accord {
  overflow-y: hidden;
  max-height: 120px;
  cursor: pointer;
  transition: 0.5s linear;
  @include size(small) {
    max-height: 300px;
  }
  .accord-content {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  &.item-active {
    max-height: 1000px;
    @include size(small) {
      max-height: 1500px;
    }
    .accord-content {
      position: static;
      opacity: 1;
    }
  }
}
</style>
<style lang="scss">
.accordion {
  .accord {
    &:hover,
    &.item-active {
      .icon-cheviron-down {
        border-color: $blueLight;
        cursor: pointer;
        path {
          fill: $blueLight;
          transition: 0.5s ease;
        }
      }
    }
  }
}
.accord-content {
  p {
    display: flex;
    gap: 8rem;
    align-items: flex-start;
  }
}
</style>
