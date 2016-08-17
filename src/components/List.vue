<style lang="sass?indentedSyntax">
.blog-list-view
  margin: auto
  max-width: 960px
  width: 86%

  .italic
    font-style: italic

  h2
    font-family: 'Ubuntu Mono', monospace
    text-transform: capitalize

  ul
    list-style-type: none
    padding: 0

    .blog-list-link
      color: #4874d4
      text-decoration: none
</style>

<template>
  <div class="blog-list-view">
    <ul>
      <li v-for="post in posts | orderBy 'dateCreated' -1" track-by=".key">
        <a class="blog-list-link" v-link="{ name: 'Blog Single Post', params: { postName: post['.key'] } }">
          <h2>{{ post.title }}</h2>
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

