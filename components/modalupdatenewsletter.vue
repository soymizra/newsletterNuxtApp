<template>
  <div
    class="modal fade"
    id="update-newsletter"
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
              <b>Update Newsletter</b>
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
                  @click.prevent="updateNewsletter"
                  type="submit"
                  class="btn btn-sponsorship mt-2 btn-block"
                >
                  Update
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
export default {
  name: 'modal-update-newsletter',
  props: ['newsletter_data'],
  data() {
    return {}
  }
}
</script>
