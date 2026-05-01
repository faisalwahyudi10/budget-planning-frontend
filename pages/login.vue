<template>
    <section class="py-[50px] flex flex-col items-center justify-center px-4">
        <img src="/assets/images/logo.png" width="20%" alt="">
        <div class="text-[36px] font-semibold text-dark dark:text-gray-100 mt-[150px]">
            Silahkan Login
        </div>
        <p class="mt-4 text-lg leading-7 text-center mb-[50px] text-grey">
            Desa dibina, Kota ditata <br> Bappeda Tanah Laut Jaya
        </p>
        <form class="w-[30%] card" @submit.prevent="userLogin">
            <div class="form-group">
                <label for="" class="text-grey">Username</label>
                <input type="text" class="input-field" v-model="login.username" />
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Password</label>
                <input type="password" class="input-field" v-model="login.password" />
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Tahun</label>
                <select name="" id="" v-model="selectedYear" class="appearance-none input-field form-icon-chevron_down">
                    <option selected disabled value="">-- Pilih Tahun --</option>
                    <option v-for="year in years" :value="year">
                        {{ year }}
                    </option>
                </select>
            </div>
            <p v-if="errorMessage" class="mt-3 text-sm text-center text-red-600">{{ errorMessage }}</p>
            <button type="submit" :disabled="isLoading" class="w-full btn btn-primary mt-[14px] disabled:opacity-60 disabled:cursor-not-allowed">
                {{ isLoading ? 'Memproses...' : 'Sign In' }}
            </button>
        </form>
    </section>
</template>

<script>
export default {
  auth: 'guest',
  data() {
    return {
      login: {
        username: '',
        password: '',
      },
      selectedYear: new Date().getFullYear(),
      errorMessage: '',
      isLoading: false,
    }
  },
  methods: {
    async userLogin() {
      this.errorMessage = ''
      if (!this.login.username || !this.login.password) {
        this.errorMessage = 'Username dan password wajib diisi.'
        return
      }
      if (!this.selectedYear) {
        this.errorMessage = 'Silakan pilih tahun.'
        return
      }
      this.isLoading = true
      try {
        await this.$auth.loginWith('local', { data: this.login })
        if (!this.$auth.user) {
          await this.$auth.fetchUser()
        }
        const role = this.$auth.user && this.$auth.user.role
        const year = this.selectedYear || new Date().getFullYear()
        if (role == 1) {
          this.$router.push({ name: 'index' })
        } else if (role == 2) {
          this.$router.push({ name: 'year', params: { year } })
        } else if (role == 3) {
          this.$router.push({ name: 'seyear-se', params: { seyear: year } })
        } else {
          this.errorMessage = 'Role pengguna tidak dikenali.'
        }
      } catch (err) {
        console.error('Login error:', err)
        const apiMsg = err && err.response && err.response.data && err.response.data.meta && err.response.data.meta.message
        this.errorMessage = apiMsg || 'Login gagal. Periksa username dan password Anda.'
      } finally {
        this.isLoading = false
      }
    }
  },
  computed: {
    years () {
          const year1 = new Date().getFullYear()
          const year2 = year1 + 5
            return Array.from({length: year2 - 2003}, (value, index) => 2003+1 + index)
        },
  }
}
</script>