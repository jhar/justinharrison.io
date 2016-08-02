import Vue from 'vue'
import VueFire from 'vuefire'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'
import Blog from './components/Blog.vue'
import VueRouter from 'vue-router'

Vue.use(VueFire)
Vue.use(VueRouter)

// Vue Router setup
var router = new VueRouter({ 
  hashbang: false,
  history: true 
})
router.map({
  '/home': { component: Home },
  '/resume': { component: Resume },
  '/blog': { component: Blog }
})
router.redirect({
  '*': '/home'
})
router.start(App, '#app')
