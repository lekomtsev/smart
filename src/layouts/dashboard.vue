<template>
  <div class="dashboard">
    <DashboardHeader />
    <b-container fluid="xl lg md sm xs">
      <b-row>
        <DashboardNavbar />
        <router-view />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DashboardHeader from './components/DashboardHeader/index.vue';
import DashboardNavbar from './components/DashboardNavbar/index.vue';

export default {
  components: {
    DashboardHeader,
    DashboardNavbar,
  },
};
</script>
