<template>
    <div class="px-8" >
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
</template>
<script>
export default {
    middleware: ['auth'],
    data() {
        return {
            filterSemester: this.$route.params.par,
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
                        year: this.$route.params.seyear,
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
                        year: this.$route.params.seyear,
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
                        year: this.$route.params.seyear,
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
                        year: this.$route.params.seyear,
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
                        year: this.$route.params.seyear,
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
                        year: this.$route.params.seyear,
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
                        year: this.$route.params.seyear,
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
                        year: this.$route.params.seyear,
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
                        year: this.$route.params.seyear,
                    }
            }).then(({ data }) => {
                            this.total1 = data.result.data
                        })
        },
        getTotal2() {
            this.total2 = this.$axios.get('/expense', {
                    params: {
                        total2: 1,
                        year: this.$route.params.seyear,
                    }
            }).then(({ data }) => {
                            this.total2 = data.result.data
                        })
        },
        openReport() {
            this.$router.push({
                name: 'seyear-se-id-reports-pdf-par-report4',
                params: {
                    seyear: this.$route.params.seyear,
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
</script>