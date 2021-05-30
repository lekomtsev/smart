<template>
  <div class="dashboard">
    <DashboardHeader />
    <div class="container-fluid">
      <b-row>
        <DashboardNavbar />
        <router-view />
      </b-row>
    </div>
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
