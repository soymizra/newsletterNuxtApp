<template>
<div class="col-sm-12 col-md-3">
  <div class="card mb-3 text-center shadow" style="">
    <div class="card-body">
      <div style="width: 5rem; height: 5rem; display: inline-block; border-radius: 10rem; overflow:hidden">
        <img :src="card_newsletter.image" class="img-fluid" alt="">
      </div>
      <span class="badge btn btn-primary disabled">Daily</span>
      <h4 class="card-title">{{ card_newsletter.title }}</h4>
      <p class="card-text text-muted">{{ card_newsletter.description }}</p>
      <br>
      <button type="button" class="btn btn-outline-primary btn-block my-2 my-sm-0"
        data-toggle="modal" :data-target="'#newsletter'+card_newsletter.id">
        <span class="large material-icons" style="font-weight: bold">email</span>
        Subscribe
      </button>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    name: 'Card',
    props : [ 'card_newsletter' ]
  }
</script>
<style scoped>
 
  .card-header{
    background-color: transparent;
  }
  .badge{
    position: absolute;
    right: 1.3rem;
  }
</style>
