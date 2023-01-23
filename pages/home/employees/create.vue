<template>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark">Tambah Data Pegawai</div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Tambahkan Pegawai <br />
           Agar BAPPEDA Tanah Laut Semakin Jaya
        </p>
        <form class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">Nama Lengkap</label>
                <input type="text" class="input-field" :value="name" @input="updateName" />
            </div>
            <div class="form-group">
                <label for="" class="text-grey">NIK</label>
                <input type="number" class="input-field"  :value="nik" @input="updateNik" />
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Jenis Kelamin</label>
                <select name="" id="" class="appearance-none input-field form-icon-chevron_down" :value="gender" @change="updateGender">
                    <option selected disabled>-- Pilih Jenis Kelamin --</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                </select>
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Jabatan</label>
                <input type="text" class="input-field" :value="position" @input="updatePosition" />
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Tanggal Lahir</label>
                <input type="date" class="input-field" :value="birthDate" @input="updateBirthDate" />
            </div>
            <NuxtLink :to="{name: 'home-employees-more'}" href="employee_create-2.html" class="w-full btn btn-primary mt-[14px]">
                Continue
            </NuxtLink>
        </form>
    </section>
</template>

<script>
export default {
    layout: 'form',
    middleware: 'auth',
    computed: {
        /* Use a computed property instead */
        name() {
            return this.$store.state.employee.name
        },
        nik() {
            return this.$store.state.employee.nik
        },
        gender() {
            return this.$store.state.employee.gender
        },
        position() {
            return this.$store.state.employee.position
        },
        birthDate() {
            return this.$store.state.employee.birthDate
        },
    },
    methods: {
        updateName(event) {
            this.$store.commit('employee/updateName', event.target.value)
        },
        updateNik(event) {
            this.$store.commit('employee/updateNik', event.target.value)
        },
        updateGender(event) {
            this.$store.commit('employee/updateGender', event.target.value)
        },
        updatePosition(event) {
            this.$store.commit('employee/updatePosition', event.target.value)
        },
        updateBirthDate(event) {
            this.$store.commit('employee/updateBirthDate', event.target.value)
        },
    }
    
}
</script>