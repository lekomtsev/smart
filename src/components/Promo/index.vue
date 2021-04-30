<template>
  <div class="promo">
    <div class="container promo__container">
      <p>Lorem ipsum dolor sit amet. </p>
      <Button class="button__primary" @click.native="handleModal" />
      <div v-if="isActiveModal">Popup</div>
      <b-button @click="handleModal">Button</b-button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button/index.vue';

export default {
  name: 'Promo',
  data() {
    return {
      isActiveModal: false,
    };
  },
  components: {
    Button,
  },
  methods: {
    handleModal() {
      this.isActiveModal = !this.isActiveModal;
    },
  },
};
</script>

<style lang="scss">
.promo {
  height: 300px;
}

.promo__container {
  height: 300px;
  background: indianred;
}
</style>
