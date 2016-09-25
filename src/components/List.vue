<style lang="sass?indentedSyntax">
.blog-list-view
  font-family: 'Raleway', monospace
  margin: auto
  max-width: 960px
  width: 86%

  .italic
    font-style: italic

  .date
    color: rgb(103, 103, 103)
    display: block
    font-size: 12px
    width: 100%

  h2
    color: #4874d4
    font-size: 18px
    text-transform: capitalize

  ul
    list-style-type: none
    padding: 0

    .blog-list-link
      text-decoration: none
      width: 100%
</style>

<template>
  <div class="blog-list-view">
    <ul>
      <li v-for="post in posts | orderBy 'dateCreated' -1" track-by=".key">
        <a class="blog-list-link" v-link="{ name: 'Blog Single Post', params: { postName: post['.key'] } }">
          <span class="date">{{ post.dateCreated | dated }}</span>
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

