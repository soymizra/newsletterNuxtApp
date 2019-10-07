<template>
  <div class="home">
    <section>
      <div class="container-fluid text-center">
        <h1 class="mt-5">Noticias reales, elegidas por humanos reales</h1>
        <p class="mt-4">
          Noticias, tendencias y enlaces que te ayudarán a mantenerte informado.
        </p>
        <div class="container mt-5">
          <hr />
        </div>
        <div class="row m-5">
          <div
            v-for="newsletter in newsletters"
            :key="newsletter.id"
            class="col-4"
          >
            <cardnewsletter :card_newsletter_data="newsletter" />
            <modalnewsletter :newsletter_subs_data="newsletter" />
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-5">
      <hr />
    </div>
    <section>
      <div class="container-fluid text-center">
        <h1 class="mt-5">Próximo y prometedor</h1>
        <p class="mt-4">
          Si estos boletines alcanzan sus objetivos (o consiguen un patrocinio),
          atraeremos a escritores expertos y los lanzaremos. Vote por todos sus
          favoritos:
        </p>
        <div class="container mt-5">
          <hr />
        </div>
        <div class="row m-5">
          <div
            v-for="next_newsletter in potential_newsletters"
            :key="next_newsletter.id"
            class="col-4"
          >
            <cardnextnewsletter :card_next_newsletter_data="next_newsletter" />
            <votemodalnewsletter
              @updated="update"
              :vote_newsletter_subs_data="next_newsletter"
            />
          </div>
        </div>
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
  name: 'index',
  components: {
    cardnewsletter,
    cardnextnewsletter,
    modalnewsletter,
    votemodalnewsletter
  },
  data() {
    return {
      url_end_point: `${process.env.apiURL}/newsletters`,
      newsletters: [],
      potential_newsletters: []
    }
  },
  created() {
    this.getAllNewsletters()
    this.getNextNewsletters()
    console.log(`${this.newsletters}`)
  },
  methods: {
    getAllNewsletters() {
      const endpoint = this.url_end_point

      axios
        .get(endpoint)
        .then((response) => {
          response.data.forEach((newsletter) => {
            if (newsletter.target <= newsletter.subscribed) {
              this.newsletters.push(newsletter)
            }
          })
        })
        .catch((err) => {
          alert(err)
        })
    },
    getNextNewsletters() {
      const endpoint = this.url_end_point

      axios
        .get(endpoint)
        .then((response) => {
          response.data.forEach((newsletter) => {
            if (newsletter.target > 0) {
              this.potential_newsletters.push(newsletter)
            }
          })
        })
        .catch((err) => {
          alert(err)
        })
    },
    update() {
      this.potential_newsletters = []
      this.getNextNewsletters()
      document.getElementsByTagName('body')[0].classList.remove('modal-open')
      document
        .getElementsByClassName('modal-backdrop fade show')[0]
        .removeAttribute('class')
    }
  }
}
</script>
<style scoped>
p {
  color: #cccccc;
  font-size: 1.3em;
}
</style>
