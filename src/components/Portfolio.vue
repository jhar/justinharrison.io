<style lang="sass?indentedSyntax">
.my-portfolio
  font-family: 'Raleway', sans-serif
  margin: auto
  max-width: 960px
  width: 86%

  .project-container
    margin: 10px auto
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
        position: absolute
        z-index: -1
        opacity: 1

      .text-container
        width: 100%
        height: 100%
        position: absolute
        text-align: center
        opacity: 0

      .text-container:hover
        background-color: rgba(0, 0, 0, 0.5)
        opacity: 1

        .project-title
          color: white
          font-size: 16px
          text-transform: uppercase
          padding-top: 33%
          font-weight: bold
          letter-spacing: 3px

  @media only screen and (min-width: 768px)
    .project-container
      width: 45%
      margin: 2%
      float: left
      padding-bottom: 37%

  @media only screen and (min-width: 1024px)
    .project-container
      width: 31%
      margin: 1%
      float: left
      padding-bottom: 24%
</style>

<template>
  <div class="category-nav">
    
  </div>
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
