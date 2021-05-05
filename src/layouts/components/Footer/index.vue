<template>
  <div class="footer">
    <b-container>
      <b-row>
        <b-col sm="2">
          <div class="footer__logo logo">Logo</div>
        </b-col>
        <b-col sm="5">
          <nav class="footer__menu menu">
            <router-link to="/">Главная</router-link>
            |
            <router-link to="/about">О нас</router-link>
            |
            <router-link to="/dashboard">Личный кабинет</router-link>
          </nav>
        </b-col>
        <b-col sm="3">
          <p>Copyright &copy; All right reserved</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.footer__menu {
}
</style>
