import Vue from 'vue'
import VueFire from 'vuefire'
import App from './components/App.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'
import List from './components/List.vue'
import Single from './components/Single.vue'
import VueRouter from 'vue-router'

Vue.use(VueFire)
Vue.use(VueRouter)

// Register non-router components
Vue.component('nav-view', Nav)
Vue.component('footer-view', Footer)

// Vue Router setup
var router = new VueRouter({
  hashbang: false,
  history: true,
  linkActiveClass: 'active'
})

router.map({
  '/home': {
    name: 'Home View', 
    component: Home 
  },
  '/resume': {
    name: 'Resume View', 
    component: Resume 
  },
  '/blog': {
    name: 'Blog List View', 
    component: List 
  },
  '/blog/:postName': { 
    name: 'Blog Single Post',
    component: Single 
  }
})

router.mode = 'html5'

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
