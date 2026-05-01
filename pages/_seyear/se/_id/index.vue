<template>
  <div>
    <!-- Main Content -->
    <div
      class="lg:pr-[70px] py-[50px] lg:ml-[320px] xl:ml-[365px] px-4 lg:pl-0"
    >
      <!-- Top Section -->
      <section
        class="flex flex-col flex-wrap justify-between gap-6 md:items-center md:flex-row"
      >
        <div class="flex items-center justify-between gap-4">
          <a href="#" id="toggleOpenSidebar" class="lg:hidden">
            <svg
              class="w-6 h-6 text-dark dark:text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              ></path>
            </svg>
          </a>
          <div class="text-[32px] font-semibold text-dark dark:text-gray-100">Dashboard Seketaris</div>
          
        </div>

        <div>
          <NuxtLink :to="{ name: 'seyear-se' }" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pilih Program</NuxtLink>
        </div>
        
      </section>

      <section class="pt-[20px]">
        <div class="text-[22px] mb-[30px] font-semibold text-dark dark:text-gray-100">Program {{ programs.name }}</div>
        <!-- Section Header -->
        <div class="mb-[30px]">
          <div class="flex items-center justify-between gap-6">
            <div>
              <div class="text-xl font-medium text-dark dark:text-gray-100">Statistik</div>
              
            </div>
          </div>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-11">
          <div class="card !gap-y-10 min-h-[200px]">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-grey">Anggaran Program</p>
                <div class="text-[32px] font-bold text-dark dark:text-gray-100 mt-[6px]">{{ programs.budget | currency('Rp. ') }}</div>
              </div>
              <NuxtLink :to="{ name: 'home-employees-create' }"
                ><img src="/assets/svgs/ric-plus.svg" alt=""
              /></NuxtLink>
            </div>
          </div>
          <div class="card !gap-y-10 min-h-[200px]">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-grey">Realisasi Anggaran Program</p>
                <div class="text-[32px] font-bold text-dark dark:text-gray-100 mt-[6px]" v-if="programs.realized == '' || programs.realized == null || programs.realized == 0">Belum Diinput</div>
                <div class="text-[32px] font-bold text-dark dark:text-gray-100 mt-[6px]" v-else>{{ programs.realized | currency('Rp. ') }}</div>
              </div>
              <a href="#">
                <img src="/assets/svgs/ric-plus.svg" alt="" />
              </a>
            </div>
          </div>
          <div class="card !gap-y-10 min-h-[200px]">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-grey">Jumlah Kegiatan</p>
                <div class="text-[32px] font-bold text-dark dark:text-gray-100 mt-[6px]">{{ activities.total }}</div>
              </div>
              <a href="#">
                <img src="/assets/svgs/ric-plus.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="pt-[50px]">
        <div class="grid md:grid-cols-2 gap-11">
          <!-- Documents -->
          <div>
            <!-- Section Header -->
            <div class="mb-[30px]">
              <div class="flex items-center justify-between gap-6">
                <div>
                  <div class="text-xl font-medium text-dark dark:text-gray-100">Grafik Bar</div>
                  <p class="text-grey">Realisasi Anggaran Pertahun</p>
                </div>
              </div>
            </div>
            <div class="card md:min-h-[468px]">
              <div class="w-full m-auto text-center">
                <BarChart />
              </div>
            </div>
          </div>

          <!-- History -->
          <div>
            <!-- Section Header -->
            <div class="mb-[30px]">
              <div class="flex items-center justify-between gap-6">
                <div>
                  <div class="text-xl font-medium text-dark dark:text-gray-100">Grafik Pie</div>
                  <p class="text-grey">Anggaran Kegiatan Program</p>
                </div>
              </div>
            </div>
            <div class="card min-h-[468px]">
              <div class="w-full m-auto text-center">
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import BarChart from "/components/BarChart";
import PieChart from "/components/PieChart";
export default {
    
    layout: 'dashboardSeketaris',
    middleware: ['auth', 'onlySecretary'],
    components: {
      BarChart,
      PieChart
    },
    data() {
      return {
          activities: [],
          programs: [],
          realized: [],
          select: [],
          selectedProgram: 'Pilih Tahun Program',
      }
    }, 
    // computed: { 
    //     // planTotal() {
    //     //     return this.activities.reduce((total, item) => {
    //     //         return total + item.document_plan_tw1 + item.document_plan_tw2 + item.document_plan_tw3 + item.document_plan_tw4;
    //     //     }, 0);
    //     // },
    //     // realizedTotal() {
    //     //     return this.activities.reduce((total, item) => {
    //     //         return total + item.document_realized_tw1 + item.document_realized_tw2 + item.document_realized_tw3 + item.document_realized_tw4;
    //     //     }, 0);
    //     // },
    // },
    fetch() {
      this.activities = this.$axios.get('/activity', {
        params: {
                program_id: this.$route.params.id,
                limit: 100,
            }
      }) .then(({ data }) => {
                    this.activities = data.result
                })
      this.programs = this.$axios.get('/program', {
        params: {
                id: this.$route.params.id,
            }
      }) .then(({ data }) => {
                    this.programs = data.result
                })
      this.realized = this.$axios.get('/program?realized_null=1', {
      }) .then(({ data }) => {
                    this.realized = data.result
                })
      this.select = this.$axios.get('/program', {
                params: {
                    date_program: this.$route.params.year,
                    limit: 100,
                }
      }) .then(({ data }) => {
                    this.select = data.result.data
                })
    },
    methods: {
        openProgram() {
            this.$router.push({
                name: 'year-id',
                params: {
                    id: this.selectedProgram,
                },
            })
        },
    },
}
</script>