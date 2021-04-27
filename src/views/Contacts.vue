<template>
  <div class="contacts">
    <h1>Страница Контакты</h1>
    <div>{{}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['allPosts']),
  async mounted () {
    // console.log(allPosts, 'allPosts')
    // this.$store.dispatch('fetchPosts')
  }
}
</script>
