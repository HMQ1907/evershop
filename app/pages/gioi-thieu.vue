<script setup lang="ts">
useHead({
  title: 'Gioi thieu'
})

const values = [
  {
    title: 'Tinh tế trong từng lựa chọn',
    body: 'Từ màu hoa đến lớp kem bánh, mọi thứ đều được cân nhắc để khi khách nhận, họ cảm nhận được sự cẩn thận.'
  },
  {
    title: 'Quà tặng có cảm xúc',
    body: 'evershop không bán sản phẩm, chúng tôi bán khoảnh khắc bạn muốn trao đi.'
  },
  {
    title: 'Nhất quán về thẩm mỹ',
    body: 'Hoa, bánh, nước — cả ba đều nói cùng một ngôn ngữ hình ảnh, để set quà trông như được stylist sắp xếp.'
  }
]
</script>

<template>
  <main class="shell py-10 sm:py-14 lg:py-16">
    <section class="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <div class="animate-reveal space-y-6">
        <span class="soft-badge">Câu chuyện người sáng lập</span>
        <div class="space-y-4">
          <p class="eyebrow">Người đứng sau thương hiệu</p>
          <h1 class="display-title text-5xl leading-none sm:text-7xl">Pham Thi Cam Nhung</h1>
          <div class="gradient-line h-1.5 w-32 rounded-full" />
        </div>
        <p class="max-w-xl text-base leading-8 text-[var(--color-body)]">
          Tôi bắt đầu evershop vì tin rằng mỗi món quà đều xứng đáng được chuẩn bị thật đẹp — không chỉ nhìn đẹp mà còn đẹp ở cảm xúc phía sau.
        </p>
        <div class="flex flex-wrap gap-3 sm:gap-4">
          <NuxtLink to="/" class="secondary-button">Về trang chủ</NuxtLink>
          <NuxtLink to="/hoa" class="primary-button">Xem trang Hoa</NuxtLink>
        </div>
      </div>

      <div class="animate-reveal-soft delay-2">
        <div class="soft-panel overflow-hidden rounded-[2rem] p-3 sm:p-4">
          <div class="media-frame h-[24rem] sm:h-[34rem]">
            <img src="/img/avt.jpg" alt="Pham Thi Cam Nhung" class="h-full w-full object-cover object-center" />
          </div>
        </div>
      </div>
    </section>

    <section class="section-grid py-10 sm:py-14 lg:grid-cols-3 lg:py-16">
      <article
        v-for="(item, index) in values"
        :key="item.title"
        class="glass-card animate-reveal rounded-[1.75rem] p-5 sm:p-6"
        :class="[`delay-${index + 1}`]"
      >
        <span class="eyebrow">0{{ index + 1 }}</span>
        <h2 class="display-title mt-4 text-3xl sm:text-4xl">{{ item.title }}</h2>
        <p class="mt-3 text-sm leading-7 text-[var(--color-body)]">{{ item.body }}</p>
      </article>
    </section>

    <section class="pb-6 sm:pb-10">
      <div class="soft-panel overflow-hidden rounded-[2rem] px-5 py-8 sm:px-8 lg:px-12 lg:py-14">
        <div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div class="space-y-5">
            <p class="eyebrow">Vì sao evershop ra đời</p>
            <h2 class="display-title text-4xl sm:text-5xl">Mỗi món quà đẹp hơn khi được chuẩn bị bằng cả sự để tâm</h2>
            <p class="text-base leading-8 text-[var(--color-body)]">
              Mọi chuyện bắt đầu khi tôi muốn tặng một người bạn thân một thứ gì đó thật đặc biệt — nhưng không nơi nào có thể làm cả hoa, bánh và đồ uống đẹp như nhau trong một chỗ. Vậy là tôi tự làm.
            </p>
          </div>

          <div class="glass-card rounded-[1.75rem] p-5 sm:p-6">
            <p class="eyebrow mb-4">evershop hôm nay</p>
            <p class="text-sm leading-7 text-[var(--color-body)]">
              Từ một ý nghĩ rất nhỏ, evershop dần trở thành nơi tôi gửi vào đó gu thẩm mỹ, sự chăm chút và mong muốn giúp người khác trao đi những món quà thật đẹp.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
