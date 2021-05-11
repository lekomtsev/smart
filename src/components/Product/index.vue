<template>
  <div class="product">
    <b-container class="product__container">
      <b-card
        :title="product.title"
        :img-src="product.imgSrs"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        v-for="product in products"
        :key="product.title"
      >
        <b-card-text>
          {{product.description}}
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
      products: [
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
    };
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
