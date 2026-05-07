<script setup lang="ts">
const isOpen = ref(false)
const route = useRoute()
const { categories } = useCatalogData()

watch(
  () => route.path,
  () => {
    isOpen.value = false
  }
)

const links = [
  { label: 'Trang chu', to: '/' },
  { label: 'Gioi thieu', to: '/gioi-thieu' },
  ...categories.map((item) => ({ label: item.title, to: item.route }))
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(251,247,242,0.72)] backdrop-blur-xl">
    <div class="shell flex items-center justify-between gap-6 py-4">
      <NuxtLink to="/" class="group flex items-center gap-4">
        <div class="overflow-hidden rounded-full border border-[var(--color-line)] bg-white/80 px-4 py-2 shadow-[var(--shadow-soft)]">
          <div class="gradient-line h-1 w-12 rounded-full" />
          <div class="mt-2 flex items-center justify-center text-[0.72rem] uppercase tracking-[0.38em] text-[var(--color-sage-deep)]">
            es
          </div>
        </div>
        <div>
          <p class="display-title text-2xl font-semibold tracking-[0.16em]">evershop</p>
          <p class="text-[0.72rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
            flowers cakes drinks
          </p>
        </div>
      </NuxtLink>

      <nav class="hidden items-center gap-7 xl:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-body)] hover:text-[var(--color-sage-deep)]"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-4 lg:flex">
        <span class="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">responsive showcase</span>
        <NuxtLink to="/hoa" class="primary-button px-5 py-3">
          Xem hoa
        </NuxtLink>
      </div>

      <button
        type="button"
        class="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/75 text-[var(--color-ink)] xl:hidden"
        :aria-expanded="isOpen"
        aria-label="Mo menu"
        @click="isOpen = !isOpen"
      >
        <span class="space-y-1.5">
          <span class="block h-px w-5 bg-current" />
          <span class="block h-px w-5 bg-current" />
          <span class="block h-px w-5 bg-current" />
        </span>
      </button>
    </div>

    <div v-if="isOpen" class="border-t border-[var(--color-line)] bg-[rgba(255,253,249,0.96)] xl:hidden">
      <div class="shell flex flex-col gap-4 py-5">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="border-b border-[var(--color-line)] pb-4 text-sm uppercase tracking-[0.18em] text-[var(--color-body)]"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
