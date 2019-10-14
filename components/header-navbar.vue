<template>
  <div class="navbar navbar-expand-lg navbar-light navbar-header p-3 shadow-sm">
    <a class="navbar-brand brand" href="/">
      <b>[INSIDE]</b>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- collapse -->
    <div class="navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
        <ul
          v-for="(tag, index) in tags"
          :key="tag.id"
          class="navbar-nav ml-auto"
        >
          <li v-if="index == 0 && index <= 10">
            <router-link :to="`/`" class="nav-link">All</router-link>
          </li>
          <li v-else>
            <router-link :to="`/category/${tag.slug}`" class="nav-link">{{ tag.name }}</router-link>
          </li>
        </ul>
        <a class="nav-item nav-link ml-5" href="#">
          <i class="fas fa-search navbar-icon"></i>
        </a>
        <router-link class="nav-item nav-link ml-5" to="/auth/login">
          <i class="far fa-user navbar-icon"></i>
        </router-link>
        <a class="btn-sponsorship ml-5">SPONSORSHIP</a>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'categories-navbar',
  data() {
    return {
      url_endpoint: `${process.env.apiURL}/tags`,
      tags: []
    }
  },
  created() {
    this.getTags()
  },
  methods: {
    getTags() {
      const endpoint = this.url_endpoint
      axios
        .get(endpoint)
        .then((response) => {
          this.tags = response.data
        })
        .catch((err) => {
          alert(err)
        })
    }
  }
}
</script>
<style scoped>
.navbar-header {
  background: #fff !important;
}

.brand {
  font-size: 2em;
  font-weight: 800;
  color: #ff5c03;
}

.navbar-icon {
  font-size: 1.8em;
  color: #ff5c03;
}

.btn-sponsorship {
  color: #ff5c03 !important;
  padding: 0.6em;
  border: 1px solid;
  border-color: #ff5c03;
  border-radius: 0.25rem;
}

.btn-sponsorship:hover {
  color: #fff !important;
  background: #ff5c03;
  transition: 0.5s;
}
</style>
