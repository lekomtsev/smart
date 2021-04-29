<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__logo">
        Logo
      </div>
      <header-menu class="header__menu"></header-menu>
    </div>
  </header>
</template>

<script>
import HeaderMenu from '../../../components/HeaderMenu/index.vue';

export default {
  name: 'Header',
  components: {
    HeaderMenu,
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
}

</style>
