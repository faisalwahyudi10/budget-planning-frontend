<template>
    <div class="px-8" >
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
</template>
<script>
export default {
    middleware: ['auth', 'onlyEmployee'],
    data() {
        return {
            selectedYear1: '',
            selectedYear2: '',
            programs: [],
            total: [],
        }
    },
    mounted() {
        this.getProgram()
        this.getTotal()
    },
    methods: {
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
    },
    computed: {
        totalQuery() {
            if (!this.total) {
                return 0;
            }
            return this.total[0];
        }
    }
}
</script>