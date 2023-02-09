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
              class="w-6 h-6 text-dark"
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
          <div class="text-[32px] font-semibold text-dark">Dashboard Pegawai</div>
          
        </div>

        <div class="flex items-center gap-4">
          <div class="shrink md:w-[286px] w-full">
            <select v-model="selectedProgram" class="form-select appearance-none
              input-field
              !outline-none
              italic
              ring-indigo-200
              focus:ring-2
              transition-all
              duration-300
              w-full
              px-3
              pl-8
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding bg-no-repeat
              border border-solid border-gray-300
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                <option selected disabled value="Pilih Tahun Program">Pilih Program</option>
                <option :value="program.id" v-for="program in select">
                  {{ program.name }}
                </option>
            </select>
            
          </div>
          <div>
            <button @click="openProgram()" type="button" class="inline-block leading-normal text-white uppercase transition duration-150 ease-in-out rounded-full shadow-md bg-sky-600 hover:bg-sky-700 hover:shadow-lg focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-800 active:shadow-lg w-9 h-9">
              <font-awesome-icon :icon="['fas', 'search']" beat-fade title="Edit Data Program" />
            </button>
          </div>
          
        </div>
        
      </section>

      <section class="pt-[20px]">
        <div class="text-[22px] mb-[30px] font-semibold text-dark">Program {{ programs.name }}</div>
        <!-- Section Header -->
        <div class="mb-[30px]">
          <div class="flex items-center justify-between gap-6">
            <div>
              <div class="text-xl font-medium text-dark">Statistik</div>
              
            </div>
          </div>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-11">
          <div class="card !gap-y-10 min-h-[200px]">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-grey">Anggaran Program</p>
                <div class="text-[32px] font-bold text-dark mt-[6px]">{{ programs.budget | currency('Rp. ') }}</div>
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
                <div class="text-[32px] font-bold text-dark mt-[6px]" v-if="programs.realized == '' || programs.realized == null || programs.realized == 0">Belum Diinput</div>
                <div class="text-[32px] font-bold text-dark mt-[6px]" v-else>{{ programs.realized | currency('Rp. ') }}</div>
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
                <div class="text-[32px] font-bold text-dark mt-[6px]">{{ activities.total }}</div>
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
                  <div class="text-xl font-medium text-dark">Grafik Bar</div>
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
                  <div class="text-xl font-medium text-dark">Grafik Pie</div>
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
    
    layout: 'dashboardPegawai',
    middleware: 'auth',
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