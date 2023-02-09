<template>
    <section class="py-[50px] flex flex-col items-center justify-center px-4">
        <img src="/assets/images/logo.png" width="20%" alt="">
        <div class="text-[36px] font-semibold text-dark mt-[150px]">
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
            <button type="submit" class="w-full btn btn-primary mt-[14px]">
                Sign In
            </button>
        </form>
    </section>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      login: {
        username: '',
        password: '',
        role: '',
      },
      selectedYear: '',
    }
  },
  methods: {
    userLogin() {
      try {
        
          this.$auth.loginWith('local', { data: this.login })
          .then(response => {
            if (this.$auth.user.role == 1) {
                        console.log(response)
                        this.$router.push({
                            name: 'index',
                        })
            }
            if (this.$auth.user.role == 2) {
                        console.log(response)
                        this.$router.push({
                            name: 'year',
                            params: {
                                year: this.selectedYear,
                            },
                        })
            }
                    }) 
        
        
      } catch (err) {
        console.log(err)
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