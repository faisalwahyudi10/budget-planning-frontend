<template>
    <!-- Sidebar -->
        <div class="hidden overflow-x-hidden lg:block fixed lg:max-w-[295px] w-full overflow-y-auto h-full bg-white dark:bg-slate-800 border-r dark:border-slate-700 z-[999]" id="sidebarHRIS">
            <div class="px-6 py-[50px] gap-y-[50px] flex flex-col">
                <div class="flex items-center justify-between p-3">
                    <a href="#" class="flex justify-center">
                        <img src="/assets/images/logo.png" alt="">
                    </a>
                    <a href="#" id="toggleCloseSidebar" class="lg:hidden">
                        <svg class="w-6 h-6 text-dark dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </a>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="text-sm text-grey">Menu</div>
                    <NuxtLink :to="{ name: 'seyear-se-id' }" class="nav-link">
                        <img src="/assets/svgs/ic-grid.svg" alt="">
                        Dashboard
                    </NuxtLink>
                    <NuxtLink :to="{ name: 'seyear-se-id-programs' }" class="nav-link">
                        <img src="/assets/svgs/ic-box.svg" alt="">
                        Program
                    </NuxtLink>
                    <NuxtLink :to="{ name: 'seyear-se-id-expenses' }" class="nav-link">
                        <img src="/assets/svgs/basket-shopping.svg" alt="">
                        Rincian Belanja
                    </NuxtLink>
                    <NuxtLink :to="{ name: 'seyear-se-id-rak' }" class="nav-link">
                        <img src="/assets/svgs/basket-shopping.svg" alt="">
                        RAK
                    </NuxtLink>
                    <NuxtLink :to="{ name: 'seyear-se-id-realization' }" class="nav-link">
                        <img src="/assets/svgs/layer-group.svg" alt="">
                        Realisasi Anggaran
                    </NuxtLink>
                    <!-- <NuxtLink :to="{ name: 'seyear-se-id-reports' }" class="nav-link">
                        <img src="/assets/svgs/file-export.svg" alt="">
                        Laporan
                    </NuxtLink> -->
                    <button type="button" v-on:click="openside()" class="flex items-center w-full nav-link">
                        <img src="/assets/svgs/file-export.svg" alt="">

                        <span class="flex-1 text-left">Laporan</span>
                        <font-awesome-icon :icon="['fas', 'chevron-down']" v-if="!viewModal" :style="{ color: '#ABB3C4' }" />
                        <font-awesome-icon :icon="['fas', 'chevron-down']" v-else rotation="180" :style="{ color: '#ABB3C4' }" />
                    </button>
                    <div id="dropdown-example" v-if="viewModal" class="py-2 space-y-2">
                        <NuxtLink :to="{ name: 'seyear-se-id-reports-report1' }" class="flex items-center w-full p-2 text-sm text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            Rencana Anggaran Program
                        </NuxtLink>
                        <NuxtLink :to="{ name: 'seyear-se-id-reports-report2' }" class="flex items-center w-full p-2 text-sm text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            Realisasi Anggaran Program
                        </NuxtLink>
                        <NuxtLink :to="{ name: 'seyear-se-id-reports-report3' }" class="flex items-center w-full p-2 text-sm text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            Perbandingan Rencana dan Realisasi Anggaran
                        </NuxtLink>
                        <NuxtLink :to="{ name: 'seyear-se-id-reports-report4' }" class="flex items-center w-full p-2 text-sm text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            Realisasi Anggaran Persemester
                        </NuxtLink>
                        <NuxtLink :to="{ name: 'seyear-se-id-reports-report5' }" class="flex items-center w-full p-2 text-sm text-gray-600 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                            Realisasi Anggaran Pertahun
                        </NuxtLink>
                    </div>
                    

                    <NuxtLink :to="{ name: 'seyear-se-id-charts' }" class="nav-link">
                        <img src="/assets/svgs/chart.svg" alt="">
                        Grafik
                    </NuxtLink>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="text-sm text-grey">Setting</div>
                    <NuxtLink :to="{ name: 'seyear-se-id-profile' }" class="nav-link">
                        <img src="/assets/svgs/user-astrounaut.svg" alt="">
                        Profil
                    </NuxtLink>
                    <div class="flex items-center gap-4 cursor-pointer nav-link" @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'">
                        <svg v-if="$colorMode.value === 'dark'" class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        <svg v-else class="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                        Tema {{ $colorMode.value === 'dark' ? 'Terang' : 'Gelap' }}
                    </div>
                    <button @click="$auth.logout()" class="nav-link">
                        <img src="/assets/svgs/ic-signout.svg" alt="">
                        Logout
                    </button>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data() {
      return {
          viewModal: false,
      }
    },
    methods: {
      openside: function(data){
        this.viewModal = !this.viewModal;
      },
    }
}
</script>