<template>
    <div class="px-8" >
        <div class="mb-4">
            <div class="p-2 -mx-3 text-lg font-bold tracking-wide text-center text-gray-700 uppercase border-4 border-gray-200 dark:border-slate-700">RENCANA ANGGARAN KAS <br> SATUAN ANGGARAN KERJA PERANGKAT DAERAH</div>
            <div class="p-2 -mx-3 text-lg font-semibold tracking-wide text-center text-gray-700 border-4 border-gray-200 dark:border-slate-700">Pemerintah Kab. Tanah Laut Tahun Anggaran {{ program.date_program }}</div>
        </div>
        <div class="mb-2">
            <table>
                <tr>
                    <td class="pb-1">Urusan</td>
                    <td class="pb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td class="pb-1 uppercase">Unsur Penunjang Urusan Pemerintah</td>
                </tr>
                <tr>
                    <td class="pb-1">Bidang</td>
                    <td class="pb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td class="pb-1">REALISASI</td>
                </tr>
                <tr>
                    <td class="pb-1">Unit Organisasi</td>
                    <td class="pb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td class="pb-1">Badan Perencanaan Pembangunan Daerah</td>
                </tr>
                <tr>
                    <td class="pb-1">Program</td>
                    <td class="pb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td class="pb-1 uppercase">Program {{ program.name }}</td>
                </tr>
                <tr>
                    <td class="pb-1">Kegiatan</td>
                    <td class="pb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td class="pb-1">{{ activities.name }}</td>
                </tr>
                <tr>
                    <td class="pb-1">Nilai Anggaran</td>
                    <td class="pb-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td class="pb-1">{{ budgetTotal | currency('Rp. ') }}</td>
                </tr>
            </table>
        </div>
        <div>
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
                            Januari
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Februari
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Maret
                        </th>
                        <th scope="col" class="px-4 py-3">
                            April
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Mei
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Juni
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Juli
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Agustus
                        </th>
                        <th scope="col" class="px-4 py-3">
                            September
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Oktober
                        </th>
                        <th scope="col" class="px-4 py-3">
                            November
                        </th>
                        <th scope="col" class="px-4 py-3">
                            Desember
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white dark:bg-slate-800 border-b dark:bg-gray-800 dark:border-gray-700" v-for="(cashBudget, index ) in cashBudgets">
                        <td class="px-5 py-4">{{ index+1 }}</td>
                        <td class="px-5 py-4">{{ cashBudget.detail_type.name }}</td>
                        <td class="px-5 py-4">{{ cashBudget.budget | currency('Rp. ') }}</td>
                        <td class="px-5 py-4">{{ cashBudget.jan == null ? 0: cashBudget.jan | currency('Rp. ') }}</td>
                        <td class="px-5 py-4">{{ cashBudget.feb == null ? 0: cashBudget.feb | currency('Rp. ') }}</td>
                        <td class="px-5 py-4">{{ cashBudget.mar == null ? 0: cashBudget.mar | currency('Rp. ') }}</td>
                        <td class="px-5 py-4">{{ cashBudget.apr == null ? 0: cashBudget.apr | currency('Rp. ') }}</td>
                        <td class="px-5 py-4">{{ cashBudget.mei == null ? 0: cashBudget.mei | currency('Rp. ') }}</td>
                        <td class="px-5 py-4">{{ cashBudget.jun == null ? 0: cashBudget.jun | currency('Rp. ') }}</td>
                        <td class="px-5 py-4">{{ cashBudget.jul == null ? 0: cashBudget.jul | currency('Rp. ') }}</td>
                        <td class="px-5 py-4">{{ cashBudget.aug == null ? 0: cashBudget.aug | currency('Rp. ') }}</td>
                        <td class="px-5 py-4">{{ cashBudget.sep == null ? 0: cashBudget.sep | currency('Rp. ') }}</td>
                        <td class="px-5 py-4">{{ cashBudget.oct == null ? 0: cashBudget.oct | currency('Rp. ') }}</td>
                        <td class="px-5 py-4">{{ cashBudget.nov == null ? 0: cashBudget.nov | currency('Rp. ') }}</td>
                        <td class="px-5 py-4">{{ cashBudget.dec == null ? 0: cashBudget.dec | currency('Rp. ') }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    middleware: ['auth', 'onlySecretary'],
    data() {
        return {
            activities: [],
            cashBudgets: [],
            program: []
        }
    },
    mounted() {
        this.getActivities()
        this.getCashBudgets()
    },
    methods: {
        getActivities() {
        this.activities = this.$axios.get('/activity', {
            params: {
                id: this.$route.params.slug,
            } 
        }) .then(({ data }) => {
                  this.activities = data.result
                  this.program = data.result.program
              })
        },
        getCashBudgets() {
            this.cashBudgets = this.$axios.get('/cashbudget', { 
                params: {
                    activity_id: this.$route.params.slug,
                    limit: 100,
                    with_detail_type: 1,
                }
            }) .then(({ data }) => {
                        this.cashBudgets = data.result.data
                })
        },
    },
    computed: {
        budgetTotal() {
          if (this.cashBudgets) {
            let ss = [];
                Object.entries(this.cashBudgets).forEach(([key, item]) => {
                    if (item != undefined) {
                        ss.push(item);
                    }
                });
            return ss.reduce(function(total, item){ 
            return total + parseInt(item.budget) 
            }, 0);
          }
        },
    }
}
</script>