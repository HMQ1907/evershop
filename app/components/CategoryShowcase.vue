<script setup lang="ts">
const props = defineProps<{
  slug: 'hoa' | 'banh' | 'nuoc'
}>()

const { detailMap } = useCatalogData()
const page = detailMap[props.slug]

const routeMap = {
  hoa: '/banh',
  banh: '/nuoc',
  nuoc: '/hoa'
} as const

const nextLabelMap = {
  hoa: 'Xem trang Bánh',
  banh: 'Xem trang Nước',
  nuoc: 'Xem trang Hoa'
} as const
</script>

<template>
  <main class="shell py-10 sm:py-14 lg:py-16">
    <section class="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
      <div class="animate-reveal space-y-6">
        <span class="soft-badge">{{ page.badge }}</span>
        <div class="space-y-4">
          <p class="eyebrow">{{ page.eyebrow }}</p>
          <h1 class="display-title text-5xl leading-none sm:text-7xl">{{ page.title }}</h1>
          <div class="gradient-line h-1.5 w-32 rounded-full" />
        </div>
        <p class="max-w-xl text-base leading-8 text-[var(--color-body)]">
          {{ page.intro }}
        </p>
        <div class="flex flex-wrap gap-3 sm:gap-4">
          <NuxtLink to="/" class="secondary-button">Về trang chủ</NuxtLink>
          <NuxtLink :to="routeMap[slug]" class="primary-button">{{ nextLabelMap[slug] }}</NuxtLink>
        </div>
      </div>

      <div class="animate-reveal-soft delay-2">
        <div class="soft-panel overflow-hidden rounded-[2rem] p-3 sm:p-4">
          <div class="media-frame h-[22rem] sm:h-[32rem]">
            <img :src="page.heroImage" :alt="page.title" class="h-full w-full object-cover" />
          </div>
          <div class="p-4 sm:p-6">
            <p class="text-base leading-8 text-[var(--color-body)]">{{ page.highlight }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 sm:py-14">
      <div class="mb-8 max-w-3xl space-y-4">
        <p class="eyebrow">Bộ sưu tập</p>
        <h2 class="display-title text-4xl sm:text-6xl">{{ page.collectionTitle }}</h2>
      </div>

      <div class="section-grid sm:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="(item, index) in page.items"
          :key="item.name"
          class="glass-card animate-reveal overflow-hidden rounded-[2rem]"
          :class="[`delay-${index + 1}`]"
        >
          <div class="media-frame h-72 sm:h-80">
            <img :src="item.image" :alt="item.name" class="h-full w-full object-cover transition duration-700 hover:scale-105" />
          </div>
          <div class="space-y-4 p-5 sm:p-6">
            <div class="flex items-center justify-between gap-3">
              <p class="eyebrow">{{ item.note }}</p>
              <span class="rounded-full bg-[rgba(231,194,201,0.2)] px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-[var(--color-berry)]">
                {{ page.tag }}
              </span>
            </div>
            <h3 class="display-title text-3xl sm:text-4xl">{{ item.name }}</h3>
            <p class="text-sm leading-7 text-[var(--color-body)]">{{ item.description }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="pb-6 sm:pb-10">
      <div class="soft-panel overflow-hidden rounded-[2rem] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <div class="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div class="space-y-4">
            <p class="eyebrow">{{ page.tipsEyebrow }}</p>
            <h2 class="display-title text-4xl sm:text-5xl">{{ page.tipsTitle }}</h2>
          </div>

          <div class="grid gap-3">
            <div
              v-for="(tip, index) in page.tips"
              :key="tip"
              class="glass-card animate-reveal rounded-[1.5rem] p-4 sm:p-5"
              :class="[`delay-${(index % 3) + 1}`]"
            >
              <p class="text-sm leading-7 text-[var(--color-body)]">{{ tip }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
