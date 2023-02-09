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
        <div class="text-[32px] font-semibold text-dark">Detail Rincian Belanja</div>
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
              <select v-model="searchQuery" id="simple-search" class="block w-full p-3 pl-10 text-lg text-gray-900 bg-white border border-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500 h-14 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected disabled value="">-- Pilih Kegiatan --</option>
                <option v-for="activity in activities" :value="activity.id">{{ activity.name }}</option>
              </select>
          </div>
        </div>
        <div
          class="flex flex-col justify-between gap-6 sm:items-center sm:flex-row"
        >
          <div>
            <div class="text-xl font-medium text-dark">Rincian Belanja</div>
            <p class="text-grey">Data Detail Rincian Belanja</p>
          </div>
          <a href="#" v-on:click.prevent="openCreate(searchQuery)" class="btn btn-primary"
            >Tambah Rincian Belanja</a
          >
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full">
            <ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none">
                <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                <a class="block px-5 py-3 text-sm font-bold leading-normal uppercase rounded-lg shadow-lg" v-on:click="toggleTabs(1)" v-bind:class="{'text-primary bg-white': openTab !== 1, 'text-white bg-primary': openTab === 1}">
                    Perencanaan Rincian Belanja
                </a>
                </li>
                <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                <a class="block px-5 py-3 text-sm font-bold leading-normal uppercase rounded-lg shadow-lg" v-on:click="toggleTabs(2)" v-bind:class="{'text-gray-500 bg-white': openTab !== 2, 'text-white bg-gray-500': openTab === 2}">
                    Realisasi Rincian Belanja
                </a>
                </li>
            </ul>
            <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-[#fafaf9] rounded shadow-lg">
                <div class="flex-auto px-4 py-5">
                    <div class="h-full tab-content tab-space">
                        <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                            <div class="pt-8 pb-11">
                                <p v-if="$fetchState.pending">Fetching data...</p>
                                <div class="relative overflow-x-auto">
                                    <p v-if="$fetchState.pending"><v-icon name="sync" spin></v-icon>...</p>

                                    <table class="w-full mb-10 text-base text-left text-center text-gray-500 dark:text-gray-400">
                                        <thead class="text-base text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th colspan="6" scope="col" class="px-6 py-3">
                                                    Total Rincian Belanja
                                                </th>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <th scope="col" class="px-6 py-3">
                                                  Desc
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                  Total
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Tw1
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Tw2
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Tw3
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Tw4
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="text-base text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                  Anggaran
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    {{ costTotal3 | currency('Rp. ') }}
                                                </th>
                                                <th scope="col" class="px-6 py-3" v-for="(tw) in resultQuery4">
                                                    {{ tw.activity_budget_tw1 | currency('Rp. ') }}
                                                </th>
                                                <th scope="col" class="px-6 py-3" v-for="(tw) in resultQuery4">
                                                    {{ tw.activity_budget_tw2 | currency('Rp. ') }}
                                                </th>
                                                <th scope="col" class="px-6 py-3" v-for="(tw) in resultQuery4">
                                                    {{ tw.activity_budget_tw3 | currency('Rp. ') }}
                                                </th>
                                                <th scope="col" class="px-6 py-3" v-for="(tw) in resultQuery4">
                                                    {{ tw.activity_budget_tw4 | currency('Rp. ') }}
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Belanja
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    {{ costTotal4 | currency('Rp. ') }}
                                                </th>
                                                <th scope="col" class="px-6 py-3" v-for="(tw) in resultQuery3">
                                                    {{ tw.jumlah | currency('Rp. ') }}
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div class="text-[22px] font-semibold text-dark">Data Rincian Belanja</div>

                                    <table class="w-full mt-5 text-base text-left text-center text-gray-500 dark:text-gray-400">
                                        <thead class="text-base text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    No
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Nama
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Jenis
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Triwulan
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Jumlah
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Harga
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Total
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
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(expense, index ) in resultQuery">
                                                <td class="px-6 py-4">{{ index+1 }}</td>
                                                <td class="px-6 py-4">{{ expense.name }}</td>
                                                <td class="px-6 py-4">{{ expense.item_type }}</td>
                                                <td class="px-6 py-4">Triwulan {{ expense.tw }}</td>
                                                <td class="px-6 py-4">{{ expense.amount }} {{ expense.unit_type }}</td>
                                                <td class="px-6 py-4">{{ expense.cost | currency('Rp. ') }}</td>
                                                <td class="px-6 py-4">{{ costTotal[index] | currency('Rp. ') }}</td>
                                                <td class="px-6 py-4" v-if="expense.realized == 1"> Perencanaan </td><td class="px-6 py-4" v-else-if="expense.realized == 2"> Terealisasi </td>
                                                
                                                <td class="px-6 py-4">
                                                    <a href="#" v-on:click="openUpdate({id:expense.id, name:expense.name, amount:expense.amount, item_type:expense.item_type, unit_type:expense.unit_type, cost:expense.cost, realized:expense.realized, tw:expense.tw, activity_id:expense.activity_id})" class="px-3"><font-awesome-icon :icon="['fas', 'pen-to-square']" shake title="Edit Data Rincian Belanja" /></a>
                                                    <a href="#" v-on:click="deleteData({id:expense.id})" class="px-3"><font-awesome-icon :icon="['fas', 'trash-can']" shake title="Delete Data Rincian Belanja" /></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                            <div class="pt-8 pb-11">
                                <p v-if="$fetchState.pending">Fetching data...</p>
                                <div class="relative overflow-x-auto">
                                    <p v-if="$fetchState.pending"><v-icon name="sync" spin></v-icon>...</p>
                                    <table class="w-full text-base text-left text-center text-gray-500 dark:text-gray-400">
                                        <thead class="text-base text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    No
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Nama
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Jenis
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Triwulan
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Jumlah
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Harga
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Total
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
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="(expense, index ) in resultQuery2">
                                                <td class="px-6 py-4">{{ index+1 }}</td>
                                                <td class="px-6 py-4">{{ expense.name }}</td>
                                                <td class="px-6 py-4">{{ expense.item_type }}</td>
                                                <td class="px-6 py-4">Triwulan {{ expense.tw }}</td>
                                                <td class="px-6 py-4">{{ expense.amount }} {{ expense.unit_type }}</td>
                                                <td class="px-6 py-4">{{ expense.cost | currency('Rp. ') }}</td>
                                                <td class="px-6 py-4">{{ costTotal2[index] | currency('Rp. ') }}</td>
                                                <td class="px-6 py-4" v-if="expense.realized == 1"> Perencanaan </td><td class="px-6 py-4" v-else-if="expense.realized == 2"> Terealisasi </td>
                                                
                                                <td class="px-6 py-4">
                                                    <a href="#" v-on:click="openUpdate({id:expense.id, name:expense.name, amount:expense.amount, item_type:expense.item_type, unit_type:expense.unit_type, cost:expense.cost, realized:expense.realized, tw:expense.tw, activity_id:expense.activity_id})" class="px-3"><font-awesome-icon :icon="['fas', 'pen-to-square']" shake title="Edit Data Rincian Belanja" /></a>
                                                    <a href="#" v-on:click="deleteData({id:expense.id})" class="px-3"><font-awesome-icon :icon="['fas', 'trash-can']" shake title="Delete Data Rincian Belanja" /></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
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
                                    Tambah Realisasi Rincian Belanja
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
                                      <th class="p-3 text-left">Nama</th>
                                      <td class="p-3">
                                        <input type="text" v-model="getData.name" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Nama" required>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th class="p-3 text-left">Jumlah</th>
                                      <td class="p-3">
                                        <input type="number" v-model="getData.amount" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Jumlah" required>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th class="p-3 text-left">Satuan</th>
                                      <td class="p-3">
                                        <input type="text" v-model="getData.unit_type" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Satuan" required>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th class="p-3 text-left">Jenis</th>
                                      <td class="p-3">
                                        <select id="countries" v-model="getData.item_type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                          <option selected disabled value="">-- Pilih Jenis --</option>
                                          <option value="Barang">Barang</option>
                                          <option value="Jasa">Jasa</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th class="p-3 text-left">Harga</th>
                                      <td class="p-3">
                                        <input type="number" v-model="getData.cost" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Harga" required>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th class="p-3 text-left">Triwulan</th>
                                      <td class="p-3">
                                        <select id="countries" v-model="getData.tw" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                          <option selected disabled value="">-- Pilih Triwulan --</option>
                                          <option value="1">Triwulan 1</option>
                                          <option value="2">Triwulan 2</option>
                                          <option value="3">Triwulan 3</option>
                                          <option value="4">Triwulan 4</option>
                                        </select>
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
                          
                          
                          
                          <div v-if="viewModal" id="myModal" class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto shadow-lg shadow-blue-500/50 ... outline-none focus:outline-none">
                            <div class="relative w-auto max-w-6xl mx-auto my-6">
                              <!--content-->
                              <div class="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                <!--header-->
                                <div class="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                                  <h5 class="text-xl font-semibold text-blue-500">
                                    Update Rincian Belanja
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
                                      <th class="p-3 text-left">Nama</th>
                                      <td class="p-3">
                                        <input type="text" v-model="loadData.name" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Nama" required>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th class="p-3 text-left">Jumlah</th>
                                      <td class="p-3">
                                        <input type="number" v-model="loadData.amount" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Jumlah" required>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th class="p-3 text-left">Satuan</th>
                                      <td class="p-3">
                                        <input type="text" v-model="loadData.unit_type" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Satuan" required>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th class="p-3 text-left">Jenis</th>
                                      <td class="p-3">
                                        <select id="countries" v-model="loadData.item_type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                          <option selected disabled value="">-- Pilih Jenis --</option>
                                          <option value="Barang">Barang</option>
                                          <option value="Jasa">Jasa</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th class="p-3 text-left">Triwulan</th>
                                      <td class="p-3">
                                        <select id="countries" v-model="loadData.tw" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                          <option selected disabled value="">-- Pilih Triwulan --</option>
                                          <option value="1">Triwulan 1</option>
                                          <option value="2">Triwulan 2</option>
                                          <option value="3">Triwulan 3</option>
                                          <option value="4">Triwulan 4</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th class="p-3 text-left">Harga</th>
                                      <td class="p-3">
                                        <input type="text" v-model="loadData.cost" id="first_name" class=" w-100 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Harga" required>
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
    
          
    </section>
  </div>
</template>
<script>
export default {
    layout: 'dashboardPegawai',
    middleware: 'auth',
    data() {
      return {
          activities: [],
          expenses: [],
          expenses1: [],
          totaltw:[],
          searchQuery: null,
          loadData: {
            id: null,
            name: null,
            amount: null,
            item_type: null,
            unit_type: null,
            cost: null,
            realized: null,
            tw: null,
            activity_id: null,
          },
          viewModal: false,
          getData: {
            name: '',
            amount: '',
            item_type: '',
            unit_type: '',
            cost: '',
            realized: 1,
            tw: '',
            activity_id: '',
          },
          showModal: false,
          openTab: 1,
      }
    },
    fetch() {
      this.getActivities()
      this.getExpenses()
      this.getExpenses1()
      this.getTotalTw()
    },
    methods: {
      toggleTabs: function(tabNumber){
        this.openTab = tabNumber
      },
      openUpdate: function(data){
        this.viewModal = !this.viewModal;
        this.loadData = data
      },
      openCreate: function(data){
        this.showModal = !this.showModal;
        this.getData.activity_id = data
      },
      getTotalTw(){
        this.totaltw = this.$axios.get('/expense', { 
            params: {
                with_sum: 1,
                realized: 1,
                limit: 100,
            }
        }) .then(({ data }) => {
                    this.totaltw = data.result.data
              })
      },
      getExpenses() {
        this.expenses = this.$axios.get('/expense', { 
            params: {
                realized: 1,
                limit: 100,
                order_tw: 1,
            }
        }) .then(({ data }) => {
                    this.expenses = data.result.data
              })
      },
      getExpenses1() {
        this.expenses1 = this.$axios.get('/expense', { 
            params: {
                realized: 2,
                limit: 100,
            }
        }) .then(({ data }) => {
                    this.expenses1 = data.result.data
              })
      },
      getActivities() {
        this.activities = this.$axios.get('/activity', {
            params: {
                program_id: this.$route.params.id,
                limit: 100,
            } 
        }) .then(({ data }) => {
                  this.activities = data.result.data
              })
      },
      updateData() {
        try {
            this.$axios.post('/expense/update/'+ this.loadData.id, this.loadData)
                .then(response => 
                    this.getExpenses() + this.getExpenses1() + this.getActivities() + this.getTotalTw()
                )
              this.viewModal = false
        } catch (error) {
            console.log(error)
        }
      },
      createData() {
        if (this.searchQuery == '' || this.searchQuery == null) {
          alert('Tidak bisa, field data kegiatan belum diisi!')
        } else {
          try {
            this.$axios.post('/expense', this.getData)
                .then((response) => this.getExpenses() + this.getExpenses() + this.getActivities() + this.getTotalTw());
            this.showModal = false
            this.getData.name = ''
            this.getData.amount = ''
            this.getData.unit_type = ''
            this.getData.item_type = ''
            this.getData.cost = ''
            this.getData.tw = ''
        } catch (error) {
            console.log(error)
        }
        }
      },
      deleteData(item) {
        const confirmBox = confirm("Anda Yakin Ingin Menghapus Data ini?")
        if (confirmBox) {
          this.$axios.delete('/expense/' + item.id). then( response => 
            this.getExpenses() + this.getExpenses1() + this.getActivities() + this.getTotalTw()
          )
        }
      },
    },
    computed : {
        years () {
            return Array.from({length: 2030 - 2010}, (value, index) => 2011 + index)
        },
        resultQuery(){
            if(this.searchQuery){
              let ss = [];
            Object.entries(this.expenses).forEach(([key, item]) => {
                ss.push(item);
            });
            return ss.filter((item)=>{
                let columns = item.activity_id;
                return columns == this.searchQuery
            })
            }else if (this.searchQuery == null || this.searchQuery == ''){
                return this.programs;
            }
        },
        resultQuery2(){
            if(this.searchQuery){
              let ss = [];
            Object.entries(this.expenses1).forEach(([key, item]) => {
                ss.push(item);
            });
            return ss.filter((item)=>{
                let columns = item.activity_id;
                return columns == this.searchQuery
            })
            }else if (this.searchQuery == null || this.searchQuery == ''){
                return this.programs;
            }
        },
        resultQuery3(){
            if(this.searchQuery){
              let ss = [];
            Object.entries(this.totaltw).forEach(([key, item]) => {
                ss.push(item);
            });
            return ss.filter((item)=>{
                let columns = item.activity_id;
                return columns == this.searchQuery
            })
            }else if (this.searchQuery == null || this.searchQuery == ''){
                return this.programs;
            }
        },
        resultQuery4(){
            if(this.searchQuery){
              let ss = [];
            Object.entries(this.activities).forEach(([key, item]) => {
                ss.push(item);
            });
            return ss.filter((item)=>{
                let columns = item.id;
                return columns == this.searchQuery
            })
            }else if (this.searchQuery == null || this.searchQuery == ''){
                return this.programs;
            }
        },
        costTotal() {
            return this.resultQuery.map((item) => {
                return Number(item.amount * item.cost);
            });
        },
        costTotal2() {
            return this.resultQuery2.map((item) => {
                return Number(item.amount * item.cost);
            });
        },
        costTotal3() {
          if (this.resultQuery4) {
            return this.resultQuery4.reduce(function(total, item){ 
            return total + parseInt(item.activity_budget_tw1 + item.activity_budget_tw2 + item.activity_budget_tw3 + item.activity_budget_tw4) 
            }, 0);
          }
        },
        costTotal4() {
          if (this.resultQuery3) {
            return this.resultQuery3.reduce(function(total, item){ 
            return total + parseInt(item.jumlah) 
            }, 0);
          }
        },
    },
};
</script>