<script setup lang="ts">
useHead({
  title: 'Gioi thieu'
})

const values = [
  {
    title: 'Tinh te trong tung lua chon',
    body: 'Tu tong mau den cach trinh bay, evershop huong toi su nhe nhang va dep mat nhung van gan gui.'
  },
  {
    title: 'Qua tang co cam xuc',
    body: 'Shop ra doi de nhung bo hoa, chiec banh va ly nuoc khong chi dep ma con thay loi nguoi tang muon gui.'
  },
  {
    title: 'Dong nhat ve visual',
    body: 'Moi nhom san pham duoc xep chung trong mot gu tham my de khi di cung nhau van thanh mot tong the dep.'
  }
]
</script>

<template>
  <main class="shell py-10 sm:py-14 lg:py-16">
    <section class="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <div class="animate-reveal space-y-6">
        <span class="soft-badge">Founder story</span>
        <div class="space-y-4">
          <p class="eyebrow">Nguoi dung sau thuong hieu</p>
          <h1 class="display-title text-5xl leading-none sm:text-7xl">Pham Thi Cam Nhung</h1>
          <div class="gradient-line h-1.5 w-32 rounded-full" />
        </div>
        <p class="max-w-xl text-base leading-8 text-[var(--color-body)]">
          Pham Thi Cam Nhung la nguoi sang lap evershop. Tu tinh yeu voi nhung mon qua duoc chuan bi that dep va that tinh, chi bat dau evershop nhu mot khong gian nho de gom hoa, banh va nuoc vao cung mot gu tham my mem, sang va co cam xuc.
        </p>
        <div class="flex flex-wrap gap-3 sm:gap-4">
          <NuxtLink to="/" class="secondary-button">Ve trang chu</NuxtLink>
          <NuxtLink to="/hoa" class="primary-button">Xem page Hoa</NuxtLink>
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
            <p class="eyebrow">Vi sao shop ra doi</p>
            <h2 class="display-title text-4xl sm:text-5xl">de nhung dip dac biet co mot cach the hien dep hon</h2>
            <p class="text-base leading-8 text-[var(--color-body)]">
              evershop bat dau tu mot ly do don gian: khi muon tang ai do mot dieu gi, chung ta thuong can hon mot san pham. Can mot khoanh khac. Vi vay shop duoc xay dung de giup nhung bo hoa, chiec banh va ly nuoc tro thanh mot phan cua ky niem.
            </p>
          </div>

          <div class="glass-card rounded-[1.75rem] p-5 sm:p-6">
            <p class="eyebrow mb-4">Huong hien tai</p>
            <p class="text-sm leading-7 text-[var(--color-body)]">
              Design moi uu tien responsiveness, nhieu khoang tho, bo cuc meo dep tren mobile va su mem mai phu hop voi thuong hieu ban hoa hon. Day la nen tang tot de tien toi website co dat hang o buoc sau.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
