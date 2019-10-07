<template>
  <div id="">
    <input
    v-if="false"
    class="form-control mr-sm-2" type="text" placeholder="Search"
    v-model="input">
    <button class="btn my-2 my-sm-0" type="button">
    <i class="large material-icons text-primary" style="font-weight: bold">search</i>
    </button>
  </div>
</template>
<script>
export default {
  name: "ComponentSearch",
  data: () => ({
    input: ''
  }),

  methods: {
    showInputSearch () {

    }
  }
}
</script>
<style scoped>
</style>
