<template>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark">Edit Data Pegawai</div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Lengkapi Data Pegawai <br />
           Agar BAPPEDA Tanah Laut Semakin Jaya
        </p>
        <form class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Nama Lengkap</label>
                <input type="text" class="input-field" v-model="employees.name" />
            </div>
            <div class="form-group">
                <label for="" class="text-grey">NIK</label>
                <input type="email" class="input-field" v-model="employees.nik"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Jenis Kelamin</label>
                <select v-model="employees.gender" name="" id="" class="appearance-none input-field form-icon-chevron_down" >
                    <option selected disabled>-- Pilih Jenis Kelamin --</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                </select>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Jabatan</label>
                <input type="text" class="input-field" v-model="employees.position"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Tanggal Lahir</label>
                <input type="date" class="input-field" v-model="employees.birth_date"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">No. HP</label>
                <input type="number" class="input-field" v-model="employees.phone"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Email</label>
                <input type="email" class="input-field" v-model="employees.email"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Alamat</label>
                <input type="text" class="input-field" v-model="employees.address"/>
            </div>
            <button type="button" @click="updateEmployee()" id="continueBtn" class="btn btn-primary">
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
        employees: {
            name: '',
            nik: '',
            gender:'',
            position: '',
            birth_date: '',
            phone: '',
            email: '',
            alamat: '',
        },
      }
    }, 
    fetch() {
        this.employees = this.$axios.get('/employee', {
            params: {
                id: this.$route.params.id,
                limit: 100,
            }
      }) .then(({ data }) => {
                    this.employees = data.result
                })
    },
    methods: {
        async updateEmployee() {
            try {
                let formData = new FormData();
                formData.append("name", this.employees.name);
                formData.append("nik", this.employees.nik);
                formData.append("gender", this.employees.gender);
                formData.append("position", this.employees.position);
                formData.append("birth_date", this.employees.birth_date);
                formData.append("phone", this.employees.phone);  
                formData.append("email", this.employees.email);
                formData.append("address", this.employees.address);
                let id = this.$route.params.id  
                let response = await this.$axios.post('/employee/update/' + id, formData)

                // Redirect to employee page
                this.$router.push({
                    name: 'employees',
                })

                console.log(response)
            } catch (error) {
                console.log(error)
            }
        },
    }
}
</script>