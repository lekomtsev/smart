export default {
  state: {
    counter: 0,
    tableData: [
      {
        id: 1,
        name: 'Alex',
        phone: '8 909 123 4567',
      },
      {
        id: 2,
        name: 'Mike',
        phone: '8 910 321 4567',
      },
      {
        id: 3,
        name: 'Bob',
        phone: '8 888 333 4567',
      },
    ],
  },
  mutations: {
    increment(state) {
      state.counter += 1;
    },
  },
  actions: {
    changeTableData(context, payload) {
      console.log(context, payload);
      setTimeout(() => {
        context.commit('increment', payload);
      }, 1000);
    },
  },
  getters: {
    computedTableData(state) {
      const item = {
        id: 4,
        name: 'Nike',
        phone: '8 333 333 4567',
      };

      state.tableData.push(item);

      return state.tableData;
    },
  },
};
