<script setup lang="ts">
useHead({
  title: 'Trang chu'
})

const { categories } = useCatalogData()

const reasons = [
  {
    title: 'Toc do nhin nhanh',
    body: 'Trang chu duoc chia ro thanh Hoa, Banh va Nuoc de khach vao la hieu ngay shop dang ban gi.'
  },
  {
    title: 'Tong mau nhe va sang',
    body: 'Palette sage, blush, ivory va gold nhat hop voi hoa hon rat nhieu so voi huong nen den cu.'
  },
  {
    title: 'San sang de mo rong',
    body: 'Sau nay co the them gallery, gia, combo qua va dat hang ma van giu duoc bo cuc hien tai.'
  }
]

const experiences = [
  'Bo hoa cho sinh nhat, ky niem, khai truong',
  'Banh toi gian cho tiec nho va qua tang',
  'Nuoc signature de di cung set qua va ban tiep khach',
  'Mot visual language thong nhat cho toan bo thuong hieu'
]
</script>

<template>
  <main id="top">
    <section class="shell relative overflow-hidden py-10 sm:py-14 lg:py-18">
      <div class="petal-orb petal-orb--blush animate-float -left-10 top-10 h-32 w-32 sm:h-44 sm:w-44" />
      <div class="petal-orb petal-orb--sage animate-drift right-0 top-24 h-36 w-36 sm:h-52 sm:w-52" />

      <div class="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div class="animate-reveal space-y-6 sm:space-y-8">
          <span class="soft-badge">evershop curated gifting studio</span>
          <div class="space-y-4">
            <h1 class="display-title max-w-4xl text-5xl leading-none sm:text-7xl lg:text-[5.6rem]">
              Hoa, banh va nuoc
              <span class="block text-[var(--color-sage-deep)]">mem, tinh va de nho</span>
            </h1>
            <div class="gradient-line h-1.5 w-32 rounded-full sm:w-44" />
          </div>
          <p class="max-w-2xl text-base leading-8 text-[var(--color-body)] sm:text-lg">
            evershop duoc thiet ke lai theo tinh than phu hop hon voi shop hoa: sang, diu, co nhieu khoang tho va de nhin tren ca mobile lan desktop.
          </p>
          <div class="flex flex-wrap gap-3 sm:gap-4">
            <a href="#danh-muc" class="primary-button">Xem danh muc</a>
            <NuxtLink to="/gioi-thieu" class="secondary-button">Gap chu shop</NuxtLink>
          </div>
        </div>

        <div class="animate-reveal-soft delay-2">
          <div class="soft-panel relative overflow-hidden rounded-[2rem] p-3 sm:p-4">
            <div class="media-frame h-[22rem] sm:h-[30rem]">
              <img
                src="https://i.pinimg.com/originals/ee/a0/08/eea0083d4d08246d7339fe0dcd5fdb75.jpg"
                alt="Bouquet showcase"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="grid gap-3 p-4 sm:grid-cols-2 sm:p-6">
              <div class="glass-card rounded-[1.5rem] p-4">
                <p class="eyebrow mb-2">Mood</p>
                <p class="display-title text-2xl">Fresh floral luxury</p>
              </div>
              <div class="glass-card rounded-[1.5rem] p-4">
                <p class="eyebrow mb-2">Responsive</p>
                <p class="display-title text-2xl">Mobile first layout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="danh-muc" class="shell py-8 sm:py-12 lg:py-16">
      <div class="mb-8 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
        <div class="animate-reveal max-w-3xl space-y-4">
          <p class="eyebrow">Ba page danh muc</p>
          <h2 class="display-title text-4xl sm:text-6xl">chon nhanh theo nhu cau</h2>
          <p class="text-base leading-8 text-[var(--color-body)]">
            Thay vi gom tat ca vao mot khu, moi nhom san pham da co page rieng de de mo rong gallery, combo va noi dung chi tiet sau nay.
          </p>
        </div>
      </div>

      <div class="section-grid sm:grid-cols-2 xl:grid-cols-3">
        <NuxtLink
          v-for="(item, index) in categories"
          :key="item.route"
          :to="item.route"
          class="glass-card animate-reveal group overflow-hidden rounded-[2rem]"
          :class="[`delay-${index + 1}`]"
        >
          <div class="media-frame h-72 sm:h-80">
            <img :src="item.heroImage" :alt="item.title" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          </div>
          <div class="space-y-4 p-5 sm:p-6">
            <p class="eyebrow">{{ item.eyebrow }}</p>
            <div class="flex items-center justify-between gap-4">
              <h3 class="display-title text-4xl sm:text-5xl">{{ item.title }}</h3>
              <span class="rounded-full bg-[rgba(156,175,136,0.12)] px-3 py-2 text-xs uppercase tracking-[0.18em] text-[var(--color-sage-deep)]">
                {{ item.accent }}
              </span>
            </div>
            <p class="text-sm leading-7 text-[var(--color-body)]">{{ item.summary }}</p>
            <span class="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-berry)]">
              Kham pha page
              <span class="gradient-line h-px w-10" />
            </span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="shell py-8 sm:py-12 lg:py-16">
      <div class="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div class="animate-reveal space-y-4">
          <p class="eyebrow">Vi sao doi design</p>
          <h2 class="display-title text-4xl sm:text-6xl">mot shop hoa can nhe, mo va co hoi tho</h2>
          <p class="max-w-xl text-base leading-8 text-[var(--color-body)]">
            Huong den truoc day qua manh va xa cam xuc cua mot shop hoa. He thong moi uu tien do sang, nen kem, lop texture nhe va bo cuc nhin de chiu tren man hinh nho.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-3">
          <article
            v-for="(reason, index) in reasons"
            :key="reason.title"
            class="glass-card animate-reveal rounded-[1.75rem] p-5 sm:p-6"
            :class="[`delay-${index + 1}`]"
          >
            <span class="eyebrow">0{{ index + 1 }}</span>
            <h3 class="display-title mt-4 text-3xl">{{ reason.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-[var(--color-body)]">{{ reason.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="shell py-8 sm:py-12 lg:py-16">
      <div class="soft-panel overflow-hidden rounded-[2rem] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <div class="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div class="animate-reveal">
            <p class="eyebrow mb-4">Trai nghiem thuong hieu</p>
            <h2 class="display-title text-4xl sm:text-5xl">mot set qua dep hon khi moi mon deu noi cung mot ngon ngu</h2>
          </div>

          <div class="grid gap-3 sm:grid-cols-2">
            <div
              v-for="(item, index) in experiences"
              :key="item"
              class="glass-card animate-reveal rounded-[1.5rem] p-4 sm:p-5"
              :class="[`delay-${(index % 4) + 1}`]"
            >
              <p class="text-sm leading-7 text-[var(--color-body)]">{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
