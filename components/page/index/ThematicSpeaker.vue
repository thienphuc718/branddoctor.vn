<template>
  <div id="speaker" class="col thematic-content">
    <div class="heading-2">
      <h2 class="mb-40rem">
        <span class="carolinaLight font-semibold">
          Đội ngũ giảng viên
        </span>
      </h2>
    </div>
    <div class="speakers">
      <div
        v-for="(speaker, index) in speaker"
        :key="speaker"
        class="speaker mb-80rem pb-80rem border-b-2rem relative"
      >
        <BaseShowHide>
          <div class="speaker-header flex gap-32rem items-center">
            <img
              :src="`ldp-speaker-${speaker.img}.png`"
              height="144"
              width="144"
              class="hidden-mob"
            >
            <div class="speaker-info ">
              <div class="pb-12rem border-b-2rem mb-20rem">
                <div class="flex gap-16rem">
                  <h4 class="gradient-text font-bold mb-4rem">
                    {{ speaker.name }}
                  </h4>
                  <p>
                    <span class="font-normal inkLighter !text-14rem">{{
                      speaker.special
                    }}</span>
                  </p>
                </div>
                <p>
                  <span class="inkLightest font-semibold">{{
                    speaker.position
                  }}</span>
                </p>
              </div>
              <div class="socials flex justify-between">
                <img
                  :src="`ldp-speaker-${speaker.img}.png`"
                  height="144"
                  width="144"
                  class="hidden-des"
                >
                <div class="row gap-12rem">
                  <a
                    v-for="(social, name, index) in speaker.link"
                    :href="speaker.link[name]"
                    target="_blank"
                    class="social flex gap-8rem py-8rem px-12rem border-2rem rounded-4rem"
                  >
                    <BaseIcon :name="name" />
                    <p>
                      <span class="inkLighter font-semibold">{{ name }}</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="speaker-history mt-32rem">
            <div class="activity mb-24rem">
              <p class="font-semibold mb-12rem">
                <span class="text-18rem inkLight">{{ speaker.desc1 }}</span>
              </p>
              <ul>
                <li
                  v-for="desc in speaker.desc1Content"
                  :key="desc"
                  class="mb-12rem text-18rem inkLighter"
                >
                  {{ desc }}
                </li>
              </ul>
            </div>
            <div class="development">
              <p class="font-semibold mb-12rem">
                {{ speaker.desc2 }}
              </p>
              <p
                v-for="desc in speaker.desc2Content"
                class="mb-12rem last:mb-0rem"
              >
                {{ desc }}
              </p>
            </div>
          </div>
        </BaseShowHide>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const speaker = [
  {
    name: 'Tiến sĩ Nguyễn Khánh Trung',
    img: 'nkt',
    position: 'Viện trưởng Brand Doctor Academy',
    special: '',
    link: {
      Website: 'https://nguyenkhanhtrung.com/',
      Facebook: 'https://www.facebook.com/BacSiThuongHieu',
      YouTube:
        'https://www.YouTube.com/c/BRANDDOCTORB%C3%81CS%C4%A8TH%C6%AF%C6%A0NGHI%E1%BB%86U',
    },
    desc1:
      'Bác sĩ Thương hiệu Nguyễn Khánh Trung – Một trong những người tiên phong trong lĩnh vực chăm sóc sức mạnh thương hiệu của các doanh nghiệp Việt.',
    desc1Content: [
      'Bắt đầu sứ mệnh lan tỏa giá trị thương hiệu Việt bằng việc mang cà phê Trung Nguyên đi khắp các miền đất nước và ra khỏi lãnh thổ Việt Nam, đến hơn 60 quốc gia.',
      'Đồng hành cùng nhiều doanh nghiệp lớn như iSCHOOL (NHG), Pierre Cardin, Savico, LG Vina Cosmetics,v.v với vai trò Giám đốc cấp cao và cố vấn chiến lược.',
      'Đến năm 2020, ông sáng lập Brand Doctor Group với mong muốn giúp doanh nghiệp Việt phát triển trường tồn trên con đường xây dựng thương hiệu và khiến thanh niên không phải trăn trở trên hành trình kiến tạo sự nghiệp của mình. ',
    ],
    // desc2: 'Phương pháp giảng dạy',
    // desc2Content: [
    //   'Hiện tại ông Nguyễn Khánh Trung còn là Thạc Sĩ đang thực hiện công tác giảng dạy tại trường Đại học Kinh Tế - Luật. Ông đã đóng góp nhiều vào việc thành lập câu lạc bộ hỗ trợ dẫn dắt đội ngũ trẻ là các sinh viên đang có ý định khởi nghiệp. Câu lạc bộ thu hút hơn 10.000 sinh viên mỗi năm và sau sáu năm đã trở thành tổ chức nổi tiếng với các sinh viên và doanh nghiệp.',
    // ],
  },
  {
    name: 'Hoa hậu Lê Âu Ngân Anh',
    img: 'lana',
    position: 'Giảng viên Đại học Hoa Sen',
    special: '',
    link: { Facebook: 'https://www.facebook.com/clonevia' },
    desc1:
      'Hoa hậu Lê Âu Ngân Anh – Người phụ nữ thành công từ đấu trường nhan sắc đến đấu trường tri thức',
    desc1Content: [
      'Dấn thân vào đấu trường nhan sắc từ năm 2017, cô đăng quang Hoa hậu Đại dương Việt Nam 2017 và Á hậu 4 Miss Intercontinental 2018 khi chỉ mới ở ngưỡng tuổi 20.',
      'Đối mặt với nhiều tai tiếng sau khi đăng quang, cô lựa chọn hoàn thiện bản thân trên con đường học vấn, tốt nghiệp Thạc sĩ ngành Quản trị Sự Kiện Quốc Tế tại Đại học Salford (Anh).',
      'Thành công chứng minh bản thân là một người phụ nữ “tài sắc vẹn toàn”, năm 2022, cô trở thành giảng viên tại Đại học Hoa Sen và được bổ nhiệm làm Giám đốc quản trị trẻ nhất của trường.',
    ],
    // desc2: 'Hành trình phát triển',
    // desc2Content: [
    //   'Lê Âu Ngân Anh đã đăng quang Hoa hậu Đại dương Việt Nam 2017 và Á hậu 4 Miss Intercontinental 2018 khi còn rất trẻ, tuy nhiên cô đã lựa chọn tập trung hoàn thiện bản thân trên con đường học vấn. Không lâu sau cô tốt nghiệp Thạc sĩ ngành Quản trị Sự Kiện Quốc Tế tại Đại học Salford (Anh)',
    //   'Hơn nữa, Lê Âu Ngân Anh còn có cho mình một kênh YouTube không phải vì nhu cầu nổi tiếng mà phục vụ cho việc giảng dạy, đồng thời là nơi các bạn trẻ được cô truyền cảm hứng và tạo động lực.',
    //   'Cô đã chứng minh được khẳng định được khẳng định của bản thân “tôi không muốn nổi tiếng nhưng sáo rỗng”, thể hiện qua việc vào lúc mới đăng quang hoa hậu cô đã đối mặt nhiều “tai tiếng” với “xuất phát điểm là 0% người ủng hộ”, và không ít những hoài nghi về nhan sắc và thực lực của cô. Tuy nhiên đến ngày hôm nay nàng hậu đang dần hoàn toàn chinh phục người hâm mộ và số lượng người yêu thích cô ngày càng tăng. Và có nhiều người bắt đầu công nhận cô là một trong những mỹ nhân đại diện cho “tài sắc vẹn toàn”.',
    // ],
  },
]
</script>
<style lang="scss" scoped>
.gradient-text {
  --gradient: linear-gradient(
    90deg,
    rgba(255, 171, 0, 1) 0%,
    rgba(255, 102, 0, 1) 80%,
    rgba(226, 43, 43, 1) 100%
  );
}
.speaker-history {
  li {
    color: $inkLight;

    &:before {
      content: '+';
      margin-right: 8rem;
    }
  }
}

@include size('small') {
  .speaker {
    &:first-child {
      padding-top: 0;
    }

    .speaker-header {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
    .speaker-info {
      width: 100%;

      .flex.gap-16rem {
        flex-direction: column-reverse;
      }
      .socials {
        .social {
          border: none;
        }
      }
    }
  }
}
</style>
