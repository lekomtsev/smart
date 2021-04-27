export default {
  actions: {
    fetchPosts (ctx) {
      const posts = ['1', '2', '3', '4', '5']
      ctx.commit('updatePosts', posts)
    }
  },
  mutations: {
    updatePosts (state, posts) {
      console.log(state, posts)
      state.posts = posts
    }
  },
  state: {
    posts: []
  },
  getters: {
    allPosts (state) {
      return state.posts
    }
  }
}
