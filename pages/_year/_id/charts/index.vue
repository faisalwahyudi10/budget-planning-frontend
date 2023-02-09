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
        <div class="text-[32px] font-semibold text-dark">Realisasi Program {{  }}</div>
      </div>
    </section>

    <section class="pt-[50px]">
      <!-- Section Header -->
      <div class="mb-[30px]">
        
      </div>

      <div class="flex flex-wrap">
        <div class="w-full">
            <ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none">
                <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                <a class="block px-5 py-3 text-sm font-bold leading-normal uppercase rounded-full shadow-lg" v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-600 bg-white': openTab !== 1, 'text-white bg-gray-500': openTab === 1}">
                    Grafik Realisasi Anggaran Program
                </a>
                </li>
                <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                <a class="block px-5 py-3 text-sm font-bold leading-normal uppercase rounded-full shadow-lg" v-on:click="toggleTabs(2)" v-bind:class="{'text-gray-600 bg-white': openTab !== 2, 'text-white bg-gray-500': openTab === 2}">
                    Grafik Anggaran Kegiatan
                </a>
                </li>
            </ul>
            <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-[#fafaf9] rounded shadow-lg">
                <div class="flex-auto px-4 py-5">
                    <div class="h-full tab-content tab-space">
                        <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                            <div class="pt-8 pb-11 grid grid-cols-1 gap-[30px]">
                                <div class="px-8" >
                                   <div class="py-5 text-right">
                                     <button @click="generateChart" type="button" class="inline-block py-4 text-lg font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-red-600 rounded-full shadow-md px-7 hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg">Cetak PDF</button>
                                   </div>
                                   
                                  <div id="chart" ref="content">
                                    <div class="p-10 text-lg font-bold tracking-wide text-center text-gray-700 uppercase">Grafik Realisasi Anggaran Per Tahun</div>
                                    <BarChart />
                                  </div>

                                    
                                    
                                </div>
                            </div>
                        </div>
                        <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                            <div class="pt-8 pb-11 grid grid-cols-1 gap-[30px]">
                                <div class="px-8" >
                                  <div class="py-5 text-right">
                                    <button @click="generateChart2" type="button" class="inline-block py-4 text-lg font-medium leading-tight text-white uppercase transition duration-150 ease-in-out bg-red-600 rounded-full shadow-md px-7 hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg">Cetak PDF</button>
                                  </div>
                                  <div id="chart2" class="border-4 border-gray-200" ref="content2">
                                      <div class="pb-10">
                                        <div class="p-10 text-lg font-bold tracking-wide text-center text-gray-700 uppercase">Grafik Anggaran Kegiatan Program</div>
                                        <PieChart />
                                      </div>
                                    </div>


                                    
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>


    
          
    </section>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";
import BarChart from "/components/BarChart";
import PieChart from "/components/PieChart";

export default {
    layout: 'dashboardPegawai',
    middleware: 'auth',
    components: {
      BarChart,
      PieChart
    },
    data() {
        return {
            openTab: 1,
        }
    },
    methods: {
        generateChart(){
            html2pdf(document.getElementById("chart"), {
				      margin: 1,
              width: 900,
  			      filename: "Grafik-Anggaran-Pertahun.pdf",
              jsPDF: { format: 'a4', orientation: 'landscape' }
			  });
            
        },
        generateChart2(){
            html2pdf(document.getElementById("chart2"), {
				      margin: 1,
              width: 900,
  			      filename: "Grafik-Anggaran-Kegiatan.pdf",
              jsPDF: { format: 'a4', orientation: 'landscape' }
			  });
            
        },
        toggleTabs: function(tabNumber){
            this.openTab = tabNumber
        },
    }
    
}
</script>

<style>
#chart {
  margin-top: 70px;
  margin-bottom: 50px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

#chart2 {
  margin-top: 70px;
  margin-bottom: 50px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
</style>