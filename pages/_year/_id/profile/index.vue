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
        <div class="text-[32px] font-semibold text-dark">Profil Saya</div>
      </div>
      
    </section>

    <section class="pt-[50px]">
        <div class="mx-auto mt-20 bg-white shadow-xl card w-[40rem] hover:shadow">
            <img class="w-40 mx-auto -mt-20 border-8 border-white rounded-full" :src="'http://budget-planning-backend.test/'+ employees.photo" alt="">      
            <div class="text-base font-medium text-center">
                <button v-on:click="openImage({id:employees.id})" type="button" class="inline-block w-10 h-10 leading-normal text-center text-white uppercase transition duration-150 ease-in-out rounded-full shadow-md bg-sky-300 hover:bg-sky-400 hover:shadow-lg focus:bg-sky-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-sky-500 active:shadow-lg">
                    <font-awesome-icon :icon="['fas', 'camera-retro']" title="Edit Foto" />
                </button>
            </div>
            <div class="mt-2 text-3xl font-medium text-center">{{ employees.name }}</div>
            <div class="mt-2 text-sm font-light text-center">@{{ profile.username }}</div>
            <div class="text-sm font-light text-center">{{ employees.email }}</div>
            <div class="mt-2 text-lg font-normal text-center">{{ employees.position }}</div>
            <div class="mt-2 text-base font-normal text-center">NIK: {{ employees.nik }}</div>
            
            <hr class="mt-8">
            <div class="flex p-4">
            <div class="w-1/2 text-center">
                <button v-on:click="resetPassword({id:profile.id})" type="button" class="inline-block px-6 py-2 text-xs font-medium leading-tight text-gray-800 uppercase transition duration-150 ease-in-out border-2 border-gray-800 rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">Reset Password</button>
            </div>
            <div class="w-0 border border-gray-300">
                
            </div>
            <div class="w-1/2 text-center">
                <button v-on:click="openUpdate({id:employees.id, name:employees.name, nik:employees.nik, position:employees.position, gender:employees.gender, birth_date:employees.birth_date, phone:employees.phone, email:employees.email, address:employees.address, is_verified:employees.is_verified, username:profile.username, ids:profile.id})" type="button" class="inline-block px-6 py-2 text-xs font-medium leading-tight text-blue-600 uppercase transition duration-150 ease-in-out border-2 border-blue-600 rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">Edit Profile</button>
            </div>
            </div>
        </div>

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
                      <th class="p-3 text-left">Password Lama</th>
                      <td class="p-3"><input type="password" v-model="reset.old_password" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Password Lama" required></td>
                    </tr>
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
                      Update Profil
                    </h5>
                    <button class="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none" v-on:click="openUpdate()">
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
                        <td class="p-3"> 
                            <input type="text" v-model="loadData.name" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Nama" required>
                        </td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">NIK </th>
                        <td class="p-3"> 
                            <input type="number" v-model="loadData.nik" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan NIK" required>
                        </td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">Username </th>
                        <td class="p-3"> 
                            <input type="text" v-model="getUsername.username" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Username" required>
                        </td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">Jabatan </th>
                        <td class="p-3">
                            <input type="text" v-model="loadData.position" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Jabatan" required>
                        </td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">Gender </th>
                        <td class="p-3">
                            <select id="countries" v-model="loadData.gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <option selected disabled>-- Pilih Gender --</option>
                              <option value="Laki-laki">Laki-laki</option>
                              <option value="Perempuan">Perempuan</option>
                            </select>
                        </td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">Tanggal Lahir </th>
                        <td class="p-3">
                            <input type="date" v-model="loadData.birth_date" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Tanggal Lahir" required>
                        </td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">No. HP </th>
                        <td class="p-3">
                            <input type="number" v-model="loadData.phone" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan No HP" required>
                        </td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">Email </th>
                        <td class="p-3">
                            <input type="text" v-model="loadData.email" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Email" required>
                        </td>
                      </tr>
                      <tr>
                        <th class="p-3 text-left">Alamat </th>
                        <td class="p-3">
                            <input type="text" v-model="loadData.address" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Alamat" required>
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
                      Update Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="viewModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>

            <div v-if="getModal" id="myModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto shadow-lg shadow-blue-500/50 ... outline-none focus:outline-none">
            <div class="relative w-auto max-w-6xl mx-auto my-6">
              <!--content-->
              <div class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <!--header-->
                <div class="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h5 class="text-xl font-semibold text-blue-500">
                    Update Photo
                  </h5>
                  <button class="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none" v-on:click="openImage()">
                    <span class="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <!--body-->
                <div class="relative flex-auto p-6">
                  <table class="shadow-lg shadow-blue-200/50 ... w-full rounded-lg border-separate border-spacing-2 border border-slate-400 ...">
                    <tr>
                      <th class="p-3 text-left">Upload Photo</th>
                      <td class="p-3"><input type="file" ref="file" @change="getImage" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Photo" required></td>
                    </tr>
                  </table>
                </div>
                <!--footer-->
                <div class="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                  <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" v-on:click="openImage()">
                    Close
                  </button>
                  <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" @click="uploadImage()">
                    Reset
                  </button>
                </div>
              </div>
            </div>
        </div>
        <div v-if="getModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>
      

    </section>
  </div>
</template>

<script>
export default {
  layout: 'dashboardPegawai',
  middleware: 'auth',
  data() {
    return {
        photo:'',
        getId: {
          id: null,
        }, 
        getUsername: {
            username: null,
        },
        reset: {
          old_password: '',
          password: '',
          password_confirmation: '',
        },
        getData: {
          id: null,
        },
        passedData: {
          id: null,
        },
        loadData: {
          id: null,
          name: null,
          nik: null,
          position: null,
          gender: null,
          birth_date: null,
          phone: null,
          email: null,
          address: null,
        },
        profile: [],
        employees: [],
        showModal: false,
        viewModal: false,
        getModal: false,
    }
  }, 
  fetch() {
    this.profile = this.$axios.get('/user', { 
            params: {
                id: this.$auth.user.id,
            } 
    }) .then(({ data }) => {
                  this.profile = data.result
                  this.employees = data.result.employee
              })
  },
  methods:{
    getImage(e){
        console.log(e.target.files[0]);
        this.photo = this.$refs.file.files[0];
    },
    resetPassword: function(id){
      this.showModal = !this.showModal;
      this.passedData = id
    },
    resetData(ids) {
      this.$axios.post('/user/updateReset/' + ids, this.reset). then( response => {
        location.reload()
      })
    },
    openUpdate: function(item){
        this.viewModal = !this.viewModal;
        this.loadData = item
        this.getUsername.username = this.profile.username
        this.getId.id = this.profile.id
    },
    openImage: function(item){
      this.getModal = !this.getModal;
      this.getData = item
    },
    uploadImage() {
      const config = {
        headers: { 'content-type': 'multipart/form-data' }
      }
      let formData = new FormData();
      formData.append("photo", this.photo);

      this.$axios.post('/employee/updateImage/'+ this.getData.id, formData, config)
          .then(response => 
              location.reload()
          )
    },
    updateData() {
          this.$axios.post('/employee/update/'+ this.loadData.id, this.loadData)
              .then(response => 
                  this.updateUsername()
              )
    },
    updateUsername() {
  
          this.$axios.post('/user/updateUsername/'+ this.getId.id, this.getUsername)
              .then(response => {
                  location.reload()
              })
    }
  },
}
</script>

