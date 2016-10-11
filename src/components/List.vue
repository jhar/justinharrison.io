<style lang="sass?indentedSyntax">
@import definitions

.blog-list
  font-family: $raleway
  margin: auto
  max-width: $max_w
  width: 86%

  &-link
    text-decoration: none
    width: 100%

  .italic
    font-style: italic

  .date
    color: rgb(103, 103, 103)
    display: block
    font-size: 12px
    width: 100%

  h2
    color: $blue
    font-size: 18px
    text-transform: capitalize

  ul
    list-style-type: none
    padding: 0
</style>

<template>
  <div class="blog-list">
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

