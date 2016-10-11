<style lang="sass?indentedSyntax">
@import url(https://fonts.googleapis.com/css?family=Raleway)
@import url(https://fonts.googleapis.com/css?family=Open+Sans)
@import definitions

p
  font: 16px $opensans
  color: $lightgrey
</style>

<template>
  <div>
    <nav-view></nav-view>
    <router-view></router-view>
    <footer-view></footer-view>
  </div>
</template>
