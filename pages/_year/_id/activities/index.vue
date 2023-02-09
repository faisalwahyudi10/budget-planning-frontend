<template>
  <div class="lg:pr-[70px] py-[50px] lg:ml-[320px] xl:ml-[365px] px-4 lg:pl-0">
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
        <div class="text-[32px] font-semibold text-dark">Kegiatan Program {{ programs.name }}</div>
      </div>
    </section>

    <section class="pt-[50px]">
      <!-- Section Header -->
      <div class="mb-[30px]">
        <div
          class="flex flex-col justify-between gap-6 sm:items-center sm:flex-row"
        >
          <div>
            <div class="text-xl font-medium text-dark">Data Kegiatan Program</div>
            <p class="text-grey">Total {{ total }} Data</p>
          </div>
          <NuxtLink :to="{ name: 'year-id-activities-create' }" class="btn btn-primary"
            >Tambah Kegiatan</NuxtLink
          >
        </div>
        <div class="flex items-center w-full my-5">   
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" v-model="searchQuery" id="simple-search" class="bg-white border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-14 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
          </div>
        </div>
        <div class="text-lg font-medium text-dark">Rencana Anggaran : {{ programs.budget | currency('Rp. ') }}</div>
        <div class="text-lg font-medium text-dark">Total Anggaran Kegiatan : {{ costTotal | currency('Rp. ') }}</div>
        <div class="text-lg font-medium text-dark">Total Realisasi Kegiatan : {{ costTotal2 | currency('Rp. ') }}</div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
      <p v-if="$fetchState.pending">Fetching activities...</p>
        <div class="items-start card !flex-row gap-4" v-else v-for="(activity, index) in resultQuery">
          
          <a
            href="#"
            class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"
            v-on:click="detailActivity({id:activity.id, name:activity.name, b_tw1:activity.activity_budget_tw1, b_tw2:activity.activity_budget_tw2, b_tw3:activity.activity_budget_tw3, b_tw4:activity.activity_budget_tw4, r_tw1:activity.activity_realized_tw1, r_tw2:activity.activity_realized_tw2, r_tw3:activity.activity_realized_tw3, r_tw4:activity.activity_realized_tw4, dp_tw1:activity.document_plan_tw1, dp_tw2:activity.document_plan_tw2, dp_tw3:activity.document_plan_tw3, dp_tw4:activity.document_plan_tw4, dr_tw1:activity.document_realized_tw1, dr_tw2:activity.document_realized_tw2, dr_tw3:activity.document_realized_tw3, dr_tw4:activity.document_realized_tw4, target:activity.target, program:activity.program.name})"
          ></a>
          <img src="/assets/svgs/ric-flag.svg" alt="" />
          <div>
            <div class="mb-2 font-semibold text-dark">
                {{ activity.name }}
            </div>
            <p class="text-grey">Anggaran : {{ budgetTotal[index] | currency('Rp. ') }}</p>
            <p class="text-grey" v-if="realizedTotal[index] == null || realizedTotal[index] == 0">Realisasi : Belum Diinput</p>
            <p class="text-grey" v-else>Realisasi : {{ realizedTotal[index] | currency('Rp. ') }}</p>

            <div v-if="showModal" id="myModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto shadow-lg shadow-blue-500/50 ... outline-none focus:outline-none">
              <div class="relative w-auto max-w-6xl mx-auto my-6">
                <!--content-->
                <div class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  <!--header-->
                  <div class="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                    <h5 class="text-xl font-semibold text-blue-500">
                      Detail Data Kegiatan
                    </h5>
                    <button class="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none" v-on:click="detailActivity()">
                      <span class="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <!--body-->
                  <div class="relative flex-auto p-6">
                    <table class="p-5 shadow-lg shadow-blue-100/50 ... w-full rounded-lg border-collapse border-spacing-2 border border-slate-300 ...">
                      <tr>
                        <th class="p-4 text-center border border-slate-300 ..." colspan="3"> {{ passedData.name }}</th>
                      </tr>
                      <tr>
                        <th class="p-4 text-center border border-slate-300 ..."> Desc</th>
                        <th class="p-4 text-center border border-slate-300 ..."> Rencana </th>
                        <th class="p-4 text-center border border-slate-300 ..."> Realisasi</th>
                      </tr>
                      <tr>
                        <th class="p-4 text-left border border-slate-300 ..."> Anggaran Tw1 :</th>
                        <td class="p-4 text-left border border-slate-300 ..."> {{ passedData.b_tw1 | currency('Rp. ') }} </td>
                        <td class="p-4 text-left border border-slate-300 ..." v-if="passedData.r_tw1 == null || passedData.r_tw1 == 0"> Belum ada data</td>
                        <td class="p-4 text-left border border-slate-300 ..." v-else> {{ passedData.r_tw1 | currency('Rp. ') }} </td>
                      </tr>
                      <tr>
                        <th class="p-4 text-left border border-slate-300 ..."> Anggaran Tw2 :</th>
                        <td class="p-4 text-left border border-slate-300 ..."> {{ passedData.b_tw2 | currency('Rp. ') }} </td>
                        <td class="p-4 text-left border border-slate-300 ..." v-if="passedData.r_tw2 == null || passedData.r_tw2 == 0"> Belum ada data</td>
                        <td class="p-4 text-left border border-slate-300 ..." v-else> {{ passedData.r_tw2 | currency('Rp. ') }} </td>
                      </tr>
                      <tr>
                        <th class="p-4 text-left border border-slate-300 ..."> Anggaran Tw3 :</th>
                        <td class="p-4 text-left border border-slate-300 ..."> {{ passedData.b_tw3 | currency('Rp. ') }} </td>
                        <td class="p-4 text-left border border-slate-300 ..." v-if="passedData.r_tw3 == null || passedData.r_tw3 == 0"> Belum ada data</td>
                        <td class="p-4 text-left border border-slate-300 ..." v-else> {{ passedData.r_tw3 | currency('Rp. ') }} </td>
                      </tr>
                      <tr>
                        <th class="p-4 text-left border border-slate-300 ..."> Anggaran Tw4 :</th>
                        <td class="p-4 text-left border border-slate-300 ..."> {{ passedData.b_tw4 | currency('Rp. ') }} </td>
                        <td class="p-4 text-left border border-slate-300 ..." v-if="passedData.r_tw4 == null || passedData.r_tw4 == 0"> Belum ada data</td>
                        <td class="p-4 text-left border border-slate-300 ..." v-else> {{ passedData.r_tw4 | currency('Rp. ') }} </td>
                      </tr>
                      <tr>
                        <th class="p-4 text-left border border-slate-300 ..."> Indikator Target Tw1 :</th>
                        <td class="p-4 text-left border border-slate-300 ..."> {{ passedData.dp_tw1 }} {{ passedData.target }} </td>
                        <td class="p-4 text-left border border-slate-300 ..." v-if="passedData.dr_tw1 == null || passedData.dr_tw1 == 0"> Belum ada data</td>
                        <td class="p-4 text-left border border-slate-300 ..." v-else> {{ passedData.dr_tw1 }} {{ passedData.target }} </td>
                      </tr>
                      <tr>
                        <th class="p-4 text-left border border-slate-300 ..."> Indikator Target Tw2 :</th>
                        <td class="p-4 text-left border border-slate-300 ..."> {{ passedData.dp_tw2 }} {{ passedData.target }} </td>
                        <td class="p-4 text-left border border-slate-300 ..." v-if="passedData.dr_tw2 == null || passedData.dr_tw2 == 0"> Belum ada data</td>
                        <td class="p-4 text-left border border-slate-300 ..." v-else> {{ passedData.dr_tw2 }} {{ passedData.target }} </td>
                      </tr>
                      <tr>
                        <th class="p-4 text-left border border-slate-300 ..."> Indikator Target Tw3 :</th>
                        <td class="p-4 text-left border border-slate-300 ..."> {{ passedData.dp_tw3 }} {{ passedData.target }} </td>
                        <td class="p-4 text-left border border-slate-300 ..." v-if="passedData.dr_tw3 == null || passedData.dr_tw3 == 0"> Belum ada data</td>
                        <td class="p-4 text-left border border-slate-300 ..." v-else> {{ passedData.dr_tw3 }} {{ passedData.target }} </td>
                      </tr>
                      <tr>
                        <th class="p-4 text-left border border-slate-300 ..."> Indikator Target Tw4 :</th>
                        <td class="p-4 text-left border border-slate-300 ..."> {{ passedData.dp_tw4 }} {{ passedData.target }} </td>
                        <td class="p-4 text-left border border-slate-300 ..." v-if="passedData.dr_tw4 == null || passedData.dr_tw4 == 0"> Belum ada data</td>
                        <td class="p-4 text-left border border-slate-300 ..." v-else> {{ passedData.dr_tw4 }} {{ passedData.target }} </td>
                      </tr>
                    </table>
                  </div>
                  <!--footer-->
                  <div class="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                    <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" v-on:click="detailActivity()">
                      Close
                    </button>
                    <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" v-on:click.prevent="deleteData()">
                      Delete Data
                    </button>
                    <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" @click="openUpdate()">
                      Update Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="showModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
    layout: 'dashboardPegawai',
    middleware: 'auth',
    data() {
      return {
          searchQuery: null,
          activities: [],
          total: [],
          programs: [],
          passedData: {
            id:null,
            name: null,
            b_tw1: null,
            b_tw2: null,
            b_tw3: null,
            b_tw4: null,
            r_tw1: null,
            r_tw2: null,
            r_tw3: null,
            r_tw4: null,
            dp_tw1: null,
            dp_tw2: null,
            dp_tw3: null,
            dp_tw4: null,
            dr_tw1: null,
            dr_tw2: null,
            dr_tw3: null,
            dr_tw4: null,
            target: null,
            program: null,
          },
          showModal: false,
      }
    },
    created() {
      this.getActivities(),
      this.getTotal()
    },
    methods:{
        getActivities() {
          this.activities = this.$axios.get('/activity', {
                params: {
                    program_id: this.$route.params.id,
                    limit: 100,
                }
            }) .then(({ data }) => {
                        this.activities = data.result.data
                    })
        },
        getTotal() {
          this.total = this.$axios.get('/activity', {
                params: {
                    program_id: this.$route.params.id,
                    limit: 100,
                }
            }) .then(({ data }) => {
                        this.total = data.result.total
                    })
        },
        detailActivity: function(item){
            this.showModal = !this.showModal;
            this.passedData = item
        },
        openUpdate() {
            this.$router.push({
            name: 'year-id-activities-slug-update',
            params: {
                slug: this.passedData.id,
            },
            })
        },
        deleteData() {
            const confirmBox = confirm("Anda Yakin Ingin Menghapus Data ini?")
            if (confirmBox) {
              this.$axios.delete('/activity/' + this.passedData.id)
              .then((response) => this.getActivities() + this.getTotal());
            }
            this.showModal = false
        },
    },
    computed: { 
        budgetTotal() {
            return this.activities.map((item) => {
                return Number(item.activity_budget_tw1 + item.activity_budget_tw2 + item.activity_budget_tw3 + item.activity_budget_tw4)
            });
        },
        realizedTotal() {
            return this.activities.map((item) => {
                return Number(item.activity_realized_tw1 + item.activity_realized_tw2 + item.activity_realized_tw3 + item.activity_realized_tw4)
            });
        },
        costTotal() {
          let total = [];

          Object.entries(this.activities).forEach(([key, item]) => {
              total.push(parseInt(item.activity_budget_tw1 + item.activity_budget_tw2 + item.activity_budget_tw3 + item.activity_budget_tw4));
          });

          return total.reduce(function(total, num){ return total + num }, 0);
        },
        costTotal2() {
          let total = [];

          Object.entries(this.activities).forEach(([key, item]) => {
              total.push(parseInt(item.activity_realized_tw1 + item.activity_realized_tw2 + item.activity_realized_tw3 + item.activity_realized_tw4));
          });

          return total.reduce(function(total, num){ return total + num }, 0);
        },
        resultQuery(){
            if(this.searchQuery){
            return this.activities.filter((item)=>{
                let columns = item.name;
                return this.searchQuery.toLowerCase().split(' ').every(v => columns.toLowerCase().includes(v))
            })
            }else{
            return this.activities;
            }
        },
    },
    
    fetch() {
        
        
        this.programs = this.$axios.get('/program', {
                params: {
                    id: this.$route.params.id,
                }
        }) .then(({ data }) => {
                        this.programs = data.result
                    })
    },
};
</script>