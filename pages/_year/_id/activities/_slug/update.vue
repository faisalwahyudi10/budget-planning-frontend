<template>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark">Tambah Program</div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Tambahkan Program <br />
           Dengan adanya program, Tanah Laut semakin maju
        </p>
        <form class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Nama Kegiatan</label>
                <input type="text" class="input-field" v-model="activities.name"/>
            </div>
            <p class="mt-4 text-lg leading-7 text-center mb-[10px] text-grey">
                Rencana Anggaran
            </p>
            <div class="form-group">
                <label for="" class="text-grey">Anggaran Triwulan 1</label>
                <input type="number" class="input-field" v-model="activities.activity_budget_tw1"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Anggaran Triwulan 2</label>
                <input type="number" class="input-field" v-model="activities.activity_budget_tw2"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Anggaran Triwulan 3</label>
                <input type="number" class="input-field" v-model="activities.activity_budget_tw3"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Anggaran Triwulan 4</label>
                <input type="number" class="input-field" v-model="activities.activity_budget_tw4"/>
            </div>
            <p class="mt-4 text-lg leading-7 text-center mb-[10px] text-grey">
                Indikator Target
            </p>
            <div class="form-group">
                <label for="" class="text-grey">Nama Indikator</label>
                <input type="text" class="input-field" v-model="activities.indicator"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Jenis Indikator Target</label>
                <input type="text" class="input-field" v-model="activities.target"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Target Triwulan 1</label>
                <input type="number" class="input-field" v-model="activities.document_plan_tw1"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Target Triwulan 2</label>
                <input type="number" class="input-field" v-model="activities.document_plan_tw2"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Target Triwulan 3</label>
                <input type="number" class="input-field" v-model="activities.document_plan_tw3"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Target Triwulan 4</label>
                <input type="number" class="input-field" v-model="activities.document_plan_tw4"/>
            </div>
            <button type="button" @click="updateActivity()" id="continueBtn" class="btn btn-primary">
                Simpan
            </button>
        </form>
    </section>
</template>

<script>
export default {
    layout: 'form',
    middleware: 'auth',
    data() {
      return {
        activities: {
            name: '',
            activity_budget_tw1: '',
            activity_budget_tw2: '',
            activity_budget_tw3: '',
            activity_budget_tw4: '',
            documen_plan_tw1: '',
            documen_plan_tw2: '',
            documen_plan_tw3: '',
            documen_plan_tw4: '',
            target: '',
            indicator: '',
            program_id: '',
        },
      }
    },
    fetch() {
        this.activities = this.$axios.get('/activity', {
            params: {
                id: this.$route.params.slug,
            }
      }) .then(({ data }) => {
                    this.activities = data.result
                })
    }, 
    methods: {
        async updateActivity() {
            try {
                this.$axios.post('/activity/update/' + this.$route.params.slug, this.activities)
                    .then(response => {
                        console.log(response)
                        this.$router.push({
                            name: 'year-id-activities',
                        })
                    })
                    
            } catch (error) {
                console.log(error)
            }
        },
    },
}
</script>