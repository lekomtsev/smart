<template>
  <div>
    <Header></Header>
    <!-- Основная секция, скорее всего здесь будет что-то наподобие лендинга -->
    <router-view/>
    <!-- end Основная секция, скорее всего здесь будет что-то наподобие лендинга -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue';
import Footer from './components/Footer/index.vue';

export default {
  name: 'defaultLayout',
  components: {
    Header,
    Footer,
  },
};
</script>
