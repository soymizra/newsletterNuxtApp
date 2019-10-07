<template>
  <div class="container-categories container-fluid d-flex p-3">
    <ul
      v-for="(tag, index) in tags"
      :key="tag.id"
      class="categorie-list align-self-start"
    >
      <li v-if="index == 0 && index <= 10">
        <router-link :to="`/`">All</router-link>
      </li>
      <li v-else>
        <router-link :to="`/category/${tag.slug}`">{{ tag.name }}</router-link>
      </li>
    </ul>
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
.container-categories {
  background: #ff5c03;
  box-shadow: 0 4px 2px -2px gray;
}

.categorie-list li {
  display: inline;
  margin: 1.3em;
}

li a {
  color: #fff;
  text-decoration: none;
}

li a:hover {
  color: #000;
  transition: 0.5s;
}
</style>
