<template>
  <div class="product">
    <b-container class="product__container">
      <b-card
        v-for="(news, i) in productsTest"
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
  data() {
    return {
      productsTest: [
        {
          id: '1',
          title: 'Товар дня 1',
          imgSrs: 'https://picsum.photos/600/300/?image=25',
          description: 'Успей купить лучший товар дня!',
        },
        {
          id: '2',
          title: 'Товар дня 2',
          imgSrs: 'https://picsum.photos/600/300/?image=26',
          description: 'Успей купить лучший товар дня!',
        },
        {
          id: '3',
          title: 'Товар дня 3',
          imgSrs: 'https://picsum.photos/600/300/?image=27',
          description: 'Успей купить лучший товар дня!',
        },
        {
          id: '4',
          title: 'Товар дня 1',
          imgSrs: 'https://picsum.photos/600/300/?image=28',
          description: 'Успей купить лучший товар дня!',
        },
        {
          id: '5',
          title: 'Товар дня 2',
          imgSrs: 'https://picsum.photos/600/300/?image=29',
          description: 'Успей купить лучший товар дня!',
        },
        {
          id: '6',
          title: 'Товар дня 2',
          imgSrs: 'https://picsum.photos/600/300/?image=31',
          description: 'Успей купить лучший товар дня!',
        },
      ],
      allNews: [],
    };
  },
  methods: {
    getProducts() {
      // gitHub https://api.github.com/search/repositories?term=lek&_type=public&q=lek
      // https://community-hacker-news-v1.p.rapidapi.com/user/25172559.json?print=pretty
    },
  },
  mounted() {
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
