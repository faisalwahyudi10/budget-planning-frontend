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
        <div class="text-[32px] font-semibold text-dark">User</div>
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
            <p class="text-grey">Data User</p>
          </div>
          <NuxtLink :to="{ name: 'home-users-create' }" class="btn btn-primary"
            >Tambah User</NuxtLink
          >
        </div>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-11">
        <div class="card !gap-y-10">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-grey">Total User</p>
              <div class="text-[32px] font-bold text-dark mt-[6px]">
                {{ users.total }}
              </div>
            </div>
          </div>
        </div>
        <div class="card !gap-y-10">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-grey">User Aktif</p>
              <div class="text-[32px] font-bold text-dark mt-[6px]">
                {{ verified.total }}
              </div>
            </div>
          </div>
        </div>
        <div class="card !gap-y-10">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-grey">User Nonaktif</p>
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
        <div class="flex items-center justify-between gap-6">
          <div>
            <div class="text-xl font-medium text-dark">User</div>
            <p class="text-grey">Data User</p>
          </div>
        </div>
      </div>



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
                              NIK
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Username
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Role
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Status
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Aksi
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(user, n ) in users.data">
                          <td class="px-6 py-4">{{ n+1 }}</td>
                          <td class="px-6 py-4">{{ user.employee.name }}</td>
                          <td class="px-6 py-4">{{ user.employee.nik }}</td>
                          <td class="px-6 py-4">{{ user.username }}</td>
                          <td class="px-6 py-4" v-if="user.role == 1">Admin</td><td class="px-6 py-4" v-else-if="user.role == 2">Pegawai</td>
                          <td class="px-6 py-4" v-if="user.status == 1"><button type="button" class="inline-block px-6 py-2 text-xs font-medium leading-tight text-green-500 uppercase transition duration-150 ease-in-out border-2 border-green-500 rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">Aktif</button></td>
                          <td class="px-6 py-4" v-else-if="user.status == 0"><button type="button" class="inline-block px-6 py-2 text-xs font-medium leading-tight text-red-600 uppercase transition duration-150 ease-in-out border-2 border-red-600 rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">Nonaktif</button></td>
                          <td class="px-6 py-4">
                            <a href="#" v-on:click="resetPassword({id:user.id})" class="px-3"><font-awesome-icon :icon="['fas', 'key']" beat-fade /></a>
                            <a href="#" v-on:click="openUpdate({id:user.id, role:user.role, status:user.status})" class="px-3"><font-awesome-icon :icon="['fas', 'pen-to-square']" beat-fade /></a>
                          </td>
                          <div v-if="showModal" id="myModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto shadow-lg shadow-blue-500/50 ... outline-none focus:outline-none">
                            <div class="relative w-auto max-w-6xl mx-auto my-6">
                              <!--content-->
                              <div class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                <!--header-->
                                <div class="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                                  <h5 class="text-xl font-semibold text-blue-500">
                                    Reset Password
                                  </h5>
                                  <button class="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none" v-on:click="resetPassword()">
                                    <span class="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                                      ×
                                    </span>
                                  </button>
                                </div>
                                <!--body-->
                                <div class="relative flex-auto p-6">
                                  <table class="shadow-lg shadow-blue-200/50 ... w-full rounded-lg border-separate border-spacing-2 border border-slate-400 ...">
                                    <tr>
                                      <th class="p-3 text-left">Password Baru</th>
                                      <td class="p-3"><input type="password" v-model="reset.password" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Password Baru" required></td>
                                    </tr>
                                    <tr>
                                      <th class="p-3 text-left">Konfirmasi Password</th>
                                      <td class="p-3"><input type="password" v-model="reset.password_confirmation" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Konfirmasi Password Baru" required></td>
                                    </tr>
                                  </table>
                                </div>
                                <!--footer-->
                                <div class="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                                  <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" v-on:click="resetPassword()">
                                    Close
                                  </button>
                                  <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" @click="resetData(passedData.id)">
                                    Reset
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div v-if="showModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>


                          <div v-if="viewModal" id="myModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto shadow-lg shadow-blue-500/50 ... outline-none focus:outline-none">
                            <div class="relative w-auto max-w-6xl mx-auto my-6">
                              <!--content-->
                              <div class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                <!--header-->
                                <div class="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                                  <h5 class="text-xl font-semibold text-blue-500">
                                    Update User
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
                                      <th class="p-3 text-left">Role</th>
                                      <td class="p-3">
                                        <select id="countries" v-model="loadData.role" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                          <option selected disabled>-- Pilih Role --</option>
                                          <option value="1">Admin</option>
                                          <option value="2">Pegawai</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th class="p-3 text-left">Status</th>
                                      <td class="p-3">
                                        <select id="countries" v-model="loadData.status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                          <option selected disabled>-- Pilih Status --</option>
                                          <option value="1">Aktif</option>
                                          <option value="0">Nonaktif</option>
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
  layout: 'dashboard',
  middleware: 'auth',
  data() {
    return {
        reset: {
          password: '',
          password_confirmation: '',
        },
        passedData: {
          id: null,
        },
        loadData: {
          id: null,
          role: null,
          status: null,
        },
        users: [],
        verified: [],
        notverified: [],
        showModal: false,
        viewModal: false,
    }
  }, 
  fetch() {
    this.users = this.$axios.get('/user?limit=100', { 
    }) .then(({ data }) => {
                  this.users = data.result
              })
    this.verified = this.$axios.get('/user?status=1', { 
    }) .then(({ data }) => {
                  this.verified = data.result
              })
    this.notverified = this.$axios.get('/user?status=false', { 
    }) .then(({ data }) => {
                  this.notverified = data.result
              })
  },
  methods:{
    resetPassword: function(id){
      this.showModal = !this.showModal;
      this.passedData = id
    },
    openUpdate: function(data){
      this.viewModal = !this.viewModal;
      this.loadData = data
    },
    resetData(ids) {
      this.$axios.post('/user/reset/' + ids, this.reset). then( response => {
        location.reload()
      })
    },
    updateData() {
      try {
          this.$axios.post('/user/updateAdmin/'+ this.loadData.id, this.loadData)
              .then(response => {
                  location.reload()
              })
      } catch (error) {
          console.log(error)
      }
    },
  },
}
</script>

