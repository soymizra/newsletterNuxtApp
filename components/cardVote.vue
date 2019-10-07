<template>
<div class="col-sm-12 col-md-4">
  <div class="card mb-3 text-center shadow" style="">
    <div class="card-body">
      <div class="row">
            <div class="col-sm-4">
                <div style="width: 5rem; height: 5rem; display: inline-block; border-radius: 10rem; overflow:hidden">
                    <img :src="card_newsletter.image" class="img-fluid" alt="">
                </div>
            </div>
            <div class="col-sm-8 text-justify">
                <h4 class="card-title">{{ card_newsletter.title }}</h4>
                <p class="card-text text-muted">{{ card_newsletter.description }}</p>
            </div> 
      </div>
      <br>
      <button type="button" class="btn btn-outline-primary btn-block my-2 my-sm-0">
        <span class="large material-icons" style="font-weight: bold">email</span>
        Vote
      </button>
       <div class="container form-group mt-3">
              <input type="email" class="form-control" placeholder="Enter your email" />
              <button type="submit" class="btn btn-sponsorship mt-2 btn-block">Subscribe</button>
            </div>

    </div>
  </div>
</div>
</template>
<script>
  export default {
    name: 'CardVote',
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