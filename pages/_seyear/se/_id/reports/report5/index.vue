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
        <div class="text-[32px] font-semibold text-dark dark:text-gray-100">Laporan Program Pertahun</div>
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
                    Realisasi Anggaran Program Persemester
                </a>
                </li>
            </ul>
            <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-[#fafaf9] rounded shadow-lg">
                <div class="flex-auto px-4 py-5">
                    <div class="h-full tab-content tab-space">

                        <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                            <div class="pt-8 pb-11 grid grid-cols-1 gap-[30px]">
                                <div class="px-8" >
                                    <div class="py-5 grid grid-cols-2 gap-[20px] text-right">
                                        <div class="flex items-center w-full mb-5">   
                                            <label for="simple-search" class="sr-only">Search</label>
                                            <div class="relative w-full">
                                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                                </div>
                                                <select v-model="selectedYear1" id="simple-search" class="block w-full p-3 pl-10 text-lg text-gray-900 bg-white dark:bg-slate-800 border border-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500 h-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option selected disabled value="">-- Pilih Tahun Awal --</option>
                                                    <option v-for="year in years" :value="year">{{ year }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="flex items-center w-full mb-5">
                                            <div class="mr-2 text-lg font-bold text-center">s/d</div>
                                            <label for="simple-search" class="sr-only">Search</label>
                                            <div class="relative w-full">
                                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                                </div>
                                                <select v-model="selectedYear2" id="simple-search" class="block w-full p-3 pl-10 text-lg text-gray-900 bg-white dark:bg-slate-800 border border-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500 h-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option selected disabled value="">-- Pilih Tahun Akhir --</option>
                                                    <option v-for="year in years" :value="year">{{ year }}</option>
                                                </select>
                                            </div>
                                        </div>
                                   </div>
                                   <button @click="openReport()" type="button" class="inline-block py-4 text-lg font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-red-600 rounded-full shadow-md px-7 hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg">Cetak</button>
                                   <div id="pdf4" ref="content4">
                                        <div class="p-2 -mx-3 text-lg font-bold tracking-wide text-center text-gray-700 uppercase">LAPORAN REALISASI ANGGARAN BELANJA DAERAH</div>
                                        <div class="p-2 -mx-3 text-lg font-bold tracking-wide text-center text-gray-700 uppercase">Program Seluruh Tahun Anggaran</div>
                                        <div class="p-2 -mx-3 text-sm font-bold tracking-wide text-center text-gray-700 uppercase"></div>
                                        <div class="mt-6 bg-white dark:bg-slate-800"> 
                                            <table class="w-full border border-collapse border-black table-auto">
                                            <thead>
                                            <tr>
                                                <th class="p-2 border-2 border-black">No</th>
                                                <th class="p-2 border-2 border-black">Uraian</th>
                                                <th class="p-2 border-2 border-black">Anggaran</th>
                                                <th class="p-2 border-2 border-black">Realisai</th>
                                                <th class="p-2 border-2 border-black">%</th>
                                            </tr>
                                            <tr>
                                                <th class="p-2 text-xs border-2 border-black">1</th>
                                                <th class="p-2 text-xs border-2 border-black">2</th>
                                                <th class="p-2 text-xs border-2 border-black">3</th>
                                                <th class="p-2 text-xs border-2 border-black">4</th>
                                                <th class="p-2 text-xs border-2 border-black">5 = (4 / 3) * 100</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                <template v-for="(program, index) in programs" >
                                                    <tr>
                                                        <th class="p-2 text-center border-2 border-black"></th>
                                                        <th class="p-2 text-left border-2 border-black">
                                                            {{ 'Tahun '+program.date_program }}
                                                        </th>
                                                        <th class="p-2 text-right border-2 border-black">
                                                            {{ program.sum_budget | currency('Rp. ') }}
                                                        </th>
                                                        <th class="p-2 text-right border-2 border-black">
                                                            {{ program.sum_realized | currency('Rp. ') }}
                                                        </th>
                                                        <th class="p-2 text-right border-2 border-black">
                                                            {{ program.percent+' %' }}
                                                        </th>
                                                    </tr>
                                                    <template v-for="(child, index) in program.child_programs">
                                                        <tr>
                                                            <td class="p-2 text-center border-2 border-black">#</td>
                                                            <td class="p-2 text-left border-2 border-black">
                                                                {{ child.name }}
                                                            </td>
                                                            <td class="p-2 text-right border-2 border-black">
                                                                {{ child.budget | currency('Rp. ') }}
                                                            </td>
                                                            <td class="p-2 text-right border-2 border-black">
                                                                {{ child.realized | currency('Rp. ') }}
                                                            </td>
                                                            <td class="p-2 text-right border-2 border-black">
                                                                {{ child.percent+' %' }}
                                                            </td>
                                                        </tr>
                                                    </template>
                                                    <tr>
                                                        <td class="p-2 text-center border-2 border-black"></td>
                                                        <td class="p-2 text-left border-2 border-black"></td>
                                                        <td class="p-2 text-right border-2 border-black"></td>
                                                        <td class="p-2 text-right border-2 border-black"></td>
                                                        <td class="p-2 text-right border-2 border-black"></td>
                                                    </tr>
                                                </template>
                                            
                                            
                                            
                                            <tr>
                                                <td class="px-3 py-5 text-left border-2 border-black"></td>
                                                <td class="px-3 py-5 text-left border-2 border-black">
                                                    
                                                </td>
                                                <td class="px-3 py-5 text-left border-2 border-black">
                                                    
                                                </td>
                                                <td class="px-3 py-5 text-left border-2 border-black">
                                                    
                                                </td>
                                                <td class="px-3 py-5 text-left border-2 border-black">
                                                    
                                                </td>
                                            </tr>
                                            <tr>
                                                <th class="p-2 text-left border-2 border-black"></th>
                                                <th class="p-2 text-left border-2 border-black">
                                                    Total
                                                </th>
                                                <th v-if="totalQuery" class="p-2 text-right border-2 border-black">
                                                    {{ totalQuery.sum_budget | currency('Rp. ') }}
                                                </th>
                                                <th v-else class="p-2 text-right border-2 border-black">
                                                    Rp. 0.00
                                                </th>
                                                <th v-if="totalQuery" class="p-2 text-right border-2 border-black">
                                                    {{ totalQuery.sum_realized | currency('Rp. ') }}
                                                </th>
                                                <th v-else class="p-2 text-right border-2 border-black">
                                                    Rp. 0.00
                                                </th>
                                                <th class="p-2 text-right border-2 border-black">
                                                    {{ totalQuery ? totalQuery.percent +' %' : '0.00 %' }}
                                                </th>
                                            </tr>
                                            <tr>
                                                <td class="px-3 py-5 text-left border-2 border-black"></td>
                                                <td class="px-3 py-5 text-left border-2 border-black">
                                                    
                                                </td>
                                                <td class="px-3 py-5 text-left border-2 border-black">
                                                    
                                                </td>
                                                <td class="px-3 py-5 text-left border-2 border-black">
                                                    
                                                </td>
                                                <td class="px-3 py-5 text-left border-2 border-black">
                                                    
                                                </td>
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
            selectedYear1: '',
            selectedYear2: '',
            openTab: 1,
            programs: [],
            total: [],
        }
    },
    mounted() {
        this.getProgram()
        this.getTotal()
    },
    methods: {
        toggleTabs: function(tabNumber){
            this.openTab = tabNumber
        },
        getProgram() {
            this.programs = this.$axios.get('/program', {
                    params: {
                        with_sum_program: 1,
                    }
            }) .then(({ data }) => {
                            this.programs = data.result.data
                        })
        },
        getTotal() {
            this.total = this.$axios.get('/program', {
                    params: {
                        with_total_sum_program: 1,
                    }
            }) .then(({ data }) => {
                            this.total = data.result.data
                        })
        },
        openReport() {
            this.$router.push({
                name: 'seyear-se-id-reports-pdf-report5',
                // params: {

                // },
            })
        }
    },
    computed: {
        years () {
          const year1 = new Date().getFullYear()
          const year2 = year1 + 5
            return Array.from({length: year2 - 2003}, (value, index) => 2003+1 + index)
        },
        totalQuery() {
            if (!this.total) {
                return 0;
            }
            return this.total[0];
        }
    }
}
</script>