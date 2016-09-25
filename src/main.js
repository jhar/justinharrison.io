import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import Admin from './components/Admin.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'
import Portfolio from './components/Portfolio.vue'
import Project from './components/Project.vue'
import List from './components/List.vue'
import Single from './components/Single.vue'

import 'autotrack/lib/plugins/url-change-tracker'
import marked from 'marked'
import dateFormat from 'dateformat'

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

// Map URLs to components
router.map({
  '/home': {
    name: 'Home View', 
    component: Home 
  },
  '/portfolio': {
    name: 'Portfolio View',
    component: Portfolio
  },
  '/portfolio/:projectName': {
    name: 'Portfolio Single Project',
    component: Project
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
  },
  '/admin': {
    name: 'Admin View',
    component: Admin
  }
})

router.mode = 'html5'

router.redirect({
  '*': '/home'
})

router.start(App, '#app')

// Custom filters
Vue.filter('marked', function(string) {
  if (string) return marked(string)
})

Vue.filter('dated', function(digits) {
  var newDate = new Date(digits)
  return dateFormat(newDate, "mmmm dS, yyyy")
})
