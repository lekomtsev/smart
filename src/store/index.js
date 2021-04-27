import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from '../App'
// Modules
import post from './modules/post'

const store = createStore({
  modules: {
    post
  }
})

const app = createApp(App)
export default app.use(store)
