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
                <input type="text" class="input-field" :value="username" @input="updateUsername"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Password</label>
                <input type="password" class="input-field" :value="password" @input="updatePassword"/>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Role</label>
                <select name="" id="" :value="role" @change="updateRole" class="appearance-none input-field form-icon-chevron_down">
                    <option selected disabled>-- Pilih Role --</option>
                    <option value="1">Admin</option>
                    <option value="2">Pegawai</option>
                </select>
            </div>

            <NuxtLink :to="{name: 'employees-finish'}" class="w-full btn btn-primary mt-[14px]">
                Continue
            </NuxtLink>
        </form>
    </section>
</template>

<script>
export default {
    layout: 'form',
    middleware: 'auth',
    methods: {
        updateUsername(event) {
            this.$store.commit('employee/updateUsername', event.target.value)
        },
        updatePassword(event) {
            this.$store.commit('employee/updatePassword', event.target.value)
        },
        updateRole(event) {
            this.$store.commit('employee/updateRole', event.target.value)
        },
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
    },
    computed: {
        username() {
            return this.$store.state.employee.username
        },
        password() {
            return this.$store.state.employee.password
        },
        role() {
            return this.$store.state.employee.role
        },
    }
}
</script>