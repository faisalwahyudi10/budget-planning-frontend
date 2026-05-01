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
        <div class="text-[32px] font-semibold text-dark dark:text-gray-100">Realisasi Program {{ programs.name }}</div>
      </div>
    </section>

    <section class="pt-[50px]">
      <!-- Section Header -->
      <div class="mb-[30px]">
        
      </div>

      <div class="flex flex-wrap">
        <div class="w-full">
            <ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none">
                <li class="flex-auto mb-3 mr-2 text-center last:mr-0">
                <a class="block px-5 py-3 text-sm font-bold leading-normal uppercase rounded-full shadow-lg" v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-600 bg-white dark:bg-slate-800': openTab !== 1, 'text-white bg-gray-500': openTab === 1}">
                    Perencanaan Anggaran Program
                </a>
                </li>
            </ul>
            <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-[#fafaf9] rounded shadow-lg">
                <div class="flex-auto px-4 py-5">
                    <div class="h-full tab-content tab-space">
                        <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                            <div class="pt-8 pb-11 grid grid-cols-1 gap-[30px]">
                                <div class="px-8" >
                                   <div class="py-5 text-right">
                                     <NuxtLink :to="{ name: 'year-id-reports-pdf-report1' }" class="inline-block py-4 text-lg font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-red-600 rounded-full shadow-md px-7 hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg">Cetak</NuxtLink>
                                   </div>
                                  <div id="pdf" ref="content">
                                    <div class="p-4 -mx-3 text-lg font-bold tracking-wide text-center text-gray-700 uppercase border-4 border-gray-200 dark:border-slate-700">Perencanaan Anggaran Program {{ programs.name }}</div>
                                    <div class="flex flex-wrap -mx-3 border-4 border-gray-200 dark:border-slate-700">
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                        Bidang Urusan
                                      </div>
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/3 md:mb-0">
                                         : Perencanaan
                                      </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 border-4 border-gray-200 dark:border-slate-700">
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                        Program 
                                      </div>
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/3 md:mb-0">
                                         : Program {{ programs.name }}
                                      </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 border-4 border-gray-200 dark:border-slate-700">
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                        Tahun 
                                      </div>
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/3 md:mb-0">
                                         : {{ programs.date_program }}
                                      </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 border-4 border-gray-200 dark:border-slate-700">
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                        Dana Anggaran 
                                      </div>
                                      <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/3 md:mb-0">
                                         : {{ programs.budget | currency('Rp. ') }}
                                      </div>
                                    </div>
                                    <div class="p-2 -mx-3 text-base font-bold tracking-wide text-center text-gray-700 uppercase border-4 border-gray-200 dark:border-slate-700">Anggaran Kegiatan Program</div>
                                    <div v-for="(activity, index) in programs.activities">
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200 dark:border-slate-700">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Kegiatan 
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/3 md:mb-0">
                                                 : {{ activity.name }}
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200 dark:border-slate-700">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Organisasi
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/4 md:mb-0">
                                                 : Badan Perencanaan Pembangunan Daerah
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200 dark:border-slate-700">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Unit
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/4 md:mb-0">
                                                 : Badan Perencanaan Pembangunan Daerah
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200 dark:border-slate-700">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Lokasi
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/4 md:mb-0">
                                                 : Kab. Tanah Laut
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200 dark:border-slate-700">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Indikator
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/4 md:mb-0">
                                                 : {{ activity.indicator }}
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200 dark:border-slate-700">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Target
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/4 md:mb-0">
                                                 : {{ document[index] }} {{ activity.target }}
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200 dark:border-slate-700">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                                Presentase Target Rencana
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/4 md:mb-0">
                                                 : 100%
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200 dark:border-slate-700">
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
                                                            <tr class="bg-gray-100 border-b border-gray-200 dark:border-slate-700">
                                                                <th scope="row" colspan="2" class="px-6 py-3 text-center">
                                                                    Total
                                                                </th>
                                                                <th scope="row" colspan="2" class="px-6 py-3 text-center">
                                                                    {{ costTotal[index] | currency('Rp. ') }}
                                                                </th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200 dark:border-slate-700">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-1/4 md:mb-0">
                                               Rincian Belanja
                                            </div>
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-2/4 md:mb-0">
                                                 : 
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200 dark:border-slate-700">
                                            <div class="w-full px-3 py-2 mb-6 text-sm font-bold tracking-wide text-gray-700 uppercase md:w-full md:mb-0">
                                               <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                    <table class="border-collapse border border-slate-400 ... w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                        <thead class="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                                            <tr class="border-b border-slate-50 bg-slate-0">
                                                                <th scope="row" rowspan="2" class="border border-slate-300 ... px-3 py-4 text-center">
                                                                    Uraian
                                                                </th>
                                                                <th scope="row" colspan="3" class="border border-slate-300 ... px-3 py-4 text-center">
                                                                    Rincian Perhitungan
                                                                </th>
                                                                <th scope="row" class="border border-slate-300 ... px-3 py-4 text-center">
                                                                    Jumlah
                                                                </th>
                                                            </tr>
                                                            <tr class="border-b border-slate-50 bg-slate-0">
                                                                <th scope="row" class="border border-slate-300 ... px-3 py-4 text-center">
                                                                    Koefisien
                                                                </th>
                                                                <th scope="row" class="border border-slate-300 ... px-3 py-4 text-center">
                                                                    Satuan
                                                                </th>
                                                                <th scope="row" class="border border-slate-300 ... px-3 py-4 text-center">
                                                                    Harga
                                                                </th>
                                                                <th scope="row" class="border border-slate-300 ... px-3 py-4 text-center">
                                                                    (Rp)
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="normal-case border-b bg-slate-0 border-slate-50" v-for="(expense, index) in activity.expenses">
                                                                <th scope="row" class="border border-slate-300 ... px-6 py-3 text-left">
                                                                    {{ expense.name }}
                                                                </th>
                                                                <th scope="row" class="border border-slate-300 ... px-6 py-3 text-left">
                                                                    {{ expense.amount }} {{ expense.unit_type }}
                                                                </th>
                                                                <th scope="row" class="border border-slate-300 ... px-6 py-3 text-left">
                                                                    {{ expense.unit_type }}
                                                                </th>
                                                                <th scope="row" class="border border-slate-300 ... px-6 py-3 text-left">
                                                                    {{ expense.cost | currency('Rp. ') }}
                                                                </th>
                                                                <th scope="row" class="border border-slate-300 ... px-6 py-3 text-left">
                                                                    {{ expense.cost * expense.amount | currency('Rp. ') }}
                                                                </th>
                                                            </tr>
                                                            <tr class="normal-case bg-gray-100 border-b border-gray-400">
                                                                <th scope="row" class="border border-slate-300 ... px-6 py-3 text-left">
                                                                    Total
                                                                </th>
                                                                <th scope="row" colspan="4" class="text-center border border-slate-300 ... px-6 py-3 text-left">
                                                                    {{ total[index] | currency('Rp. ') }}
                                                                </th>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 border-4 border-gray-200 dark:border-slate-700">
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
            openTab: 1,
            programs: [],
            activities: [],
        }
    },
    mounted() {
        this.getActivity()
        this.getProgram()
    },
    methods: {
        generatePDF(){
            html2pdf(document.getElementById("pdf"), {
				margin: 1,
  			    filename: "Rencana-Anggaran.pdf",
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
        getProgram() {
            this.programs = this.$axios.get('/program', {
                    params: {
                        id: this.$route.params.id,
                        with_expenses1: 1,
                    }
            }) .then(({ data }) => {
                            this.programs = data.result
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
        document(){
            let ss = [];
            Object.entries(this.activities).forEach(([key, item]) => {
                ss.push(item);
            });
            return ss.map((item) => {
                return Number(item.document_plan_tw1 + item.document_plan_tw2 + item.document_plan_tw3 + item.document_plan_tw4);
            });
        },
    }
}
</script>

<style>
#pdf {
  margin-top: 1px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 1px;
}
</style>