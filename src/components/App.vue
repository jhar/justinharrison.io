<style lang="sass?indentedSyntax">
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

.top-bar
  background-color: rgb(15, 15, 15)
  color: rgb(241, 241, 241)
  font-family: 'Open Sans', sans-serif
  height: 48px
  
  .my-name
    font-size: 24px
    padding: 12px 24px
    text-transform: uppercase

  ul
    display: inline
    float: right
    list-style-type: none

    li
      float: left
      margin-right: 20px
      
      a, a:hover, a:visited, a:link, a:active
        text-decoration: none
        color: rgb(241, 241, 241)
</style>

<template>
  <div class="top-bar">
    <span class="my-name">Justin Harrison</span>
    <ul>
      <li><a v-link="'home'">Home</a></li>
      <li><a v-link="'blog'">Blog</a></li>
      <li><a v-link="'resume'">Resume</a></li>
    </ul>
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>
