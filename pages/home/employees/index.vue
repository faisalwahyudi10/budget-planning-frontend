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
        <div class="text-[32px] font-semibold text-dark">Pegawai</div>
      </div>
      
    </section>

    <section class="pt-[50px]">
      <!-- Section Header -->
      <div class="mb-[30px]">
        <div
          class="flex flex-col justify-between gap-6 sm:items-center sm:flex-row"
        >
          <div>
            <div class="text-xl font-medium text-dark">Statistik</div>
            <p class="text-grey">Data Pegawai</p>
          </div>
          <NuxtLink :to="{ name: 'home-employees-create' }" class="btn btn-primary"
            >Tambah Pegawai</NuxtLink
          >
        </div>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-11">
        <div class="card !gap-y-10">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-grey">Total Pegawai</p>
              <div class="text-[32px] font-bold text-dark mt-[6px]">
                {{ total.total }}
              </div>
            </div>
          </div>
        </div>
        <div class="card !gap-y-10">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-grey">Pegawai Aktif</p>
              <div class="text-[32px] font-bold text-dark mt-[6px]">
                {{ verified.total }}
              </div>
            </div>
          </div>
        </div>
        <div class="card !gap-y-10">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-grey">Pegawai Nonaktif</p>
              <div class="text-[32px] font-bold text-dark mt-[6px]">
                {{ notverified.total }}
              </div>
            </div>
          </div>
        </div>
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
              <input type="text" v-model="searchQuery" id="simple-search" class="bg-white border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-14 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
          </div>
        </div>
        <div class="flex items-center justify-between gap-6">
          <div class="mt-5">
            <div class="text-xl font-medium text-dark">Pegawai</div>
            <p class="text-grey">Data Pegawai</p>
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-10 lg:gap-3"
      >
        <p v-if="$fetchState.pending">Fetching employees...</p>
        <!-- Card -->
        <div class="items-center card py-6 md:!py-10 md:!px-[38px] !gap-y-0" v-else v-for="employee in resultQuery">
          <a
            href="#"
            v-b-modal="'myModal'"
            @click="toggleModal({name:employee.name, id:employee.id, nik:employee.nik, position:employee.position, gender:employee.gender, birthDate:employee.birth_date, phone:employee.phone, email:employee.email, address:employee.address, status:employee.is_verified})"
            class="absolute inset-0 focus:ring-2 ring-primary rounded-[26px]"
          ></a>
          <img :src="'http://budget-planning-backend.test/'+ employee.photo" width="180" height="180" alt="" class="rounded-full" />
          <div class="mt-6 mb-1 font-semibold text-center text-dark">
            {{ employee.name }}
          </div>
          <p class="text-center text-grey">
          {{ employee.position }}</p>
          <a href="#" v-if="employee.is_verified" @click="verifyData({id:employee.id, status:employee.is_verified})" class="mt-[30px] text-success relative flex items-center gap-[6px]">
            <img src="/assets/svgs/ic-check-circle.svg" alt="" />
            Verified
          </a>
          <a v-else
            href="#"
            @click="verifyData({id:employee.id, status:employee.is_verified})"
            class="text-blue-700 mt-[30px] underline relative z-20"
          >
            Verify Now
          </a>
            

        </div>
        <div v-if="showModal" id="myModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto shadow-lg shadow-blue-500/50 ... outline-none focus:outline-none">
              <div class="relative w-auto max-w-6xl mx-auto my-6">
                <!--content-->
                <div class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  <!--header-->
                  <div class="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                    <h5 class="text-xl font-semibold text-blue-500">
                      Detail Data Pegawai
                    </h5>
                    <button class="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none" v-on:click="toggleModal()">
                      <span class="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <!--body-->
                  <div class="relative flex-auto p-6">
                    <table class="p-5 shadow-lg shadow-blue-100/50 ... w-full rounded-lg border-separate border-spacing-2 border border-slate-300 ...">
                      <tr>
                        <th class="p-3 text-left">Nama </th>
                        <td class="p-3"> : &nbsp; {{ passedData.name }}</td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">NIK </th>
                        <td class="p-3"> : &nbsp; {{ passedData.nik }}</td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">Jabatan </th>
                        <td class="p-3"> : &nbsp; {{ passedData.position }}</td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">Gender </th>
                        <td class="p-3"> : &nbsp; {{ passedData.gender }}</td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">Tanggal Lahir </th>
                        <td class="p-3"> : &nbsp; {{ passedData.birthDate }}</td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">No. HP </th>
                        <td class="p-3"> : &nbsp; {{ passedData.nik }}</td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">Email </th>
                        <td class="p-3"> : &nbsp; {{ passedData.email }}</td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">Alamat </th>
                        <td class="p-3"> : &nbsp; {{ passedData.address }}</td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">Status </th>
                        <td class="p-3" v-if="passedData.status == 1"> : &nbsp; Aktif</td>
                        <td class="p-3" v-else> : &nbsp; Nonaktif</td>
                      </tr>
                    </table>
                  </div>
                  <!--footer-->
                  <div class="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                    <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" v-on:click="toggleModal()">
                      Close
                    </button>
                    <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" v-on:click="deleteData()">
                      Delete Data
                    </button>
                    <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" @click="openUpdate()">
                      Update Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="showModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    layout: 'dashboard',
    middleware: 'auth',
    
    data() {
      return {
          searchQuery: null,
          employees: {},
          total: [],
          verified: [],
          notverified: [],
          showModal: false,
          passedData:{
            name:null,
            id:null,
            nik:null, 
            position:null, 
            gender:null, 
            birthDate:null, 
            phone:null,
            email:null,
            address:null,
            status:null,
          },
      }
    }, 
    fetch() {
      this.employees = this.$axios.get('/employee?limit=100', { 
      }) .then(({ data }) => {
                    this.employees = data.result.data
                })
      this.total = this.$axios.get('/employee?limit=200', { 
      }) .then(({ data }) => {
                    this.total = data.result
                })
      this.verified = this.$axios.get('/employee?is_verified=1', { 
      }) .then(({ data }) => {
                    this.verified = data.result
                })
      this.notverified = this.$axios.get('/employee?is_verified=false', { 
      }) .then(({ data }) => {
                    this.notverified = data.result
                })
    },
    computed: {
      resultQuery(){
        if(this.searchQuery){
          return this.employees.filter((item)=>{
            let columns = item.name + item.position + item.nik + item.gender;
            return this.searchQuery.toLowerCase().split(' ').every(v => columns.toLowerCase().includes(v))
          })
        }else{
          return this.employees;
        }
      }
    },
    methods: {
      toggleModal: function(item){
        this.showModal = !this.showModal;
        this.passedData = item
      },
      openUpdate() {
        this.$router.push({
          name: 'home-employees-id-update',
          params: {
              id: this.passedData.id,
          },
        })
      },
      deleteData() {
        const confirmBox = confirm("Anda Yakin Ingin Menghapus Data ini?")
        if (confirmBox) {
          if (this.passedData.status == 1) {
            alert('Data Masih Aktif')
          }
          this.$axios.delete('/employee/' + this.passedData.id). then( response => {
            location.reload()
          })
        }
      },
      verifyData(items) {
        if (items.status == 0) {
          let formData = new FormData();
          formData.append("is_verified", 1);
          this.$axios.post('/employee/updateStatus/' + items.id, formData). then( response => {
            location.reload()
        })
        } else {
          let formData = new FormData();
          formData.append("is_verified", 0);
          this.$axios.post('/employee/updateStatus/' + items.id, formData). then( response => {
            location.reload()
        })
        }
        
      }
    },
}
</script>

