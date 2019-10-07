<template>
  <!-- Card -->
  <div class="card promoting-card">
    <div class="card-body d-flex flex-row">
      <img
        :src="card_next_newsletter_data.image"
        class="rounded-circle mr-3"
        height="150px"
        width="150px"
        alt="avatar"
      />
      <div>
        <h4 class="card-title font-weight-bold mb-2">
          {{ card_next_newsletter_data.title }}
        </h4>
        <p class="card-text">{{ card_next_newsletter_data.description }}</p>
      </div>
    </div>

    <div class="card-body">
      <!--
      <h3>Test</h3>
      <p class="card-text">TEST THIS IS A TEST</p>-->
      <a
        class="btn-block btn-sponsorship"
        data-toggle="modal"
        :data-target="'#newsletterVoteModal' + card_next_newsletter_data.id"
      >
        <i class="far fa-envelope"></i> VOTE
      </a>
      <div class="container mt-3">
        <div class="row d-flex justify-content-around">
          <div>
            <h3>
              {{ card_next_newsletter_data.subscribed }}
              <i class="icons far fa-thumbs-up"></i>
            </h3>
            <p>
              <b>Suscribed</b>
            </p>
          </div>
          <div>
            <h3>
              {{ card_next_newsletter_data.target }}
              <i class="icons fas fa-bullseye"></i>
            </h3>
            <p>
              <b>Target</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['card_next_newsletter_data']
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

.icons {
  color: #ff5c03;
}
</style>
