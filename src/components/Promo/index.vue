<template>
  <div class="promo">
    <b-carousel
      fade
      indicators>
      <b-carousel-slide
        v-for="slide in slides" :key="slide.caption"
        :caption="slide.caption"
        :img-src="slide.imgSrc"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
// import Button from '@/components/ui/Button/index.vue';

export default {
  name: 'Promo',
  data() {
    return {
      slides: [
        {
          caption: 'First slide',
          imgSrc: 'https://picsum.photos/1024/480/?image=10',
        },
        {
          caption: 'Second slide',
          imgSrc: 'https://picsum.photos/1024/480/?image=12',
        },
        {
          caption: 'Third slide',
          imgSrc: 'https://picsum.photos/1024/480/?image=22',
        },
      ],
    };
  },
  components: {},
  methods: {
    handleModal() {
      this.isActiveModal = !this.isActiveModal;
    },
  },
};
</script>

<style lang="scss">
.promo {
}

.carousel {}

.carousel-item {
  height: 500px;
}

.carousel img {
  max-width: 100%;
}
</style>
