<template>
  <div class="custom-container m-auto mt-5">
    <div class="card">
      <h5 class="card-header title-color white-text text-center py-4">
        <strong>Sign in</strong>
      </h5>
      <div class="card-body px-lg-5 pt-0">
        <form class="text-center" @submit.prevent="clickLogin">
          <div class="md-form">
            <input
              v-model="formData.email"
              type="email"
              id="materialLoginFormEmail"
              class="form-control"
              placeholder="E-mail"
            />
          </div>
          <div class="md-form">
            <input
              v-model="formData.password"
              type="password"
              id="materialLoginFormPassword"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <div class="d-flex justify-content-around">
            <div>
              <a class="link" href="#">Forgot password?</a>
            </div>
          </div>
          <button
            class="btn btn-outline btn-rounded btn-block my-4 waves-effect z-depth-0"
            type="submit"
          >
            Sign in
          </button>
          <p>
            Not a member?
            <a class="link" href="#">Register</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import { mapMutations } from 'vuex'
export default {
  middleware: 'authenticated',
  layout: 'login_layout',
  data() {
    return {
      url_end_point: `${process.env.apiURL}/auth/login`,
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations(['login']),
    clickLogin() {
      const endpoint = this.url_end_point
      if (this.formData.email === '' || this.formData.password === '') {
        Swal.fire({
          type: 'error',
          title: 'No way!',
          text: `Hey, I need something to work!`
        })
      } else {
        axios
          .post(endpoint, this.formData)
          .then((response) => {
            const user = response.data
            this.login(user)
            Swal.fire({
              type: 'success',
              title: 'Login',
              text: `Welcome back ${this.formData.email}`
            })
            this.$router.push('/account/dashboard')
          })
          .catch((error) => {
            if (error.response.status === 401) {
              Swal.fire({
                type: 'error',
                title: 'Sorry!',
                text: `Hey, check your data or.. why you don't sing up?`
              })
            } else if (error.response.status === 422) {
              Swal.fire({
                type: 'error',
                title: 'Upps!',
                text: `Let me talk with my front end team jeje`
              })
            } else {
              Swal.fire({
                type: 'error',
                title: 'Oh oh D:',
                text: `Houston we got a problem here!`
              })
            }
          })
      }
    }
  }
}
</script>
<style scoped>
.custom-container {
  max-width: 540px;
}
.title-color {
  background-color: #ff5c03 !important;
}
.btn-rounded {
  border-radius: 0.8em;
  border-color: #ff5c03 !important;
  border-width: 0.08em;
  color: #ff5c03;
  font-size: 1.2em;
}
.btn-rounded:hover {
  color: #fff;
  background-color: #ff5c03;
}
.link {
  color: #ff5c03;
}
</style>
