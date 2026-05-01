<template>
    <div class="px-8" >
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
</template>
<script>
import html2pdf from "html2pdf.js";
export default {
    middleware: ['auth' ],
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