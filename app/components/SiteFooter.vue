<template>
  <footer class="border-t border-[var(--color-line)] bg-white/45">
    <div class="shell grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr]">
      <div class="space-y-5">
        <div class="w-28 rounded-[1.5rem] border border-[var(--color-line)] bg-white/70 px-4 py-3 shadow-[var(--shadow-soft)]">
          <div class="gradient-line h-1 w-full rounded-full" />
          <div class="pt-3">
            <p class="display-title text-2xl font-semibold tracking-[0.14em]">evershop</p>
          </div>
        </div>
        <p class="max-w-xl text-sm leading-7 text-[var(--color-body)]">
          evershop — Hoa tươi · Bánh handmade · Thức uống signature
        </p>
      </div>

      <div>
        <p class="eyebrow mb-4">Khám phá</p>
        <div class="space-y-3 text-sm text-[var(--color-body)]">
          <NuxtLink to="/" class="block hover:text-[var(--color-sage-deep)]">Trang chủ</NuxtLink>
          <NuxtLink to="/hoa" class="block hover:text-[var(--color-sage-deep)]">Hoa</NuxtLink>
          <NuxtLink to="/banh" class="block hover:text-[var(--color-sage-deep)]">Bánh</NuxtLink>
          <NuxtLink to="/nuoc" class="block hover:text-[var(--color-sage-deep)]">Nước</NuxtLink>
          <NuxtLink to="/gioi-thieu" class="block hover:text-[var(--color-sage-deep)]">Giới thiệu</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
