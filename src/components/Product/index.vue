<template>
  <div class="product">
    <b-container class="product__container">
      <b-card
        v-for="(news, i) in allNews"
        :key="i"
        :title="news.name"
        :img-src="news.imgSrs"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{ news.description }}
        </b-card-text>
        <b-button :href="`/news/${news.id}`" variant="primary">Смотреть</b-button>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    getProducts() {
      // gitHub https://api.github.com/search/repositories?term=lek&_type=public&q=lek
      // https://community-hacker-news-v1.p.rapidapi.com/user/25172559.json?print=pretty
    },
  },
  mounted() {
  },
  computed: {
    allNews() {
      return this.$store.getters.allNews;
    },
  },
};
</script>

<style>
.product {
  padding: 50px 0;
}

.product__container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
