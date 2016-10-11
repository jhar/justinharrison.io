<style lang="sass?indentedSyntax">
@import definitions

.footer
  background-color: white
  border-top-style: double
  position: fixed
  bottom: 0px
  color: rgb(119, 119, 119)
  font: 13px $opensans
  width: 100% 

  &-container
    margin: 12px auto
    max-width: $max_w
    width: 86%

  a
    color: $blue
    text-decoration: none

  &-links
    float: right
</style>

<template>
  <div class="footer">
    <div class="footer-container">
      &copy; 2016 Justin Harrison <span class="footer-links"><a href="https://github.com/jhar">github</a> / <a href="https://www.linkedin.com/in/justinadenharrison">linkedin</a> / <a href="https://twitter.com/j_aden_harrison">twitter</a></span>
    </div>
  </div>
</template>
