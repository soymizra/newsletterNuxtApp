<template>
  <div class="card promoting-card">
    <div class="card-body d-flex flex-row">
      <img
        :src="card_newsletter_data.image"
        class="rounded-circle mr-3 m-auto"
        height="150px"
        width="150px"
        alt="avatar"
      />
      <div>
        <span class="card-tag-frecuency">
          <i class="far fa-clock pr-2"></i>DAILY
        </span>
      </div>
    </div>
    <div class="card-body">
      <h3>{{ card_newsletter_data.title }}</h3>
      <p class="card-text">{{ card_newsletter_data.description }}</p>
      <a
        class="btn-block btn-sponsorship"
        data-toggle="modal"
        :data-target="'#newsletter' + card_newsletter_data.id"
      >
        <i class="far fa-envelope"></i> SUSCRIBE
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['card_newsletter_data']
}
</script>
<style scoped>
.collapse-content .fa.fa-heart:hover {
  color: #f44336 !important;
}

.collapse-content .fa.fa-share-alt:hover {
  color: #0d47a1 !important;
}

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

.card-tag-frecuency {
  color: #fff;
  border: 1px solid;
  border-radius: 0.3rem;
  background: #ff5c03;
  padding: 0.5em;
  margin-left: -75px;
  position: absolute;
}

.card-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
