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
        <div class="text-[32px] font-semibold text-dark">Jenis Belanja</div>
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
            <div class="text-xl font-medium text-dark">Jenis</div>
            <p class="text-grey">Detail Jenis Belanja</p>
          </div>
          <a href="#" v-on:click.prevent="openCreate()" class="btn btn-primary"
            >Tambah Jenis</a
          >
        </div>
      </div>

      
        <div class="relative overflow-x-auto">
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
                              Aksi
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(detailType, n ) in detailTypes">
                          <td class="px-6 py-4">{{ n+1 }}</td>
                          <td class="px-6 py-4">{{ detailType.name }}</td>
                          <td class="px-6 py-4">
                            <a href="#" v-on:click="openUpdate({id:detailType.id, name:detailType.name})" class="px-3"><font-awesome-icon :icon="['fas', 'pen-to-square']" bounce title="Edit Data Jenis" /></a>
                            <a href="#" v-on:click="deleteData({id:detailType.id})" class="px-3"><font-awesome-icon :icon="['fas', 'trash-can']" bounce title="Delete Data Jenis Belanja" /></a>
                          </td>
                          <div v-if="viewModal" id="myModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto shadow-lg shadow-blue-500/50 ... outline-none focus:outline-none">
                            <div class="relative w-auto max-w-6xl mx-auto my-6">
                              <!--content-->
                              <div class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                <!--header-->
                                <div class="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                                  <h5 class="text-xl font-semibold text-blue-500">
                                    Update Data Jenis Belanja
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
                                      <th class="p-3 text-left">Nama Jenis Belanja</th>
                                      <td class="p-3">
                                        <input type="text" v-model="loadData.name" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Nama Program" required>
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
                                    Update
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div v-if="viewModal" class="fixed inset-0 z-40 bg-black opacity-25"></div>
                      </tr>
                  </tbody>
              </table>

              <div v-if="showModal" id="myModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto shadow-lg shadow-blue-500/50 ... outline-none focus:outline-none">
                <div class="relative w-auto max-w-6xl mx-auto my-6">
                  <!--content-->
                  <div class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                    <!--header-->
                    <div class="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                      <h5 class="text-xl font-semibold text-blue-500">
                        Tambah Data Jenis Belanja
                      </h5>
                      <button class="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none" v-on:click="openCreate()">
                        <span class="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    <!--body-->
                    <div class="relative flex-auto p-6">
                      <table class="shadow-lg shadow-blue-200/50 ... w-full rounded-lg border-separate border-spacing-2 border border-slate-400 ...">
                        <tr>
                          <th class="p-3 text-left">Nama Jenis Belanja</th>
                          <td class="p-3">
                            <input type="text" v-model="getData.name" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Nama Program" required>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <!--footer-->
                    <div class="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                      <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" v-on:click="openCreate()">
                        Close
                      </button>
                      <button class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-blue-500 border-solid rounded outline-none hover:bg-blue-500 hover:text-white active:bg-blue-600 focus:outline-none" type="button" @click="createData()">
                        Simpan
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
    layout: 'dashboardPegawai',
    middleware: 'auth',
    data() {
      return {
          detailTypes: [],
          getData: {
            name: null,
          },
          loadData: {
            id: null,
            name: null,
          },
          viewModal: false,
          showModal: false,
      }
    },
    created() {
      this.getDetailType()
    }, 
    methods: {
      openUpdate: function(data){
        this.viewModal = !this.viewModal;
        this.loadData = data
      },
      openCreate: function(){
        this.showModal = !this.showModal;
      },
      getDetailType() {
        this.detailTypes = this.$axios.get('/detailType', {
            params: {
                limit: 100,
            } 
        }) .then(({ data }) => {
                  this.detailTypes = data.result.data
              })
      },
      createData() {
          try {
            this.$axios.post('/detailType', this.getData)
                .then((response) => this.getDetailType());
            this.showModal = false
            this.getData.name = ''
        } catch (error) {
            console.log(error)
        }
      },
      updateData() {
        try {
            this.$axios.post('/detailType/update/'+ this.loadData.id, this.loadData)
                .then(response => {
                    this.getDetailType()
                })
            this.viewModal = false
        } catch (error) {
            console.log(error)
        }
      },
      deleteData(item) {
        const confirmBox = confirm("Anda Yakin Ingin Menghapus Data ini?")
        if (confirmBox) {
          this.$axios.delete('/detailType/' + item.id). then( response => 
            this.getDetailType()
          )
        }
      },
    },
    computed : {
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