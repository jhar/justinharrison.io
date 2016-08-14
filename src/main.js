import Vue from 'vue'
import VueFire from 'vuefire'
import App from './components/App.vue'
import Nav from './components/Nav.vue'
import Home from './components/Home.vue'
import CV from './components/CV.vue'
import List from './components/List.vue'
import Single from './components/Single.vue'
import VueRouter from 'vue-router'

Vue.use(VueFire)
Vue.use(VueRouter)

// Register non-router components
Vue.component('nav-view', Nav)

// Vue Router setup
var router = new VueRouter({
  hashbang: false
})

router.map({
  '/home': {
    name: 'Home View', 
    component: Home 
  },
  '/cv': {
    name: 'CV View', 
    component: CV 
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

router.redirect({
  '*': '/home'
})

router.start(App, '#app')
