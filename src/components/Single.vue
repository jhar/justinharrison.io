<style lang="sass?indentedSyntax">
@import definitions

.blog-single-view
  margin: 0 auto 100px auto
  max-width: $max_w
  width: 86%

  .post-info
    color: $lightgrey
    font: 12px $raleway

  .italic
    font-style: italic

  h2
    font-family: $raleway
    text-transform: capitalize

  ul
    list-style-type: none
    padding: 0
</style>

<template>
  <div class="blog-single-view">
    <h2>{{ post.title }}</h2>
    <span class="post-info" v-if="post.dateCreated">{{ post.dateCreated | dated  }} | {{ post.category }}</span><br>
    <div>
      {{{ post.content | marked }}}
    </div>
  </div>
</template>

<script>
  import { db } from '../services/firebase'

  export default {
    route: {
      data: function(transition) {
        transition.next({
          postName: transition.to.params.postName
        })
      }
    },
    data() {
      return {
        post: {
          category: '',
          content: '',
          dateCreated: null,
          dateUpdated: null,
          title: ''
        },
        postName: ''
      }
    },
    ready: function() {
      this.$bindAsObject('post', db.ref('/blog/' + this.postName))
    }
  }
</script>

