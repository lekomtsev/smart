<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__logo logo">Logo</div>
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
}

.header__container {
  display: flex;
  align-items: center;
  height: 100px;
}

.header__logo {
  margin-right: 50px;
}

.header__menu {
  flex-grow: 1;
}

</style>
