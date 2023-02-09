<template>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark">Tambah Program</div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Tambahkan Program <br />
           Dengan adanya program, Tanah Laut semakin maju
        </p>
        <form class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Nama Program</label>
                <input type="text" class="input-field" v-model="programs.name"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Tahun</label>
                <select name="" id="" v-model="programs.date_program" class="appearance-none input-field form-icon-chevron_down">
                    <option selected value="">Pilih Tahun</option>
                    <option v-for="year in years" :value="year">{{ year }}</option>
                </select>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Anggaran</label>
                <input type="number" class="input-field" v-model="programs.budget"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Pegawai</label>
                <select name="" id="" v-model="programs.user_id" class="appearance-none input-field form-icon-chevron_down">
                    <option selected disabled>-- Pilih Pegawai --</option>
                    <option v-for="user in users.data" :value="user.id">{{ user.employee.name }}</option>
                </select>
            </div>
            <button type="button" @click="createProgram()" id="continueBtn" class="btn btn-primary">
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
        users: [],
        programs: {
            name: '',
            date_program: '',
            budget: '',
            realized: 0,
            user_id: '',
        },
      }
    }, 
    fetch() {
      this.users = this.$axios.get('/user?is_verified=1&role=2', { 
      }) .then(({ data }) => {
                    this.users = data.result
                })
    },
    methods: {
        async createProgram() {
            try {
                this.$axios.post('/program', this.programs)
                    .then(response => {
                        console.log(response)
                        this.$router.push({
                            name: 'programs',
                        })
                    })
                    
            } catch (error) {
                console.log(error)
            }
        },
    },
    computed : {
        years () {
            return Array.from({length: 2030 - 2010}, (value, index) => 2011 + index)
        },
    },
}
</script>