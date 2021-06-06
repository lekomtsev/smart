export default {
  state: {
    allNews: [
      {
        id: '1',
        title: 'Товар дня 1',
        imgSrs: 'https://picsum.photos/600/300/?image=25',
        description: 'Успей купить лучший товар дня!',
        isBreaking: true,
      },
      {
        id: '2',
        title: 'Товар дня 2',
        imgSrs: 'https://picsum.photos/600/300/?image=26',
        description: 'Успей купить лучший товар дня!',
        isBreaking: false,
      },
      {
        id: '3',
        title: 'Товар дня 3',
        imgSrs: 'https://picsum.photos/600/300/?image=27',
        description: 'Успей купить лучший товар дня!',
        isBreaking: true,
      },
      {
        id: '4',
        title: 'Товар дня 1',
        imgSrs: 'https://picsum.photos/600/300/?image=28',
        description: 'Успей купить лучший товар дня!',
        isBreaking: true,
      },
      {
        id: '5',
        title: 'Товар дня 2',
        imgSrs: 'https://picsum.photos/600/300/?image=29',
        description: 'Успей купить лучший товар дня!',
        isBreaking: true,
      },
      {
        id: '6',
        title: 'Товар дня 2',
        imgSrs: 'https://picsum.photos/600/300/?image=31',
        description: 'Успей купить лучший товар дня!',
        isBreaking: true,
      },
    ],
    testMessage: 'testMessage',
  },
  mutations: {},
  actions: {},
  // TODO: сделать фильтр по юзеру
  getters: {
    allNews(state, getters) {
      console.log(state, getters, 'state');
      return state.allNews;
    },
    breakingNews(state) {
      console.log(state);
      // return state.allNews.filter((news) => news.isBreaking);
    },
  },
};
