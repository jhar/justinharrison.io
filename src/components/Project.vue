<style lang="sass?indentedSyntax">
@import definitions

.project
  margin: 0 auto 100px auto
  max-width: $max_w
  width: 86%

  &-info
    color: $lightgrey
    font: 1em $raleway

  .year
    color: black
    font-weight: bold

  h2
    font-family: $raleway
    text-transform: capitalize

  ul
    list-style-type: none
    padding: 0

  img
    max-width: 100%

</style>

<template>
  <div class="project">
    <h2>{{ project.title }}</h2>
    <span class="project-info">{{ project.category }} <span class="year">{{ project.year }}</span></span><br>
    <div>
      {{{ project.content | marked }}}
    </div>
  </div>
</template>

<script>
  import { db } from '../services/firebase'

  export default {
    route: {
      data: function(transition) {
        transition.next({
          projectName: transition.to.params.projectName
        })
      }
    },
    data() {
      return {
        project: {
          category: '',
          content: '',
          dateCreated: null,
          dateUpdated: null,
          title: ''
        },
        projectName: ''
      }
    },
    ready: function() {
      this.$bindAsObject('project', db.ref('/portfolio/' + this.projectName))
    }
  }
</script>
