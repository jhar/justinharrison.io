<style lang="sass?indentedSyntax">
.blog-list-view
  margin: auto
  max-width: 960px
  width: 86%

  .italic
    font-style: italic

  h3
    font-family: 'Open Sans', sans-serif
    text-transform: capitalize

  ul
    list-style-type: none
    padding: 0
</style>

<template>
  <div class="blog-list-view">
    <ul>
      <li v-for="post in posts | orderBy 'dateCreated' -1" track-by=".key">
        <a v-link="{ name: 'Blog Single Post', params: { postName: post['.key'] } }">
          <h3>{{ post.title }}</h3>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { db } from '../services/firebase'  

  const postsRef = db.ref('blog/')

  export default {
    firebase: {
      posts: postsRef
    }
  }
</script>

