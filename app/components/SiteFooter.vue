<template>
  <footer class="border-t border-[var(--color-line)] bg-white/45">
    <div class="shell grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr]">
      <div class="space-y-5">
        <div class="w-28 rounded-[1.5rem] border border-[var(--color-line)] bg-white/70 px-4 py-3 shadow-[var(--shadow-soft)]">
          <div class="gradient-line h-1 w-full rounded-full" />
          <div class="pt-3">
            <p class="display-title text-2xl font-semibold tracking-[0.14em]">evershop</p>
          </div>
        </div>
        <p class="max-w-xl text-sm leading-7 text-[var(--color-body)]">
          Khong gian gioi thieu hoa, banh va nuoc theo tinh than mem, sang va hop voi nhung mon qua can su cham chut.
        </p>
      </div>

      <div>
        <p class="eyebrow mb-4">Kham pha</p>
        <div class="space-y-3 text-sm text-[var(--color-body)]">
          <NuxtLink to="/" class="block hover:text-[var(--color-sage-deep)]">Trang chu</NuxtLink>
          <NuxtLink to="/hoa" class="block hover:text-[var(--color-sage-deep)]">Hoa</NuxtLink>
          <NuxtLink to="/banh" class="block hover:text-[var(--color-sage-deep)]">Banh</NuxtLink>
          <NuxtLink to="/nuoc" class="block hover:text-[var(--color-sage-deep)]">Nuoc</NuxtLink>
          <NuxtLink to="/gioi-thieu" class="block hover:text-[var(--color-sage-deep)]">Gioi thieu</NuxtLink>
        </div>
      </div>

      <div>
        <p class="eyebrow mb-4">Ghi chu</p>
        <p class="text-sm leading-7 text-[var(--color-body)]">
          Website hien tai la ban trinh bay tinh va da responsive cho mobile, tablet, desktop. Hinh anh van la placeholder de thay sau.
        </p>
      </div>
    </div>
  </footer>
</template>
