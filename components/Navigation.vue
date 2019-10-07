<template>
<nav id="nav" class="navbar navbar-expand-lg navbar-light p-3" style="border-bottom: solid rgba(0,0,0,.1) 1px">
        <a class="navbar-brand text-primary" style="font-weight: bold" href="#">[ INSIDE ]</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <!-- <li class="nav-item">
                  <router-link to="/about" class="nav-link">About</router-link>
              </li> -->
              <li v-for="option in menu" class="nav-item" :key="option.title">
                <!-- <a class="nav-link" href="#">{{ option.name }}</a> -->
                <router-link :to="'/category/'+option.slug" class="nav-link">
                  {{ option.name }}
                </router-link>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <ComponentSearch></ComponentSearch>
              <button type="button" class="btn my-2 my-sm-0"> <i class="large material-icons text-primary" style="font-weight: bold">account_circle</i> </button>
              <button type="button" class="btn btn-outline-primary">SPONSORSHIP</button>
            </form>
          </div>
      </nav>
</template>
<script>

import ComponentSearch from '@/components/ComponentSearch.vue'

import axios from 'axios'

export default {
    name: 'Navigation',
    components:{
      ComponentSearch
    },
    data() {
        return {
            // menu: [
            //     {name: 'opción', slug: 'opcion'},
            //     {name: 'opción 2', slug: 'opcion-2'},
            //     {name: 'opción 3', slug: 'opcion-3'}
            // ]
            menu: []
        }
    },
    created() {
        this.getMenu()
    },
    methods: {
        getMenu() {
            const url = process.env.VUE_APP_URL_API_TAGS
            axios.get(url)
                .then(response => {
                    this.menu = response.data
                })
                .catch(error => {
                    alert('Tuvimos un error')
                })
        }
    }
}
</script>