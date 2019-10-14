<template>
  <div
    class="modal fade"
    id="register-newsletter"
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
            <h3 class="modal-title mb-2 text-center" id="exampleModalLabel">
              <b>Register Newsletter</b>
            </h3>
            <img
              src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              class="rounded-circle m-auto"
              height="150px"
              width="150px"
              alt="avatar"
            />
            <div class="container form-group mt-3">
              <form>
                <input
                  id="newsletter_name"
                  type="text"
                  class="form-control"
                  placeholder="Enter name"
                  required
                />
                <input
                  id="newsletter_description"
                  type="text"
                  class="form-control mt-2"
                  placeholder="Enter description"
                  required
                />
                <ValidationProvider v-slot="{ error }" rules="required|numeric">
                  <input
                    id="newsletter_target"
                    type="number"
                    class="form-control mt-2"
                    placeholder="Enter target"
                    required
                  />
                </ValidationProvider>
                <button
                  @click.prevent="createNewsletter"
                  type="submit"
                  class="btn btn-sponsorship mt-2 btn-block"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
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
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
  data() {
    return {
      url_end_point: `${process.env.apiURL}/newsletters`
    }
  },
  methods: {
    createNewsletter() {
      const endpoint = this.url_end_point
      const payload = { title: '', description: '', target: 0 }

      payload.title = document.getElementById('newsletter_name').value
      payload.description = document.getElementById(
        'newsletter_description'
      ).value
      payload.target = document.getElementById('newsletter_target').value

      axios
        .post(endpoint, payload)
        .then((response) => {
          if (response.status === 201) {
            Swal.fire({
              type: 'success',
              title: 'Newsletter Register!',
              text: `Cool.. We have a new newsletter!`
            })
            this.$emit('updateTable')
          } else {
            Swal.fire({
              type: 'Ooops...',
              title: 'Something happens!',
              text: `I can't create this register!`
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
    }
  }
}
</script>
