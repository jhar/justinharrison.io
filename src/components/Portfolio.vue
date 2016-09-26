<style lang="sass?indentedSyntax">
.my-portfolio
  font-family: 'Raleway', sans-serif
  margin: auto
  max-width: 960px
  width: 86%

  .project-container
    margin: 0 auto
    width: 566px
    height: 436px
    padding: 10px

    .project-link
      display: block
      position: relative
      height: 100%
      width: 100%
      text-decoration: none

      .project-image
        margin: 0 auto
        position: absolute
        z-index: -1
        opacity: 1

      .text-container
        color: white
        height: 100%
        width: 100%
        text-align: center
        opacity: 0
        overflow: hidden

      .text-container:hover
        background-color: rgba(0, 0, 0, 0.5)
        opacity: 1

        .project-title
          font-size: 16px
          text-transform: uppercase
          padding-top: 33%
          font-weight: bold
          letter-spacing: 3px
</style>

<template>
  <div class="my-portfolio">
	<div class="project-container" v-for="project in projects | orderBy 'dateCreated' -1" track-by=".key">
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
