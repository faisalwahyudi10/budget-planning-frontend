<template>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark">Tambah Detail Belanja</div>
        <div class="text-[22px] font-semibold text-dark">Kegiatan {{ activities.name }}</div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Tambahkan Detail Belanja <br />
           Dengan adanya program, Tanah Laut semakin maju
        </p>
        <form class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Nama</label>
                <input type="text" class="input-field" v-model="expenses.name"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Jumlah</label>
                <input type="number" class="input-field" v-model="expenses.amount"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Satuan</label>
                <input type="text" class="input-field" v-model="expenses.unit_type"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Harga</label>
                <input type="number" class="input-field" v-model="expenses.cost"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Jenis</label>
                <select name="" id="" v-model="expenses.item_type" class="appearance-none input-field form-icon-chevron_down">
                    <option selected disabled value="">-- Pilih Jenis --</option>
                    <option value="Barang">Barang</option>
                    <option value="Jasa">Jasa</option>
                </select>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Triwulan</label>
                <select name="" id="" v-model="expenses.tw" class="appearance-none input-field form-icon-chevron_down">
                    <option selected disabled value="">-- Pilih Triwulan --</option>
                    <option value="1">Triwulan Satu</option>
                    <option value="2">Triwulan Dua</option>
                    <option value="3">Triwulan Tiga</option>
                    <option value="4">Triwulan Empat</option>
                </select>
            </div>
            <button type="button" @click="createExpense()" id="continueBtn" class="btn btn-primary">
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
        activities: [],
        expenses: {
            name: '',
            amount: '',
            item_type: '',
            unit_type: '',
            cost: '',
            realized: '1',
            tw: '',
            activity_id: this.$route.params.slug,
        },
      }
    }, 
    created() {
        this.getActivity()
    },
    methods: {
        getActivity() {
            this.activities = this.$axios.get('/activity', {
                params: {
                    id: this.$route.params.slug,
                } 
            }) .then(({ data }) => {
                  this.activities = data.result
              })
        },
        async createExpense() {
            try {
                this.$axios.post('/expense', this.expenses)
                    .then(response => {
                        console.log(response)
                        this.$router.push({
                            name: 'home-id-expenses',
                        })
                    })
                    
            } catch (error) {
                console.log(error)
            }
        },
    },
}
</script>