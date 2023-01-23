<template>
    <section class="py-[50px] flex flex-col items-center justify-center px-4">
        <img src="/assets/images/logo.png" width="20%" alt="">
        <div class="text-[32px] font-semibold text-dark mt-[70px]">
            Sign In
        </div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-grey">
            Manage your employees to achieve <br> a bigger goals for your company
        </p>
        <form class="w-full card" @submit.prevent="userLogin">
            <div class="form-group">
                <label for="" class="text-grey">Username</label>
                <input type="text" class="input-field" v-model="login.username" />
            </div>
            <div class="form-group">
                <label for="" class="text-grey">Password</label>
                <input type="password" class="input-field" v-model="login.password" />
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
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>