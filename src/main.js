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

Vue.filter('marked', function(string) {
  if (string) return marked(string)
})

Vue.filter('dated', function(digits) {
  var newDate = new Date(digits)
  return dateFormat(newDate, "mmmm dS, yyyy")
})
