<style lang="sass?indentedSyntax">
.nav-bar
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgb(25, 25, 25)
  font-family: 'Open Sans', sans-serif
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

</style>

<template>
  <div class="nav-bar">
    <div class="nav-inner-container">
      <ul>
        <li class="float-left"><a class="nav-bar-link" href="/">Justin Harrison</a></li>
        <li class="float-right"><a class="nav-bar-link" v-link="{ name: 'CV View' }">CV</a></li>
        <li class="float-right"><a class="nav-bar-link" v-link="{ name: 'Blog List View' }">Blog</a></li>
        <li class="float-right"><a class="nav-bar-link" v-link="{ name: 'Home View' }">About</a></li>
      </ul>
    </div>
  </div>
</template>
