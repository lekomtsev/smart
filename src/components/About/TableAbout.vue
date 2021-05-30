<template>
  <b-container>
    Table counter: <strong>{{ counter }}</strong><br>
    <b-button variant="primary" @click="changeCounter">Кнопка</b-button>

    <br>

    <table class="table mt-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="people in tableData" :key="people.id">
          <td>{{ people.id }}</td>
          <td>{{ people.name }}</td>
          <td>{{ people.phone }}</td>
        </tr>
      </tbody>
    </table>
  </b-container>
</template>

<script>
export default {
  name: 'TableAbout',
  data() {
    return {
    };
  },
  methods: {
    changeCounter() {
      // this.dataTable.counter += 1;
      // this.$store.commit('increment');
      // console.log(this.$store, 'this.$store');
      this.$store.dispatch('changeTableData');
    },
  },
  computed: {
    counter() {
      return this.$store.state.Counter.counter;
    },
    tableData() {
      console.log(this.$store.getters, 'this.$store.getters');
      return this.$store.getters.computedTableData;
    },
  },
};
</script>
