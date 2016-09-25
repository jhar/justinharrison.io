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

  .discreet
    border-width: 0
    bottom: 50
    height: 32px
    position: absolute
    right: 0
    width: 32px

  .user-bar
    ul
      list-style-type: none
      padding: 0

      li
        display: inline
</style>

<template>
  <div class="blog-single-view">
    <h2>{{ post.title }}</h2>
    <span class="post-info" v-if="post.dateCreated">{{ post.dateCreated | dated  }} {{ post.category }} <span class="italic" v-if="post.dateUpdated">Updated {{ post.dateUpdated | dated  }}</span></span><br>
    <div v-if="user">
      <button v-if="user.email === admin" @click="toggleEditPost(post['.key'])">Edit Post</button>
      <button v-if="user.email === admin" @click="deletePost(post['.key'])">Delete Post</button>
    </div>
    <div>
      {{{ post.content | marked }}}
    </div>
    <div class="user-bar" v-if="user">
      <ul>
        <li v-if="user.email">{{user.email}}</li>
        <li v-if="user.email === admin">
          <button @click="toggleCreatePost">Create Post</button>
        </li>
        <li>
          <button v-on:click="signOut">Sign Out</button>
        </li>
      </ul>
      <form v-if="user.email === admin && showCreatePost === true" @submit.prevent="setPost">
        <input v-model="newPost.title" placeholder="Post title"><br>
        <input v-model="newPost.category" placeholder="Post category"><br>
        <textarea v-model="newPost.content" placeholder="Post content"></textarea><br>
        <input v-model="newPost.key" placeholder="Pretty url"><br>
        <button>Add Post</button>
      </form>
      <form v-if="user.email === admin && showEditPost === true" @submit.prevent="setPost">
        <input v-model="newPost.title"><br>
        <input v-model="newPost.category"><br>
        <textarea v-model="newPost.content"></textarea><br>
        <input v-model="newPost.key"><br>
        <button>Submit Edit</button>
      </form>
    </div>
    <div v-else>
      <input class="discreet" @keyup.esc="signIn">
    </div>
  </div>
</template>

<script>
  import * as firebase from 'firebase'
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
        admin: 'justinadenharrison@gmail.com',
        user: null,
        loaded: false,
        newPost: {},
        post: {
          category: '',
          content: '',
          dateCreated: null,
          dateUpdated: null,
          title: ''
        },
        postName: '',
        provider: new firebase.auth.GoogleAuthProvider(),
        showCreatePost: false,
        showEditPost: false
      }
    },
    created() {
      // Get current user
      var that = this;
      firebase.auth().onAuthStateChanged(function(current) {
        if (current) {
          that.user = current;
        } else {
          that.user = null;
        }
      });
    },
    methods: {
      setPost() {
        var currentDate = Date.now();
        var setData = { title: this.newPost.title, category: this.newPost.category, content: this.newPost.content };
        // Check if the post has already been created
        if (this.newPost.dateCreated) {
          setData.dateCreated = this.newPost.dateCreated;
          setData.dateUpdated = currentDate;
        } else {
          setData.dateCreated = currentDate;
        }
        db.ref('blog/' + this.newPost.key).set(setData);
        // Clear our state
        this.newPost = {};
        this.showCreatePost = false;
        this.showEditPost = false;
      },
      deletePost(key) {
        db.ref('/blog').child(key).remove();
      },
      signIn() {
        firebase.auth().signInWithRedirect(this.provider);
      },
      signOut() {
        firebase.auth().signOut().then(function() {
          // Sign-out successful
          console.log("Sign out was successful");
        }, function(error) {
          // An error happened
          console.log("A sign out error happened");
        });
      },
      toggleCreatePost() {
        this.showCreatePost = !this.showCreatePost;
      },
      toggleEditPost(key) {
        // Load post to edit into form
        var that = this;
        db.ref('/blog').child(key).once('value').then(function(snap) {
          that.newPost.title = snap.val().title;
          that.newPost.category = snap.val().category;
          that.newPost.content = snap.val().content;
          that.newPost.key = snap.key;
          that.newPost.dateCreated = snap.val().dateCreated;
        });
        // Show form
        this.showEditPost = !this.showEditPost;
      }
    },
    ready: function() {
      this.$bindAsObject('post', db.ref('/blog/' + this.postName))
      this.loaded = true
    }
  }
</script>

