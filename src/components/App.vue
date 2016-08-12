<style lang="sass?indentedSyntax">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
@import url(https://fonts.googleapis.com/css?family=Merriweather);

.top-bar
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: rgb(25, 25, 25)
  color: rgb(230, 230, 230)
  font-family: 'Open Sans', sans-serif
  height: 48px
  margin-bottom: 36px
  padding: 12px 0

  .nav-container
    margin: auto
    max-width: 960px
    width: 86%

    ul
      display: inline
      list-style-type: none

      .float-left
        float: left

      .float-right
        float: right

      li
        height: 100%
        margin-right: 20px
      
        a, a:hover, a:visited, a:link, a:active
          text-decoration: none
          color: rgb(230, 230, 230)

        a:hover
          font-weight: bold

</style>

<template>
  <div>
    <div class="top-bar">
      <div class="nav-container">
        <ul>
          <li class="float-left"><a v-link="'home'">Justin Harrison</a></li>
          <li class="float-right"><a v-link="'resume'">CV</a></li>
          <li class="float-right"><a v-link="'blog'">Blog</a></li>
        </ul>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
