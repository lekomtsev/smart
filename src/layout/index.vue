<template>
  <Header />
  <app-main />
  <Footer />
</template>

<script>
import { Header, Footer, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    Header,
    AppMain,
    Footer
  }
}

</script>
