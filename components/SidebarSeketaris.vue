<template>
    <!-- Sidebar -->
        <div class="hidden overflow-x-hidden lg:block fixed lg:max-w-[295px] w-full overflow-y-auto h-full bg-white z-[999]" id="sidebarHRIS">
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