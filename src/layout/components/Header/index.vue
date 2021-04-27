<template>
  <div class="header">
    <div class="header__logo">
      Logo
    </div>
    <nav class="header__navigation navigation">
      <router-link to="/">Главная</router-link> |
      <router-link to="/about">О нас</router-link> |
      <router-link to="/contacts">Контакты</router-link>
    </nav>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: 'Title Header'
    }
  }
}

</script>

<style lang="scss">
.header {
  height: 150px;
  background: #eee;
}

</style>
