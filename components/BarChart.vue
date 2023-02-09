<template>
    <chartjs-bar class="mx-auto" v-if="isLoad" v-bind:datasets="datasets" v-bind:labels="labels" v-bind:option="option"/>
</template>

<script>
export default {
  name: "BarChart",
  data: function() {
    return {
      isLoad: null,
      labels: [],
      datasets: [
        {
            label: 'Grafik Bar',
            data: [],
            backgroundColor: "#D0F6F6",
        }
      ],
      option: {
        title: {
          display: true,
          position: "top",
          text: "Grafik Anggaran Pertahun",

        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
        },
        segmentShowStroke: true,
      },
      programs: [],
    };
  },
  mounted() {
    this.created()
  },
  watch: {
    issue() {
      this.created()
    },
  },
  methods: {
    created() {
    const first = parseInt(new Date().getFullYear())
    const last = first - 2
    this.programs = this.$axios.get('/program', {
        params: {
                first_year: last,
                last_year: first,
            }
      }) .then(({ data }) => {
                    this.programs = data.result.data
                    this.programs.map(item => { return this.labels.push(item.date_program)})
                    this.programs.map(item => { return this.datasets[0].data.push(item.realized)}) 
                    this.isLoad = true   
                })
    },
  },
  
  computed: {
    result() {
      return 
    },
    result2() {
        return 
    }
  }
};
</script>