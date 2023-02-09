<template>
    <chartjs-pie class="mx-auto" v-if="isLoad" v-bind:datasets="datasets" v-bind:labels="labels" v-bind:option="option"/>
</template>

<script>
export default {
  name: "PieChart",
  data: function() {
    return {
      isLoad: null,
      labels: [],
      datasets: [
        {
            label: 'Grafik',
            data: [],
            backgroundColor: ["#D0F6F6","#D0F6D4","#E4D0F6","#F6D3D0","#F6D0D3"]
        }
      ],
      option: {
        title: {
          display: true,
          position: "top",
          text: "Grafik Anggaran Program Kegiatan",

        },
      },
      activities: [],
    };
  },
  mounted() {
    this.created()
  },
  watch: {
    test() {
      this.created()
    }
  },
  methods: {
    created() {
    this.activities = this.$axios.get('/activity', {
        params: {
                program_id: this.$route.params.id
            }
      }) .then(({ data }) => {
                    this.activities = data.result.data
                    this.activities.map(item => { return this.labels.push(item.name)})
                    this.activities.map(item => { return this.datasets[0].data.push(item.activity_budget_tw1 + item.activity_budget_tw2 + item.activity_budget_tw3 + item.activity_budget_tw4)})   
                    this.isLoad = true
                })
    },
  },
  
  computed: {
    result() {
      
    },
    result2() {
        return 
    }
  }
};
</script>