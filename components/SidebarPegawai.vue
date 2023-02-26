<template>
    <!-- Sidebar -->
        <div class="hidden lg:block fixed lg:max-w-[295px] w-full overflow-y-auto h-full bg-white z-[999]" id="sidebarHRIS">
            <div class="px-6 py-[50px] gap-y-[50px] flex flex-col">
                <div class="flex items-center justify-between p-3">
                    <a href="#" class="flex justify-center">
                        <img src="/assets/images/logo.png" alt="">
                    </a>
                    <a href="#" id="toggleCloseSidebar" class="lg:hidden">
                        <svg class="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </a>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="text-sm text-grey">Menu</div>
                    <NuxtLink :to="{ name: 'year-id' }" class="nav-link">
                        <img src="/assets/svgs/ic-grid.svg" alt="">
                        Dashboard
                    </NuxtLink>
                    <NuxtLink :to="{ name: 'year-id-programs' }" class="nav-link">
                        <img src="/assets/svgs/ic-box.svg" alt="">
                        Program
                    </NuxtLink>
                    <NuxtLink :to="{ name: 'year-id-activities' }" class="nav-link">
                        <img src="/assets/svgs/activity-svgrepo-com.svg" alt="">
                        Kegiatan
                    </NuxtLink>
                    <NuxtLink :to="{ name: 'year-id-expenses' }" class="nav-link">
                        <img src="/assets/svgs/basket-shopping.svg" alt="">
                        Rincian Belanja
                    </NuxtLink>
                    <NuxtLink :to="{ name: 'year-id-realization' }" class="nav-link">
                        <img src="/assets/svgs/layer-group.svg" alt="">
                        Realisasi
                    </NuxtLink>
                    <NuxtLink :to="{ name: 'year-id-reports' }" class="nav-link">
                        <img src="/assets/svgs/file-export.svg" alt="">
                        Laporan
                    </NuxtLink>
                    <NuxtLink :to="{ name: 'year-id-charts' }" class="nav-link">
                        <img src="/assets/svgs/chart.svg" alt="">
                        Grafik
                    </NuxtLink>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="text-sm text-grey">Setting</div>
                    <NuxtLink :to="{ name: 'year-id-profile' }" class="nav-link">
                        <img src="/assets/svgs/user-astrounaut.svg" alt="">
                        Profil
                    </NuxtLink>
                    <NuxtLink :to="{ name: 'year-id-detailType' }" class="nav-link">
                        <img src="/assets/svgs/hashtags.svg" alt="">
                        Jenis Belanja
                    </NuxtLink>
                    <button @click="$auth.logout()" class="nav-link">
                        <img src="/assets/svgs/ic-signout.svg" alt="">
                        Logout
                    </button>
                </div>
            </div>
        </div>
</template>