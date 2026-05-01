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
        <div class="text-[32px] font-semibold text-dark">Realisasi Program {{ programs3.name }}</div>
      </div>
    </section>

    <section class="pt-[50px]">
      <!-- Section Header -->
      <div class="mb-[30px]">
        
      </div>

      <div class="flex flex-wrap">
        <div class="w-full">
            <ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none">
                <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                <a class="block px-5 py-3 text-sm font-bold leading-normal uppercase rounded-full shadow-lg" v-on:click="toggleTabs(3)" v-bind:class="{'text-gray-600 bg-white': openTab !== 3, 'text-white bg-gray-500': openTab === 3}">
                    Perbandingan Rencana dan Realisasi Anggaran
                </a>
                </li>
            </ul>
            <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-[#fafaf9] rounded shadow-lg">
                <div class="flex-auto px-4 py-5">
                    <div class="h-full tab-content tab-space">

                        <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                            <div class="pt-8 pb-11 grid grid-cols-1 gap-[30px]">
                                <div class="px-8" >
                                   <div class="py-5 text-right">
                                     <NuxtLink :to="{ name: 'year-id-reports-pdf-report3' }" class="inline-block py-4 text-lg font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-red-600 rounded-full shadow-md px-7 hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg">Cetak</NuxtLink>
                                   </div>
                                  <div id="pdf3" ref="content3">
                                    <div class="p-4 -mx-3 text-lg font-bold tracking-wide text-center text-gray-700 uppercase border-4 border-gray-200">Rencana dan Realisasi Anggaran Program {{ programs3.name }}</div>
                                    <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                        Bidang Urusan
                                      </div>
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/3 md:mb-0">
                                         : Perbandingan Perencanaan dan Realisasi
                                      </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                        Program 
                                      </div>
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/3 md:mb-0">
                                         : Program {{ programs3.name }}
                                      </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                        Tahun 
                                      </div>
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/3 md:mb-0">
                                         : {{ programs3.date_program }}
                                      </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                        Dana Anggaran 
                                      </div>
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/3 md:mb-0">
                                         : {{ programs3.budget | currency('Rp. ') }}
                                      </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                        Realisasi Anggaran 
                                      </div>
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/3 md:mb-0">
                                         : {{ programs3.realized | currency('Rp. ') }}
                                      </div>
                                    </div> 
                                    <div class="p-2 -mx-3 text-base font-bold tracking-wide text-center text-gray-700 uppercase border-4 border-gray-200">Anggaran Kegiatan Program</div>
                                    <div v-for="(activity, index) in programs3.activities">
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Kegiatan 
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/3 md:mb-0">
                                                 : {{ activity.name }}
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Organisasi
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/4 md:mb-0">
                                                 : Badan Perencanaan Pembangunan Daerah
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Unit
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/4 md:mb-0">
                                                 : Badan Perencanaan Pembangunan Daerah
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Lokasi
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/4 md:mb-0">
                                                 : Kab. Tanah Laut
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Indikator
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/4 md:mb-0">
                                                 : {{ activity.indicator }}
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Rencana Dokumen
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/4 md:mb-0">
                                                 : {{ document[index] }} {{ activity.target }}
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Realisasi Dokumen
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/4 md:mb-0">
                                                 : {{ document2[index] }} {{ activity.target }}
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Presentase Capaian Target
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/4 md:mb-0">
                                                 : {{ document2[index] / document[index] * 100 + ' %' }}
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Dana yang dibutuhkan 
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-px md:mb-0">
                                                :
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-[100%] md:mb-0">
                                                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                        <thead class="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                                            <tr class="border-b border-slate-50 bg-slate-0">
                                                                <th scope="row" class="px-3 py-4 text-center">
                                                                    Desc
                                                                </th>
                                                                <th scope="row" class="px-3 py-4 text-center">
                                                                    Total
                                                                </th>
                                                                <th scope="row" class="px-3 py-4 text-center">
                                                                    Tw 1
                                                                </th>
                                                                <th scope="row" class="px-3 py-4 text-center">
                                                                    Tw 2
                                                                </th>
                                                                <th scope="row" class="px-3 py-4 text-center">
                                                                    Tw 3
                                                                </th>
                                                                <th scope="row" class="px-3 py-4 text-center">
                                                                    Tw 4
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="border-b bg-slate-0 border-slate-50">
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    Perencanaan
                                                                </th>
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    {{ costTotal[index] | currency('Rp. ') }}
                                                                </th>
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    {{ activity.activity_budget_tw1 | currency('Rp. ') }}
                                                                </th>
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    {{ activity.activity_budget_tw2 | currency('Rp. ') }}
                                                                </th>
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    {{ activity.activity_budget_tw3 | currency('Rp. ') }}
                                                                </th>
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    {{ activity.activity_budget_tw4 | currency('Rp. ') }}
                                                                </th>
                                                            </tr>
                                                            <tr class="border-b bg-slate-0 border-slate-50">
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    Realisasi
                                                                </th>
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    {{ costTotal2[index] | currency('Rp. ') }}
                                                                </th>
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    {{ activity.activity_realized_tw1 | currency('Rp. ') }}
                                                                </th>
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    {{ activity.activity_realized_tw2 | currency('Rp. ') }}
                                                                </th>
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    {{ activity.activity_realized_tw3 | currency('Rp. ') }}
                                                                </th>
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    {{ activity.activity_realized_tw4 | currency('Rp. ') }}
                                                                </th>
                                                            </tr>
                                                            <tr class="bg-gray-100 border-b border-gray-200">
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    Sisa
                                                                </th>
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    {{ costTotal[index] - costTotal2[index] | currency('Rp. ') }}
                                                                </th>
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    {{ activity.activity_budget_tw1 - activity.activity_realized_tw1 | currency('Rp. ') }}
                                                                </th>
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    {{ activity.activity_budget_tw2 - activity.activity_realized_tw2 | currency('Rp. ') }}
                                                                </th>
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    {{ activity.activity_budget_tw3 - activity.activity_realized_tw3 | currency('Rp. ') }}
                                                                </th>
                                                                <th scope="row" class="px-6 py-3 text-center">
                                                                    {{ activity.activity_budget_tw4 - activity.activity_realized_tw4 | currency('Rp. ') }}
                                                                </th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                               Presentase Anggaran Target
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/4 md:mb-0">
                                                 : {{ costTotal2[index] / costTotal[index] * 100 + ' %' }}
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                               
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                    
                                    
                                </div>
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
import html2pdf from "html2pdf.js";
export default {
    layout: 'dashboardPegawai',
    middleware: ['auth', 'onlyEmployee'],
    data() {
        return {
            openTab: 3,
            activities: [],
            activities2: [],
            programs3: [],
        }
    },
    mounted() {
        this.getActivity()
        this.getActivity2()
        this.getProgram3()
    },
    methods: {
        generatePDF3(){
            html2pdf(document.getElementById("pdf3"), {
				margin: 1,
  			    filename: "Perbandingan-Anggaran.pdf",
                jsPDF: { format: 'a4', orientation: 'landscape' }
			});
            
        },
        toggleTabs: function(tabNumber){
            this.openTab = tabNumber
        },
        getActivity() {
            this.activities = this.$axios.get('/activity', {
                    params: {
                        program_id: this.$route.params.id,
                        with_expense1: 1,
                    }
            }) .then(({ data }) => {
                            this.activities = data.result.data
                        })
        },
        getActivity2() {
            this.activities2 = this.$axios.get('/activity', {
                    params: {
                        program_id: this.$route.params.id,
                        with_expense2: 1,
                        not_null: 1,
                    }
            }) .then(({ data }) => {
                            this.activities2 = data.result.data
                        })
        },
        getProgram3() {
            this.programs3 = this.$axios.get('/program', {
                    params: {
                        id: this.$route.params.id,
                        with_expenses3: 1,
                    }
            }) .then(({ data }) => {
                            this.programs3 = data.result
                        })
        },
    },
    computed: {
        costTotal() {
            if (this.activities) {
                let ss = [];
                Object.entries(this.activities).forEach(([key, item]) => {
                    ss.push(item);
                });
                return ss.map((item) => {
                    return Number(item.activity_budget_tw1 + item.activity_budget_tw2 + item.activity_budget_tw3 + item.activity_budget_tw4);
                });
            }
          
        },
        costTotal2() {
            if (this.activities2) {
                let ss = [];
                Object.entries(this.activities2).forEach(([key, item]) => {
                    ss.push(item);
                });
                return ss.map((item) => {
                    return Number(item.activity_realized_tw1 + item.activity_realized_tw2 + item.activity_realized_tw3 + item.activity_realized_tw4);
                });
            }
        },
        total(){
            let ss = [];
            Object.entries(this.activities).forEach(([key, item]) => {
                ss.push(item.expenses);
            });
            return ss.map((item) => {
                return item.reduce((arr, val) => {
                    return arr + Number(val.cost * val.amount)
                },0);
            });
        },
        total2(){
            let ss = [];
            Object.entries(this.activities2).forEach(([key, item]) => {
                ss.push(item.expenses);
            });
            return ss.map((item) => {
                return item.reduce((arr, val) => {
                    return arr + Number(val.cost * val.amount)
                },0);
            });
        },
        document(){
            let ss = [];
            Object.entries(this.activities).forEach(([key, item]) => {
                ss.push(item);
            });
            return ss.map((item) => {
                return Number(item.document_plan_tw1 + item.document_plan_tw2 + item.document_plan_tw3 + item.document_plan_tw4);
            });
        },
        document2(){
            let ss = [];
            Object.entries(this.activities2).forEach(([key, item]) => {
                ss.push(item);
            });
            return ss.map((item) => {
                return Number(item.document_realized_tw1 + item.document_realized_tw2 + item.document_realized_tw3 + item.document_realized_tw4);
            });
        },
    }
}
</script>

<style>
#pdf3 {
  margin-top: 1px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 1px;
}
</style>