<template>
  <div class="home">
    <Promo />
    <Product />
  </div>
</template>

<script>
import Promo from '@/components/Promo/index.vue';
import Product from '@/components/Product/index.vue';

export default {
  name: 'Home',
  components: {
    Promo,
    Product,
  },
};
</script>
