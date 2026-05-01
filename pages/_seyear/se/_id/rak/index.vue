<template>
  <div class="lg:pr-[70px] py-[50px] lg:ml-[320px] xl:ml-[365px] px-4 lg:pl-0">
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
        <div class="text-[32px] font-semibold text-dark dark:text-gray-100">Detail Rincian Belanja</div>
      </div>
    </section>

    <section class="pt-[50px]">
      <!-- Section Header -->
      <div class="mb-[30px]">
        <div class="flex items-center w-full mb-5">   
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <select v-model="searchQuery" id="simple-search" class="block w-full p-3 pl-10 text-lg text-gray-900 bg-white dark:bg-slate-800 border border-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500 h-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected disabled value="">-- Pilih Kegiatan --</option>
                <option v-for="activity in activities" :value="activity.id">{{ activity.name }}</option>
              </select>
          </div>
        </div>
        <div
          class="flex flex-col justify-between gap-6 sm:items-center sm:flex-row"
        >
          <div>
            <div class="text-xl font-medium text-dark dark:text-gray-100">Rincian Belanja</div>
            <p class="text-grey">Data Detail Rincian Belanja</p>
          </div>
          <button @click="openReport()" type="button" class="inline-block py-4 text-lg font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-red-600 rounded-full shadow-md px-7 hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg">
            Cetak
          </button>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full">

          <div class="grid gap-2 mb-5 sm:grid-cols-1 md:grid-cols-2 lg:gap-4">
            <div class="card !gap-y-10 min-h-[200px]">
              <div class="flex items-center justify-between">
                <div class="p-4">
                  <p class="text-grey text-[22px]">Rencana Belanja</p>
                  <div class="text-[36px] font-bold text-dark dark:text-gray-100 mt-[6px]">{{ budgetTotal | currency('Rp. ') }}</div>
                </div>
                <div class="py-4 pr-6">
                  <img src="/assets/svgs/dollar2.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="card !gap-y-10 min-h-[200px]">
              <div class="flex items-center justify-between">
                <div class="p-4">
                  <p class="text-grey text-[22px]">Realisasi Terserap</p>
                  <div class="text-[36px] font-bold text-dark dark:text-gray-100 mt-[6px]">{{ actualTotal | currency('Rp. ') }}</div>
                </div>
                <div class="py-4 pr-6">
                  <img src="/assets/svgs/dollar.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
            
            <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-[#fafaf9] rounded shadow-lg">
                <div class="flex-auto px-4 py-5">
                    <div class="h-full tab-content tab-space">
                            <div class="pb-2">
                                <p v-if="$fetchState.pending">Fetching data...</p>
                                <div class="relative overflow-x-auto">
                                    <p v-if="$fetchState.pending"><v-icon name="sync" spin></v-icon>...</p>

                                    <table class="w-full mt-5 text-sm text-left text-center text-gray-500 dark:text-gray-400">
                                        <thead class="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-4 py-3">
                                                    No
                                                </th>
                                                <th scope="col" class="px-4 py-3">
                                                    Belanja
                                                </th>
                                                <th scope="col" class="px-4 py-3">
                                                    Rincian
                                                </th>
                                                <th scope="col" class="px-4 py-3">
                                                    RAK
                                                </th>
                                                <th scope="col" class="px-4 py-3">
                                                    Selisih
                                                </th>
                                                <th scope="col" class="px-4 py-3">
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white dark:bg-slate-800 border-b dark:bg-gray-800 dark:border-gray-700" v-for="(cashBudget, index ) in resultQuery">
                                                <td class="px-5 py-4">{{ index+1 }}</td>
                                                <td class="px-5 py-4">{{ cashBudget.detail_type.name }}</td>
                                                <td class="px-5 py-4">{{ cashBudget.budget | currency('Rp. ') }}</td>
                                                <td class="px-5 py-4">{{ rakTotal[index] | currency('Rp. ') }}</td>
                                                <td class="px-5 py-4">{{ cashBudget.budget - rakTotal[index] | currency('Rp. ') }}</td>
                                                <td class="px-5 py-4">
                                                  <a href="#" v-on:click="openUpdate({id:cashBudget.id, detailType:cashBudget.detail_type.name, budget:cashBudget.budget, jan:cashBudget.jan, feb:cashBudget.feb, mar:cashBudget.mar, apr:cashBudget.apr, mei:cashBudget.mei, jun:cashBudget.jun, jul:cashBudget.jul, aug:cashBudget.aug, sep:cashBudget.sep, oct:cashBudget.oct, nov:cashBudget.nov, dec:cashBudget.dec})" class="px-3"><font-awesome-icon :icon="['fas', 'magnifying-glass']" bounce title="Edit Data Program" /></a>
                                                </td>
                                                <div v-if="viewModal" id="myModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto shadow-lg shadow-blue-500/50 ... outline-none focus:outline-none">
                                                  <div class="relative w-auto max-w-6xl mx-auto my-6">
                                                    <!--content-->
                                                    <div class="relative flex flex-col w-full bg-white dark:bg-slate-800 border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                                      <!--header-->
                                                      <div class="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                                                        <h5 class="text-xl font-semibold text-blue-500">
                                                          Detail Rencana Anggaran Kas (RAK)
                                                        </h5>
                                                        <button class="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black dark:text-white bg-transparent border-0 outline-none opacity-5 focus:outline-none" v-on:click="openUpdate()">
                                                          <span class="block w-6 h-6 text-2xl text-black dark:text-white bg-transparent outline-none opacity-5 focus:outline-none">
                                                            ×
                                                          </span>
                                                        </button>
                                                      </div>
                                                      <!--body-->
                                                      <div class="relative flex-auto p-6">
                                                        <h2 class="mb-3 font-bold text-left">Belanja {{ loadData.detailType }}</h2>
                                                        <table class="shadow-lg shadow-blue-200/50 ... w-full rounded-lg border-separate border-spacing-2 border border-slate-400 ...">
                                                          <tr>
                                                            <td class="p-3">
                                                              <h4 class="mb-2 font-semibold text-left">Anggaran</h4>
                                                              <input type="number" v-model="loadData.budget" id="budget" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readonly>
                                                            </td>
                                                            <td class="p-3">
                                                              <h4 class="mb-2 font-semibold text-left">Realisasi</h4>
                                                              <input type="number" v-model="actualData" id="actual" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readonly>
                                                            </td>
                                                            <td class="p-3">
                                                              <h4 class="mb-2 font-semibold text-left">Selisih</h4>
                                                              <input type="number" v-model="diffrenceData" id="diffrence" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readonly>
                                                            </td>
                                                          </tr>
                                                          <hr>
                                                          <tr>
                                                            <td class="p-3">
                                                              <h4 class="mb-2 font-semibold text-left">Januari</h4>
                                                              <input type="number" v-model="loadData.jan" id="jan" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            </td>
                                                            <td class="p-3">
                                                              <h4 class="mb-2 font-semibold text-left">Februari</h4>
                                                              <input type="number" v-model="loadData.feb" id="feb" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            </td>
                                                            <td class="p-3">
                                                              <h4 class="mb-2 font-semibold text-left">Maret</h4>
                                                              <input type="number" v-model="loadData.mar" id="mar" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td class="p-3">
                                                              <h4 class="mb-2 font-semibold text-left">April</h4>
                                                              <input type="number" v-model="loadData.apr" id="apr" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            </td>
                                                            <td class="p-3">
                                                              <h4 class="mb-2 font-semibold text-left">Mei</h4>
                                                              <input type="number" v-model="loadData.mei" id="mei" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            </td>
                                                            <td class="p-3">
                                                              <h4 class="mb-2 font-semibold text-left">Juni</h4>
                                                              <input type="number" v-model="loadData.jun" id="jun" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td class="p-3">
                                                              <h4 class="mb-2 font-semibold text-left">Juli</h4>
                                                              <input type="number" v-model="loadData.jul" id="jul" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            </td>
                                                            <td class="p-3">
                                                              <h4 class="mb-2 font-semibold text-left">Agustus</h4>
                                                              <input type="number" v-model="loadData.aug" id="aug" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            </td>
                                                            <td class="p-3">
                                                              <h4 class="mb-2 font-semibold text-left">September</h4>
                                                              <input type="number" v-model="loadData.sep" id="sep" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td class="p-3">
                                                              <h4 class="mb-2 font-semibold text-left">Oktober</h4>
                                                              <input type="number" v-model="loadData.oct" id="oct" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            </td>
                                                            <td class="p-3">
                                                              <h4 class="mb-2 font-semibold text-left">November</h4>
                                                              <input type="number" v-model="loadData.nov" id="nov" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            </td>
                                                            <td class="p-3">
                                                              <h4 class="mb-2 font-semibold text-left">Desember</h4>
                                                              <input type="number" v-model="loadData.dec" id="dec" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </div>
                                                      <!--footer-->
                                                      <div class="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                                                        <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" v-on:click="openUpdate()">
                                                          Close
                                                        </button>
                                                        <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" @click="updateData()">
                                                          Simpan
                                                        </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div v-if="viewModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        

                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    
          
    </section>
  </div>
</template>
<script>
export default {
    layout: 'dashboardSeketaris',
    middleware: ['auth', 'onlySecretary'],
    data() {
      return {
          activities: [],
          cashBudgets: [],
          searchQuery: null,
          loadData: {
            id: null,
            detailType: null,
            budget: null,
            jan: null,
            feb: null,
            mar: null,
            apr: null,
            mei: null,
            jun: null,
            jul: null,
            aug: null,
            sep: null,
            oct: null,
            nov: null,
            dec: null,
          },
          viewModal: false,
      }
    },
    fetch() {
      this.getActivities()
      this.getCashBudgets()
    },
    methods: {
      openReport() {
          this.$router.push({
              name: 'seyear-se-id-rak-slug-report',
              params: {
                  seyear: this.$route.params.seyear,
                  id: this.$route.params.id,
                  slug: this.searchQuery,
              },
          })
      },
      openUpdate: function(data){
        this.viewModal = !this.viewModal;
        this.loadData = data
      },
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
      getCashBudgets() {
        this.cashBudgets = this.$axios.get('/cashbudget', { 
            params: {
                limit: 100,
                with_detail_type: 1,
            }
        }) .then(({ data }) => {
                    this.cashBudgets = data.result.data
              })
      },
      updateData() {
        try {
            this.$axios.post('/cashbudget/update/'+ this.loadData.id, this.loadData)
                .then(response => {
                    this.getCashBudgets()
                })
            this.viewModal = false
        } catch (error) {
            console.log(error)
        }
      },
    },
    computed : {
        years () {
            return Array.from({length: 2030 - 2010}, (value, index) => 2011 + index)
        },
        resultQuery(){
            if(this.searchQuery){
              let ss = [];
            Object.entries(this.cashBudgets).forEach(([key, item]) => {
                ss.push(item);
            });
            return ss.filter((item)=>{
                let columns = item.activity_id;
                return columns == this.searchQuery
            })
            }else if (this.searchQuery == null || this.searchQuery == ''){
                return this.programs;
            }
        },
        rakTotal() {
          if (this.resultQuery) {
            return this.resultQuery.map(function(item){ 
            return Number(item.jan + item.feb + item.mar + item.apr + item.mei + item.jun + item.jul
            + item.aug + item.sep + item.oct + item.nov + item.dec);
            });
          }
        },
        budgetTotal() {
          if (this.resultQuery) {
            return this.resultQuery.reduce(function(total, item){ 
            return total + parseInt(item.budget) 
            }, 0);
          }
        },
        actualTotal() {
          if (this.resultQuery) {
            return this.resultQuery.reduce(function(total, item){ 
            return total + parseInt(item.jan + item.feb + item.mar + item.apr + item.mei + item.jun + item.jul
            + item.aug + item.sep + item.oct + item.nov + item.dec) 
            }, 0);
          }
        },
        actualData() {
          if (this.loadData) {
            return Number(this.loadData.jan + this.loadData.feb + this.loadData.mar + this.loadData.apr + this.loadData.mei + this.loadData.jun + this.loadData.jul + this.loadData.aug + this.loadData.sep + this.loadData.oct + this.loadData.nov + this.loadData.dec);
          }
        },
        diffrenceData() {
          if (this.loadData) {
            return Number(this.loadData.budget - this.actualData);
          }
        },
    },
};
</script>