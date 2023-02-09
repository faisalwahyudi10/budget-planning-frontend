<template>
    <section class="py-[70px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-dark">Tambah Data Pegawai</div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Lengkapi Data Anda <br />
           Agar BAPPEDA Tanah Laut Semakin Jaya
        </p>
        <form class="w-full card">
            <div class="form-group">
                <label for="" class="text-grey">No. HP</label>
                <input type="number" class="input-field" :value="phone" @input="updatePhone" />
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Email</label>
                <input type="email" class="input-field"  :value="email" @input="updateEmail" />
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Alamat</label>
                <input type="text" class="input-field" :value="address" @input="updateAddress" />
            </div>
            <NuxtLink :to="{name: 'employees-user'}" class="w-full btn btn-primary mt-[14px]">
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
        phone() {
            return this.$store.state.employee.phone
        },
        email() {
            return this.$store.state.employee.email
        },
        address() {
            return this.$store.state.employee.address
        },
    },
    methods: {
        updatePhone(event) {
            this.$store.commit('employee/updatePhone', event.target.value)
        },
        updateEmail(event) {
            this.$store.commit('employee/updateEmail', event.target.value)
        },
        updateAddress(event) {
            this.$store.commit('employee/updateAddress', event.target.value)
        },
    }
    
}
</script>