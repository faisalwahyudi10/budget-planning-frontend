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
        <div class="text-[32px] font-semibold text-dark">Laporan Program {{ program.name }} Persemester</div>
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
                <a class="block px-5 py-3 text-sm font-bold leading-normal uppercase rounded-full shadow-lg" v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-600 bg-white': openTab !== 1, 'text-white bg-gray-500': openTab === 1}">
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
                                   <div class="py-5 grid grid-cols-1 gap-[20px] text-right">
                                        <div class="flex items-center w-full mb-5">   
                                            <label for="simple-search" class="sr-only">Search</label>
                                            <div class="relative w-full">
                                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                                </div>
                                                <select v-model="filterSemester" id="simple-search" class="block w-full p-3 pl-10 text-lg text-gray-900 bg-white border border-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500 h-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                    <option selected disabled value="">-- Pilih Semester --</option>
                                                    <option value="1">Semester 1</option>
                                                    <option value="2">Semester 2</option>
                                                </select>
                                            </div>
                                        </div>
                                   </div>
                                   <button @click="openReport()" type="button" class="inline-block py-4 text-lg font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-red-600 rounded-full shadow-md px-7 hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg">Cetak</button>
                                   <div id="pdf4" ref="content4">
                                        <div class="p-2 -mx-3 text-lg font-bold tracking-wide text-center text-gray-700 uppercase">LAPORAN REALISASI ANGGARAN BELANJA DAERAH</div>
                                        <div class="p-2 -mx-3 text-lg font-bold tracking-wide text-center text-gray-700 uppercase">Program {{ program.name }} <br> <template v-if="filterSemester ==  1">Periode Anggaran Januari - Juni</template> <template v-if="filterSemester ==  2">Periode Anggaran Juli - Desember</template> {{ program.date_program }}</div>
                                        <div class="p-2 -mx-3 text-sm font-bold tracking-wide text-center text-gray-700 uppercase">{{  }}</div>
                                        <div class="mt-6 bg-white"> 
                                            <table class="w-full border border-collapse border-black table-auto">
                                            <thead>
                                            <tr>
                                                <th class="p-2 border-2 border-black">No</th>
                                                <th class="p-2 border-2 border-black">Uraian</th>
                                                <th class="p-2 border-2 border-black">Anggaran {{ program.date_program }}</th>
                                                <th class="p-2 border-2 border-black">Realisai {{ program.date_program }}</th>
                                                <th class="p-2 border-2 border-black">% {{ program.date_program }}</th>
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
                                            <tr>
                                                <th class="p-2 text-left border-2 border-black"></th>
                                                <th class="p-2 text-left border-2 border-black">
                                                    Belanja Daerah
                                                </th>
                                                <th v-if="total" class="p-2 text-right border-2 border-black">
                                                    {{ total.budget | currency('Rp. ') }}
                                                </th>
                                                <th v-else class="p-2 text-right border-2 border-black">
                                                    Rp. 0.00
                                                </th>
                                                <th v-if="total" class="p-2 text-right border-2 border-black">
                                                    {{ total.actual | currency('Rp. ') }}
                                                </th>
                                                <th v-else class="p-2 text-right border-2 border-black">
                                                    Rp. 0.00
                                                </th>
                                                <th class="p-2 text-right border-2 border-black">
                                                    {{ total ? total.percent + ' %' : '0 %' }}
                                                </th>
                                            </tr>
                                            <tr>
                                                <th class="p-2 text-left border-2 border-black"></th>
                                                <th class="p-2 text-left border-2 border-black">
                                                    Belanja Operasi
                                                </th>
                                                <th v-if="totalQuery" class="p-2 text-right border-2 border-black">
                                                    {{ totalQuery.budget | currency('Rp. ') }}
                                                </th>
                                                <th v-else class="p-2 text-right border-2 border-black">
                                                    Rp. 0.00
                                                </th>
                                                <th v-if="totalQuery" class="p-2 text-right border-2 border-black">
                                                    {{ totalQuery.actual | currency('Rp. ') }}
                                                </th>
                                                <th v-else class="p-2 text-right border-2 border-black">
                                                    Rp. 0.00
                                                </th>
                                                <th class="p-2 text-right border-2 border-black">
                                                    {{ totalQuery ? totalQuery.percent + ' %' : '0 %' }}
                                                </th>
                                            </tr>
                                            <tr v-for="(cashOperasi, index ) in resultQuery">
                                                <td class="p-2 text-center border-2 border-black">{{ '#' }}</td>
                                                <td class="p-2 text-left border-2 border-black">
                                                    Belanja {{ cashOperasi.detail }}
                                                </td>
                                                <td class="p-2 text-right border-2 border-black">
                                                    {{ cashOperasi.budget | currency('Rp. ')}}
                                                </td>
                                                <td class="p-2 text-right border-2 border-black">
                                                    {{ cashOperasi.actual | currency('Rp. ')}}
                                                </td>
                                                <td class="p-2 text-right border-2 border-black">
                                                    {{ cashOperasi.percent }} %
                                                </td>
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
                                            <tr>
                                                <th class="p-2 text-left border-2 border-black"></th>
                                                <th class="p-2 text-left border-2 border-black">
                                                    Belanja Modal
                                                </th>
                                                <th v-if="totalQuery2" class="p-2 text-right border-2 border-black">
                                                    {{ totalQuery2.budget | currency('Rp. ') }}
                                                </th>
                                                <th v-else class="p-2 text-right border-2 border-black">
                                                    Rp. 0.00
                                                </th>
                                                <th v-if="totalQuery2" class="p-2 text-right border-2 border-black">
                                                    {{ totalQuery2.actual | currency('Rp. ') }}
                                                </th>
                                                <th v-else class="p-2 text-right border-2 border-black">
                                                    Rp. 0.00
                                                </th>
                                                <th class="p-2 text-right border-2 border-black">
                                                    {{ totalQuery2 ? totalQuery2.percent + ' %' : '0 %' }}
                                                </th>
                                            </tr>
                                            <tr v-for="(cashModal, index ) in resultQuery2">
                                                <td class="p-2 text-center border-2 border-black">{{ '#' }}</td>
                                                <td class="p-2 text-left border-2 border-black">
                                                    Belanja {{ cashModal.detail }}
                                                </td>
                                                <td class="p-2 text-right border-2 border-black">
                                                    {{ cashModal.budget | currency('Rp. ') }}
                                                </td>
                                                <td class="p-2 text-right border-2 border-black">
                                                    {{ cashModal.budget | currency('Rp. ') }}
                                                </td>
                                                <td class="p-2 text-right border-2 border-black">
                                                    {{ cashModal.percent }}
                                                </td>
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
                                            <tr>
                                                <th class="p-2 text-left border-2 border-black"></th>
                                                <th class="p-2 text-left border-2 border-black">
                                                    Jumlah Belanja
                                                </th>
                                                <th v-if="total" class="p-2 text-right border-2 border-black">
                                                    {{ total.budget | currency('Rp. ') }}
                                                </th>
                                                <th v-else class="p-2 text-right border-2 border-black">
                                                    Rp. 0.00
                                                </th>
                                                <th v-if="total" class="p-2 text-right border-2 border-black">
                                                    {{ total.actual | currency('Rp. ') }}
                                                </th>
                                                <th v-else class="p-2 text-right border-2 border-black">
                                                    Rp. 0.00
                                                </th>
                                                <th class="p-2 text-right border-2 border-black">
                                                    {{ total ? total.percent + ' %' : '0 %' }}
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
    layout: 'dashboardPegawai',
    middleware: ['auth', 'onlyEmployee'],
    data() {
        return {
            filterSemester: null,
            openTab: 1,
            program: [],
            cashOperasi1: [],
            cashOperasi2: [],
            cashModal1: [],
            cashModal2: [],
            totalOperasi1: [],
            totalOperasi2: [],
            totalModal1: [],
            totalModal2: [],
            total1: [],
            total2: [],
        }
    },
    mounted() {
        this.getProgram()
        this.getCashBudgetOperasi1()
        this.getCashBudgetOperasi2()
        this.getCashBudgetModal1()
        this.getCashBudgetModal2()
        this.getTotalOperasi1()
        this.getTotalOperasi2()
        this.getTotalModal1()
        this.getTotalModal2()
        this.getTotal1()
        this.getTotal2()
    },
    methods: {
        toggleTabs: function(tabNumber){
            this.openTab = tabNumber
        },
        getProgram() {
            this.program = this.$axios.get('/program', {
                    params: {
                        id: this.$route.params.id,
                    }
            }) .then(({ data }) => {
                            this.program = data.result
                        })
        },
        getCashBudgetOperasi1() {
            this.cashOperasi1 = this.$axios.get('/expense', {
                    params: {
                        with_semester1: 1,
                        year: this.$route.params.year,
                        tipe: 'Operasi',
                    }
            }).then(({ data }) => {
                            this.cashOperasi1 = data.result.data
                        })
        },
        getCashBudgetOperasi2() {
            this.cashOperasi2 = this.$axios.get('/expense', {
                    params: {
                        with_semester2: 1,
                        year: this.$route.params.year,
                        tipe: 'Operasi',
                    }
            }).then(({ data }) => {
                            this.cashOperasi2 = data.result.data
                        })
        },
        getCashBudgetModal1() {
            this.cashModal1 = this.$axios.get('/expense', {
                    params: {
                        with_semester1: 1,
                        year: this.$route.params.year,
                        tipe: 'Modal',
                    }
            }).then(({ data }) => {
                            this.cashModal1 = data.result.data
                        })
        },
        getCashBudgetModal2() {
            this.cashModal2 = this.$axios.get('/expense', {
                    params: {
                        with_semester2: 1,
                        year: this.$route.params.year,
                        tipe: 'Modal',
                    }
            }).then(({ data }) => {
                            this.cashModal2 = data.result.data
                        })
        },
        getTotalOperasi1() {
            this.totalOperasi1 = this.$axios.get('/expense', {
                    params: {
                        total_semester1: 1,
                        year: this.$route.params.year,
                        tipe: 'Operasi',
                    }
            }).then(({ data }) => {
                            this.totalOperasi1 = data.result.data
                        })
        },
        getTotalOperasi2() {
            this.totalOperasi2 = this.$axios.get('/expense', {
                    params: {
                        total_semester2: 1,
                        year: this.$route.params.year,
                        tipe: 'Operasi',
                    }
            }).then(({ data }) => {
                            this.totalOperasi2 = data.result.data
                        })
        },
        getTotalModal1() {
            this.totalModal1 = this.$axios.get('/expense', {
                    params: {
                        total_semester1: 1,
                        year: this.$route.params.year,
                        tipe: 'Modal',
                    }
            }).then(({ data }) => {
                            this.totalModal1 = data.result.data
                        })
        },
        getTotalModal2() {
            this.totalModal2 = this.$axios.get('/expense', {
                    params: {
                        total_semester2: 1,
                        year: this.$route.params.year,
                        tipe: 'Modal',
                    }
            }).then(({ data }) => {
                            this.totalModal2 = data.result.data
                        })
        },
        getTotal1() {
            this.total1 = this.$axios.get('/expense', {
                    params: {
                        total1: 1,
                        year: this.$route.params.year,
                    }
            }).then(({ data }) => {
                            this.total1 = data.result.data
                        })
        },
        getTotal2() {
            this.total2 = this.$axios.get('/expense', {
                    params: {
                        total2: 1,
                        year: this.$route.params.year,
                    }
            }).then(({ data }) => {
                            this.total2 = data.result.data
                        })
        },
        openReport() {
            this.$router.push({
                name: 'year-id-reports-pdf-par-report4',
                params: {
                    year: this.$route.params.year,
                    id: this.$route.params.id,
                    par: this.filterSemester,
                },
            })
        }
    },
    computed: {
        resultQuery() {
            if (this.filterSemester == 1) {
                return this.cashOperasi1;
            }
            if (this.filterSemester == 2) {
                return this.cashOperasi2;
            }
        },
        resultQuery2() {
            if (this.filterSemester == 1) {
                return this.cashModal1;
            }
            if (this.filterSemester == 2) {
                return this.cashModal2;
            }
        },
        totalQuery() {
            if (this.filterSemester == 1) {
                if (!this.totalOperasi1) {
                    return 0;
                }
                return this.totalOperasi1[0];
            }
            if (this.filterSemester == 2) {
                if (!this.totalOperasi2) {
                    return 0;
                }
                return this.totalOperasi2[0];
            }
        },
        totalQuery2() {
            if (this.filterSemester == 1) {
                if (!this.totalModal1) {
                    return 0;
                }
                return this.totalModal1[0];
            }
            if (this.filterSemester == 2) {
                if (!this.totalModal2) {
                    return 0;
                }
                return this.totalModal2[0];
            }
        },
        total() {
            if (this.filterSemester == 1) {
                if (!this.total1) {
                    return 0;
                }
                return this.total1[0];
            }
            if (this.filterSemester == 2) {
                if (!this.total2) {
                    return 0;
                }
                return this.total2[0];
            }
        }
    }
}
</script>