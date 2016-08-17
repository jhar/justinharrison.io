<style lang="sass?indentedSyntax">
.nav-bar
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  background-color: rgb(25, 25, 25)
  font: 22px 'Ubuntu Mono', monospace
  height: 48px
  margin-bottom: 36px

  .nav-inner-container
    height: 48px
    margin: auto
    max-width: 960px
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

        .nav-bar-link
          color: rgb(230, 230, 230)
          display: block
          height: 24px
          padding: 12px 8px
          text-decoration: none

        .v-link-active
          background-color: rgb(255, 255, 255)
          color: rgb(25, 25, 25)

        .fa-bars
          margin-top: 2px

.nav-panel
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  background-color: rgb(230, 230, 230)
  border: 24px solid black
  font: 28px 'Ubuntu Mono', monospace
  width: 68%
  position: absolute
  left: 16%
  top: 24%
  right: 16%
  height: 250px

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
      box-sizing: border-box

      .nav-panel-link
        color: rgb(25, 25, 25)
        display: block
        text-decoration: none

      .v-link-active
        background-color: rgb(25, 25, 25)
        color: rgb(230, 230, 230)

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
    <div class="nav-inner-container">
      <ul>
        <li class="float-left"><a class="nav-bar-link" href="/">Justin Harrison</a></li>
        <li class="float-right togglable"><a class="nav-bar-link" v-link="{ name: 'CV View' }">cv</a></li>
        <li class="float-right togglable"><a class="nav-bar-link" v-link="{ name: 'Blog List View' }">blog</a></li>
        <li class="float-right togglable"><a class="nav-bar-link" v-link="{ name: 'Home View' }">about</a></li>
        <li class="float-right hamburger"><i v-on:click="togglePanel" class="fa fa-bars fa-inverse fa-2x"></i></li>
      </ul>
    </div>
    <div v-show="showPanel" transition="nav-panel" class="nav-panel">
     <ul>
       <li><a class="nav-panel-link" v-on:click="togglePanel" v-link="{ name: 'Home View' }">About</a></li>
       <li><a class="nav-panel-link" v-on:click="togglePanel" v-link="{ name: 'Blog List View' }">Blog</a></li>
       <li><a class="nav-panel-link" v-on:click="togglePanel" v-link="{ name: 'CV View' }">CV</a></li>
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
      togglePanel() {
        this.showPanel = !this.showPanel
      }
    }
  }
</script>
