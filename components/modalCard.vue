<template>
    <div class="modal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save changes</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
           
            </div>
        </div>
    </div>
</template>

<script>

export default {

    name: 'modalCard',
    props: ['newslatter_data']

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