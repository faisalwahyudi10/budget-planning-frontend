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
        <div class="text-[32px] font-semibold text-dark">Program Rencana Anggaran</div>
      </div>
    </section>

    <section class="pt-[50px]">
      <!-- Section Header -->
      <div class="mb-[30px]">
        <div class="flex items-center w-full mb-5">   
          
        </div>
        <div
          class="flex flex-col justify-between gap-6 sm:items-center sm:flex-row"
        >
          <div>
            <div class="text-xl font-medium text-dark">Program</div>
            <p class="text-grey">Rencana dan Realisasi</p>
          </div>
          <NuxtLink :to="{ name: 'year-id-programs-create' }" class="btn btn-primary"
            >Tambah Program</NuxtLink
          >
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
                              Aksi
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(program, n ) in programs">
                          <td class="px-6 py-4">{{ n+1 }}</td>
                          <td class="px-6 py-4">{{ program.name }}</td>
                          <td class="px-6 py-4">{{ program.date_program }}</td>
                          <td class="px-6 py-4">{{ program.budget | currency('Rp. ') }}</td>
                          <td class="px-6 py-4" v-if="program.realized == '' || program.realized == null || program.realized == 0">Belum Diinput</td><td class="px-6 py-4" v-else>{{ program.realized | currency('Rp. ') }}</td>
                          <td class="px-6 py-4">{{ program.budget - program.realized | currency('Rp. ') }}</td>
                          <td class="px-6 py-4">{{ program.user.employee.name }}</td>
                          <td class="px-6 py-4">
                            <a href="#" v-on:click="openUpdate({id:program.id, name:program.name, date_program:program.date_program, budget:program.budget, realized:program.realized, user_id:program.user_id})" class="px-3"><font-awesome-icon :icon="['fas', 'pen-to-square']" bounce title="Edit Data Program" /></a>
                          </td>
                          <div v-if="viewModal" id="myModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto shadow-lg shadow-blue-500/50 ... outline-none focus:outline-none">
                            <div class="relative w-auto max-w-6xl mx-auto my-6">
                              <!--content-->
                              <div class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                <!--header-->
                                <div class="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                                  <h5 class="text-xl font-semibold text-blue-500">
                                    Update Program
                                  </h5>
                                  <button class="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none" v-on:click="openUpdate()">
                                    <span class="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                                      ×
                                    </span>
                                  </button>
                                </div>
                                <!--body-->
                                <div class="relative flex-auto p-6">
                                  <table class="shadow-lg shadow-blue-200/50 ... w-full rounded-lg border-separate border-spacing-2 border border-slate-400 ...">
                                    <tr>
                                      <th class="p-3 text-left">Nama Program</th>
                                      <td class="p-3">
                                        <input type="text" v-model="loadData.name" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Nama Program" required>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th class="p-3 text-left">Tahun</th>
                                      <td class="p-3">
                                        <select id="countries" v-model="loadData.date_program" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                          <option selected value="">Pilih Tahun</option>
                                          <option v-for="year in years" :value="year">{{ year }}</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th class="p-3 text-left">Anggaran</th>
                                      <td class="p-3">
                                        <input type="text" v-model="loadData.budget" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Anggaran Program" required>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th class="p-3 text-left">Pegawai</th>
                                      <td class="p-3">
                                        <select id="countries" v-model="loadData.user_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                          <option selected disabled>-- Pilih Pegawai --</option>
                                          <option v-for="user in users" :value="user.id">{{ user.employee.name }}</option>
                                        </select>
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                                <!--footer-->
                                <div class="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                                  <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" v-on:click="openUpdate()">
                                    Close
                                  </button>
                                  <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" @click="updateData()">
                                    Simpan
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div v-if="viewModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>
                      </tr>
                  </tbody>
              </table>
          </div>
    </section>
  </div>
</template>
<script>
export default {
    layout: 'dashboardPegawai',
    middleware: 'auth',
    data() {
      return {
          users: [],
          programs: {},
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
      openUpdate: function(data){
        this.viewModal = !this.viewModal;
        this.loadData = data
      },
      getProgram() {
        this.programs = this.$axios.get('/program', {
            params: {
                limit: 100,
                date_program: this.$route.params.year,
            } 
        }) .then(({ data }) => {
                  this.programs = data.result.data
              })
      },
      updateData() {
        try {
            this.$axios.post('/program/update/'+ this.loadData.id, this.loadData)
                .then(response => {
                    this.getProgram()
                })
            this.viewModal = false
        } catch (error) {
            console.log(error)
        }
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