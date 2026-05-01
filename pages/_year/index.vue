<template>
    <div>
        <section class="pt-[20px] items-center justify-center px-10 mx-20">
            <div class="text-[22px] mb-[15px] font-semibold text-center text-dark dark:text-gray-100">Tahun Anggaran {{ selectedYear }}</div>
            <!-- Section Header -->
            <div class="mb-5">
            <div class="flex items-center justify-between gap-6">
            </div>
            </div>

            <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-11">
            <div class="card !gap-y-10 min-h-[200px]">
                <div class="flex items-center justify-between">
                <div>
                    <p class="text-grey">Anggaran Tahun {{ selectedYear }}</p>
                    <div class="text-[32px] font-bold text-dark dark:text-gray-100 mt-[6px]">{{ stats[0] ? resultYear[0].budget : 0 | currency('Rp. ') }}</div>
                </div>
                <NuxtLink :to="{ name: 'home-employees-create' }"
                    ><img src="/assets/svgs/ric-plus.svg" alt=""
                /></NuxtLink>
                </div>
            </div>
            <div class="card !gap-y-10 min-h-[200px]">
                <div class="flex items-center justify-between">
                <div>
                    <p class="text-grey">Realisasi Anggaran Tahun {{ selectedYear }}</p>
                    <div class="text-[32px] font-bold text-dark dark:text-gray-100 mt-[6px]">{{ stats[0] ? resultYear[0].realized : 0 | currency('Rp. ') }}</div>
                </div>
                <a href="#">
                    <img src="/assets/svgs/ric-plus.svg" alt="" />
                </a>
                </div>
            </div>
            <div class="card !gap-y-10 min-h-[200px]">
                <div class="flex items-center justify-between">
                <div>
                    <p class="text-grey">Jumlah Program Tahun {{ selectedYear }}</p>
                    <div class="text-[32px] font-bold text-dark dark:text-gray-100 mt-[6px]">{{ stats[0] ? resultYear[0].jumlah : '' }}</div>
                </div>
                <a href="#">
                    <img src="/assets/svgs/ric-plus.svg" alt="" />
                </a>
                </div>
            </div>
            </div>
        </section>
        <section class="py-[100px] flex flex-col items-center justify-center px-4">
            <div class="text-[32px] font-semibold text-dark dark:text-gray-100 mb-4">Pilih Program</div>
            <div class="w-[30%] card">
                <div class="form-group">
                    <label for="" class="text-grey">Tahun</label> 
                    <select  v-model="selectedYear" name="year" id="" class="appearance-none input-field form-icon-chevron_down">
                        <option v-for="year in years" :value="year">{{ year }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="" class="text-grey">Program</label>
                    <select  v-model="selectedProgram" name="programs" id="" class="appearance-none input-field form-icon-chevron_down">
                        <option :value="program.id" v-for="program in resultQuery">
                            {{ program.name }}
                        </option>
                    </select>
                </div>
                <button @click="openProgram()" type="button" class="w-full btn btn-primary mt-[14px]">
                    Lanjutkan
                </button>
                
            </div>
        </section>
    </div>
</template>

<script>
export default {
    middleware: ['auth', 'onlyEmployee'],
    layout: 'form',
    data() {
      return {
          programs: [],
          stats: [],
          selectedYear: this.$route.params.year,
          selectedProgram: '',
      }
    },
    created() {
      this.getProgram()
      this.getStats()
    },
    methods: {
        getProgram() {
            this.programs = this.$axios.get('/program', {
                params: {
                    limit: 100,
                } 
            }) .then(({ data }) => {
                    this.programs = data.result.data
                })
        },
        getStats() {
            this.stats = this.$axios.get('/program', {
                params: {
                    sum_year: 1,
                    limit: 100,
                } 
            }) .then(({ data }) => {
                    this.stats = data.result.data
                })
        },
        openProgram() {
            this.$router.push({
                name: 'year-id',
                params: {
                    year: this.selectedYear,
                    id: this.selectedProgram,
                },
            })
        },
    },
    computed: {
        years () {
          const year1 = new Date().getFullYear()
          const year2 = year1 + 5
            return Array.from({length: year2 - 2003}, (value, index) => 2003+1 + index)
        },
        resultQuery(){
            if(this.selectedYear){
                let ss = [];
                Object.entries(this.programs).forEach(([key, item]) => {
                    ss.push(item);
                });
                return ss.filter((item)=>{
                    let columns = item.date_program;
                    return columns == this.selectedYear
                })
            } else if (this.selectedYear == null || this.selectedYear == ''){
                let ss = [];
                Object.entries(this.programs).forEach(([key, item]) => {
                    ss.push(item);
                });
                return ss.filter((item)=>{
                    let columns = item.date_program;
                    return columns == this.$route.params.year;
                })
            }
        },
        resultYear() {
            if(this.selectedYear){
                let ss = [];
                Object.entries(this.stats).forEach(([key, item]) => {
                    ss.push(item);
                });
                return ss.filter((item)=>{
                    let columns = item.date_program;
                    return columns == this.selectedYear
                })
            }
        }
    }
}
</script>