<template>
  <div class="product">
    <b-container class="product__container">
      <b-card
        v-for="product in products"
        :key="product.id"
        :title="product.login"
        :img-src="product.owner.avatar_url"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          {{ product.owner.login }}
        </b-card-text>
        <b-button href="#" variant="primary">Купить</b-button>
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
          title: 'Товар дня 1',
          imgSrs: 'https://picsum.photos/600/300/?image=25',
          description: 'Успей купить лучший товар дня!',
        },
        {
          title: 'Товар дня 2',
          imgSrs: 'https://picsum.photos/600/300/?image=26',
          description: 'Успей купить лучший товар дня!',
        },
        {
          title: 'Товар дня 3',
          imgSrs: 'https://picsum.photos/600/300/?image=27',
          description: 'Успей купить лучший товар дня!',
        },
        {
          title: 'Товар дня 1',
          imgSrs: 'https://picsum.photos/600/300/?image=28',
          description: 'Успей купить лучший товар дня!',
        },
        {
          title: 'Товар дня 2',
          imgSrs: 'https://picsum.photos/600/300/?image=29',
          description: 'Успей купить лучший товар дня!',
        },
        {
          title: 'Товар дня 3',
          imgSrs: 'https://picsum.photos/600/300/?image=30',
          description: 'Успей купить лучший товар дня!',
        },
        {
          title: 'Товар дня 1',
          imgSrs: 'https://picsum.photos/600/300/?image=31',
          description: 'Успей купить лучший товар дня!',
        },
        {
          title: 'Товар дня 2',
          imgSrs: 'https://picsum.photos/600/300/?image=32',
          description: 'Успей купить лучший товар дня!',
        },
        {
          title: 'Товар дня 3',
          imgSrs: 'https://picsum.photos/600/300/?image=33',
          description: 'Успей купить лучший товар дня!',
        },
      ],
      products: [],
    };
  },
  methods: {
    getProducts() {
      fetch('https://api.github.com/search/repositories?term=lek&_type=public&q=lek')
        .then((response) => {
          if (response.status !== 200) {
            console.warn(`Looks like there was a problem.
                Status Code:  + ${response.status}`);
            return;
          }
          // Examine the text in the response
          response.json()
            .then((data) => {
              console.warn(data);
              this.products = data.items;
            });
        })
        .catch((err) => {
          console.warn('Fetch Error :-S', err);
        });
    },
  },
  mounted() {
    this.getProducts();
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
