<style lang="sass?indentedSyntax">
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
