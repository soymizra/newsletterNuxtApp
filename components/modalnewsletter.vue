<template>
  <div
    class="modal fade"
    :id="'newsletter' + newsletter_subs_data.id"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          />
          <span aria-hidden="true">&times;</span>
        </div>
        <div>
          <div class="card promoting-card p-2">
            <h3 class="modal-title mb-2" id="exampleModalLabel">
              <b>{{ newsletter_subs_data.title }}</b>
            </h3>
            <img
              :src="newsletter_subs_data.image"
              class="rounded-circle m-auto"
              height="150px"
              width="150px"
              alt="avatar"
            />
            <div class="container form-group mt-3">
              <form>
                <input
                  :id="'field' + newsletter_subs_data.id"
                  type="email"
                  class="form-control"
                  placeholder="Enter your email"
                  required
                />
                <button
                  @click.prevent="subscribeUser"
                  type="submit"
                  class="btn btn-sponsorship mt-2 btn-block"
                >
                  Suscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
  props: ['newsletter_subs_data'],
  data() {
    return {
      url_end_point: `${process.env.apiURL}/users`
    }
  },
  methods: {
    validatEmail(email) {
      // eslint-disable-next-line
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    subscribeUser() {
      const endpoint = this.url_end_point
      const payload = { email: '', newsletter_id: 0 }
      const fieldId = 'field' + this.newsletter_subs_data.id
      const email = document.getElementById(fieldId)
      if (this.validatEmail(email.value)) {
        payload.email = email.value
        payload.newsletter_id = this.newsletter_subs_data.id
        axios
          .post(endpoint, payload)
          .then((response) => {
            if (response.status === 201) {
              Swal.fire({
                type: 'success',
                title: 'Great Welcome!',
                text: `Welcome ${email.value}`
              })
            } else {
              Swal.fire({
                type: 'Ooops...',
                title: 'API Request Error',
                text: `Bad BACK END Response`
              })
            }
          })
          .catch((err) => {
            Swal.fire({
              type: 'error',
              title: 'API Request Error',
              text: `${err}`
            })
          })
      } else {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }
    }
  }
}
</script>
<style scoped>
.btn-sponsorship {
  color: #ff5c03 !important;
  padding: 0.6em;
  border: 1px solid;
  border-color: #ff5c03;
  border-radius: 0.25rem;
  font-weight: 800;
}

.btn-sponsorship:hover {
  color: #fff !important;
  background: #ff5c03;
  transition: 0.5s;
}
</style>
