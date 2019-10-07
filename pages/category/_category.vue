<template>
  <div class="category">
    <section>
      <div class="container-fluid text-center">
        <h1 class="mt-5">Noticias reales, elegidas por humanos reales</h1>
        <div v-if="newsletters.length > 0" class="mt-4">
          <p>
            Noticias, tendencias y enlaces que te ayudarán a mantenerte
            informado.
          </p>
          <div
            v-for="newsletter in newsletters"
            :key="newsletter.id"
            class="col-4"
          >
            <cardnewsletter :card_newsletter_data="newsletter" />
            <modalnewsletter :newsletter_subs_data="newsletter" />
          </div>
        </div>
        <div v-else class="mb-5 text-center">
          <p class="mt-4 text-center">
            Ups, no hay nada que mostrarte
          </p>
          <img src="/img/not-found.png" />
        </div>
        <div class="container mt-5">
          <hr />
        </div>
      </div>
    </section>
    <section>
      <div class="container-fluid text-center">
        <h1 class="mt-5">Proximo y prometedor</h1>
      </div>
      <div v-if="potential_newsletters.length > 0" class="mt-4 text-center">
        <p class="mt-4 text-center">
          Si estos boletines alcanzan sus objetivos (o consiguen un patrocinio),
          atraeremos a escritores expertos y los lanzaremos. Vote por todos sus
          favoritos:
        </p>
        <div
          v-for="next_newsletter in potential_newsletters"
          :key="next_newsletter.id"
          class="col-4"
        >
          <cardnextnewsletter :card_next_newsletter_data="next_newsletter" />
          <votemodalnewsletter :vote_newsletter_subs_data="next_newsletter" />
        </div>
      </div>
      <div v-else class="mb-5 text-center">
        <p class="mt-4 text-center">
          Ups, no hay nada que mostrarte
        </p>
        <img src="/img/not-found.png" />
      </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import cardnewsletter from '@/components/cardnewsletter'
import cardnextnewsletter from '@/components/cardnextnewsletter'
import modalnewsletter from '@/components/modalnewsletter'
import votemodalnewsletter from '@/components/votemodalnewsletter'
export default {
  name: 'category-page',
  components: {
    cardnewsletter,
    cardnextnewsletter,
    modalnewsletter,
    votemodalnewsletter
  },
  data() {
    return {
      url_endpoint: `${process.env.apiURL}/tags/${this.$route.params.category}?include=newsletters`,
      newsletters: [],
      potential_newsletters: []
    }
  },
  created() {
    this.getTagNewsletters()
  },
  methods: {
    getTagNewsletters() {
      const endpoint = this.url_endpoint

      axios
        .get(endpoint)
        .then((response) => {
          response.data.newsletters.forEach((newsletter) => {
            if (newsletter.target <= 0) {
              this.newsletters.push(newsletter)
            } else {
              this.potential_newsletters.push(newsletter)
            }
          })
        })
        .catch((err) => {
          alert(err)
        })
    }
  }
}
</script>
