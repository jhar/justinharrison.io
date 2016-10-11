<style lang="sass?indentedSyntax">
@import definitions

.nav-bar
  +box-sizing(border-box)
  font: 22px $raleway
  height: 48px
  margin: 35px 0 36px 0

  &-title
    color: black
    display: block
    font-size: 28px
    margin-top: 7px
    text-decoration: none

  &-link
    color: rgb(100, 100, 100)
    display: block
    font-size: 16px
    padding: 12px 8px
    text-decoration: none

  &-inner-container
    height: 48px
    margin: auto
    max-width: $max_w
    width: 86%

    ul
      height: 48px
      list-style-type: none
      margin: 0
      padding: 0
      width: 100%

      .float-left
        float: left

      .float-right
        float: right

      li
        height: 48px

        .v-link-active
          color: black

        .fa-bars
          margin-top: 13px

.nav-panel
  +box-sizing(border-box)
  background-color: white
  font: 28px $raleway
  width: 100%
  position: absolute
  left: 0
  top: 119px
  right: 0
  bottom: 42px
  z-index: 1000

  &-link
    color: rgb(25, 25, 25)
    display: block
    text-decoration: none

  ul
    list-style-type: none
    margin: 7% 0
    padding: 0
    width: 100%

    li
      float: none
      height: 48px
      padding: 0 7%
      width: 100%
      text-align: center
      +box-sizing(border-box)

.hamburger
  display: block

.togglable
  display: none

@media only screen and (min-width: 768px)
  .hamburger
    display: none

  .togglable
    display: block

</style>

<template>
  <div class="nav-bar">
    <div class="nav-bar-inner-container">
      <ul>
        <li class="float-left"><a class="nav-bar-title" href="/">JUSTIN HARRISON</a></li>
        <li class="float-right togglable"><a class="nav-bar-link" v-link="{ name: 'Resume View' }">resume</a></li>
        <li class="float-right togglable"><a class="nav-bar-link" v-link="{ name: 'Blog List View' }">blog</a></li>
        <li class="float-right togglable"><a class="nav-bar-link" v-link="{ name: 'Portfolio View' }">portfolio</a></li>
        <li class="float-right togglable"><a class="nav-bar-link" v-link="{ name: 'Home View' }">about</a></li>
        <li class="float-right hamburger"><i v-on:click="togglePanel" class="fa fa-bars fa-lg"></i></li>
      </ul>
    </div>
    <div v-show="showPanel" transition="nav-panel" class="nav-panel">
     <ul>
       <li><a class="nav-panel-link" v-on:click="togglePanel" v-link="{ name: 'Home View' }">About</a></li>
       <li><a class="nav-panel-link" v-on:click="togglePanel" v-link="{ name: 'Portfolio View' }">Portfolio</a></li>
       <li><a class="nav-panel-link" v-on:click="togglePanel" v-link="{ name: 'Blog List View' }">Blog</a></li>
       <li><a class="nav-panel-link" v-on:click="togglePanel" v-link="{ name: 'Resume View' }">Resume</a></li>
     </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showPanel: false
      }
    },
    methods: {
      handleResize() {
        if (window.innerWidth > 768) {
          this.showPanel = false
        }
      },
      togglePanel() {
        this.showPanel = !this.showPanel
      }
    },
    ready() {
      window.addEventListener('resize', this.handleResize)
    }
  }
</script>
