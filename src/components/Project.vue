<style lang="sass?indentedSyntax">
.project-view
  margin: 0 auto 100px auto
  max-width: 960px
  width: 86%

  .project-info
    color: #676767
    font: 12px 'Raleway', sans-serif

  .italic
    font-style: italic

  h2
    font-family: 'Raleway', monospace
    text-transform: capitalize

  p
    font: 16px 'Raleway', sans-serif
    color: #676767

  ul
    list-style-type: none
    padding: 0

  img
    max-width: 100%

</style>

<template>
  <div class="project-view">
    <h2>{{ project.title }}</h2>
    <span class="project-info" v-if="project.dateCreated">{{ project.dateCreated | dated  }} {{ project.category }} <span class="italic" v-if="project.dateUpdated">Updated {{ project.dateUpdated | dated  }}</span></span><br>
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
