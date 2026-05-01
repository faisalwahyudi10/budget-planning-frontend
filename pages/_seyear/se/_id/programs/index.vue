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
        <div class="text-[32px] font-semibold text-dark dark:text-gray-100">Program Rencana Anggaran</div>
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
                <option selected value="">Cari Berdasarkan Tahun</option>
                <option v-for="year in years" :value="year">{{ year }}</option>
              </select>
          </div>
        </div>
        <div
          class="flex flex-col justify-between gap-6 sm:items-center sm:flex-row"
        >
          <div>
            <div class="text-xl font-medium text-dark dark:text-gray-100">Program</div>
            <p class="text-grey">Rencana dan Realisasi</p>
          </div>
          <!-- <NuxtLink :to="{ name: 'year-id-programs-create' }" class="btn btn-primary"
            >Tambah Program</NuxtLink
          > -->
        </div>
      </div>

      
      <p v-if="$fetchState.pending">Fetching roles...</p>
        <div class="relative overflow-x-auto">
              <p v-if="$fetchState.pending"><v-icon name="sync" spin></v-icon>...</p>
              <table class="w-full text-base text-left text-center text-gray-500 dark:text-gray-400">
                  <thead class="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              No
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Nama
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Tahun
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Anggaran
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Realisasi
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Sisa
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Pegawai
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Unit
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Status
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="bg-white dark:bg-slate-800 border-b dark:bg-gray-800 dark:border-gray-700" v-for="(program, n ) in resultQuery">
                          <td class="px-6 py-4">{{ n+1 }}</td>
                          <td class="px-6 py-4">{{ program.name }}</td>
                          <td class="px-6 py-4">{{ program.date_program }}</td>
                          <td class="px-6 py-4">{{ program.budget | currency('Rp. ') }}</td>
                          <td class="px-6 py-4" v-if="program.realized == '' || program.realized == null || program.realized == 0">Belum Diinput</td><td class="px-6 py-4" v-else>{{ program.realized | currency('Rp. ') }}</td>
                          <td class="px-6 py-4">{{ program.budget - program.realized | currency('Rp. ') }}</td>
                          <td class="px-6 py-4">{{ program.user.employee.name }}</td>
                          <td class="px-6 py-4">{{ program.unit || '-' }}</td>
                          <td class="px-6 py-4">
                            <span :class="{'text-green-600 font-bold': program.status === 'Diterima', 'text-red-600 font-bold': program.status === 'Ditolak', 'text-yellow-600 font-bold': program.status === 'Pending'}">
                                {{ program.status || 'Pending' }}
                            </span>
                          </td>
                          
                      </tr>
                  </tbody>
              </table>
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
          users: [],
          programs: [],
          searchQuery: '',
          loadData: {
            id: null,
            name: null,
            date_program: null,
            budget: null,
            realized: null,
            user_id: null,
          },
          viewModal: false,
      }
    },
    created() {
      this.getProgram()
    }, 
    methods: {
      getProgram() {
        this.$axios.get('/program', {
            params: {
                limit: 100,
                order_year: 1,
            } 
        }) .then(({ data }) => {
                  this.programs = data.result.data
              })
      },
    },
    fetch() {
        this.users = this.$axios.get('/user?is_verified=1', { 
        }) .then(({ data }) => {
                    this.users = data.result.data
              })
    },
    computed : {
        years () {
          const year1 = new Date().getFullYear()
          const year2 = year1 + 5
            return Array.from({length: year2 - 2003}, (value, index) => 2003+1 + index)
        },
        resultQuery(){
        if(this.searchQuery){
          return this.programs.filter((item)=>{
            let columns = item.date_program;
            return columns == this.searchQuery
          })
        }else if (this.searchQuery == null || this.searchQuery == ''){
          return this.programs;
        }
      }
    },
};
</script>