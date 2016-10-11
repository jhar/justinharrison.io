<style lang="sass?indentedSyntax">
@import definitions

.my-portfolio
  font-family: $raleway
  margin: auto
  max-width: $max_w
  width: 86%

  .project-container
    margin: 10px auto 48px auto
    width: 100%
    position: relative
    padding-bottom: 77%

    .project-link
      display: block
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      text-decoration: none

      .project-image
        width: 100%
        height: 100%
        z-index: -1
        opacity: 1

      .text-container
        text-align: center

        .project-title
          color: black
          font-size: 17px
          font-weight: bold
          letter-spacing: 2px
          margin: 9px
          text-transform: uppercase

  @media only screen and (min-width: 768px)
    .project-container
      width: 45%
      margin: 2%
      margin-bottom: 48px
      float: left
      padding-bottom: 37%

  @media only screen and (min-width: 1024px)
    .project-container
      width: 31%
      margin: 1%
      margin-bottom: 48px
      float: left
      padding-bottom: 24%

.my-portfolio::after
  content: ""
  display: block
  height: 96px
  clear: both
</style>

<template>
  <div class="my-portfolio">
  	<div class="project-container" v-for="project in projects | orderBy 'dateUpdated' -1" track-by=".key">
  	  <a class="project-link" v-link="{ name: 'Portfolio Single Project', params: { projectName: project['.key'] } }">
  	    <img class="project-image" :src="project.featured">
  	    <div class="text-container">
  	     <p class="project-title">{{ project.title }}</p>
  	    </div>
  	  </a>
  	</div>
  </div>
</template>

<script>
  import { db } from '../services/firebase'  

  const projsRef = db.ref('portfolio/')

  export default {
    firebase: {
      projects: projsRef
    }
  }
</script>
