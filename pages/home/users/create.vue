<template>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark">Tambah Data User</div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Tambahkan User <br />
           Semakin Banyak Tim Semakin Cepat Pekerjaan
        </p>
        <form class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Username</label>
                <input type="text" class="input-field" v-model="users.username"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Password</label>
                <input type="password" class="input-field" v-model="users.password"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Role</label>
                <select name="" id="" v-model="users.role" class="appearance-none input-field form-icon-chevron_down">
                    <option selected disabled>-- Pilih Role --</option>
                    <option value="1">Admin</option>
                    <option value="2">Pegawai</option>
                </select>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Pegawai</label>
                <select name="" id="" v-model="users.employee_id" class="appearance-none input-field form-icon-chevron_down">
                    <option selected disabled>-- Pilih Pegawai --</option>
                    <option v-for="employee in employees.data" :value="employee.id">{{ employee.name }}</option>
                </select>
            </div>
            <button type="button" @click="createUser()" id="continueBtn" class="btn btn-primary">
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
        users: {
            username: '',
            password: '',
            role: '',
            employee_id: '',
        },
        employees: [],
      }
    }, 
    fetch() {
      this.employees = this.$axios.get('/employee?whereNoEm=1', { 
      }) .then(({ data }) => {
                    this.employees = data.result
                })
    },
    methods: {
        async createUser() {
            try {
                this.$axios.post('/user', this.users)
                    .then(response => {
                        console.log(response)
                        this.$router.push({
                            name: 'home-users',
                        })
                    })
            } catch (error) {
                console.log(error)
            }
        },
    }
}
</script>