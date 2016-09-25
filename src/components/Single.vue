<style lang="sass?indentedSyntax">
.blog-single-view
  margin: 0 auto 100px auto
  max-width: 960px
  width: 86%

  .post-info
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
</style>

<template>
  <div class="blog-single-view">
    <h2>{{ post.title }}</h2>
    <span class="post-info" v-if="post.dateCreated">{{ post.dateCreated | dated  }} {{ post.category }} <span class="italic" v-if="post.dateUpdated">Updated {{ post.dateUpdated | dated  }}</span></span><br>
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

