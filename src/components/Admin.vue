<style lang="sass?indentedSyntax">
.admin-page
  font-family: 'Raleway', sans-serif
  margin: auto
  max-width: 960px
  width: 86%

  .not-authorized
    margin-top: 38%
    text-align: center
    width: 100%

    button
      background-color: #4874d4
      border: none
      color: white
      font-size: 16px
      margin: 0 auto
      padding: 15px 32px
      text-align: center
      text-decoration: none

  .admin-tree
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    display: inline-block
    float: left
    width: 32%

    ul
      list-style-type: none
      padding: 0

      span
        border-bottom: 1px solid black
        font-size: 12px
        width: 100%

  .admin-editor
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    display: inline-block
    float: right
    width: 68%
</style>

<template>
  <div class="admin-page">
    <div v-if="user && user.email === 'justinadenharrison@gmail.com'">
      

      <div class="top-bar">
        <button v-on:click="toggleCreatePost">Create New Post</button>
        <button v-on:click="signOut">Sign Out</button>
      </div>

      <div class="admin-tree">
        <h5>Blog Posts</h5>
        <ul>
          <li v-for="post in posts | orderBy 'dateCreated' -1" track-by=".key">
            <span @click="toggleEditPost(post['.key'])">{{ post['.key'] }}</span>
          </li>
        </ul>
        <h5>Portfolio Projects</h5>
        <ul>
          <li>
          </li>
        </ul>
      </div>

      <div class="admin-editor">

        <form v-if="showCreatePost === true" @submit.prevent="setPost">
          <input v-model="newPost.title" placeholder="Post title"><br>
          <input v-model="newPost.category" placeholder="Post category"><br>
          <textarea v-model="newPost.content" placeholder="Post content"></textarea><br>
          <input v-model="newPost.key" placeholder="Pretty url"><br>
          <button>Add Post</button>
          <button type="button" @click="cancelNewPost">Cancel</button>
        </form>

        <form v-if="showEditPost === true" @submit.prevent="setPost">
          <input v-model="newPost.title"><br>
          <input v-model="newPost.category"><br>
          <textarea v-model="newPost.content"></textarea><br>
          <input v-model="newPost.key"><br>
          <button>Submit Edit</button>
          <button @click="deletePost(post['.key'])">Delete Post</button>
        </form>
      </div>
      
    </div>
    <div v-else class="not-authorized">
      <button v-on:click="signIn">Sign In</button>
    </div>
  </div>
</template>

<script>
  import * as firebase from 'firebase'
  import { db } from '../services/firebase'

  const postsRef = db.ref('blog/')
  // const projsRef = db.ref('portfolio/')

  export default {
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
    data() {
      return {
        newPost: {},
        provider: new firebase.auth.GoogleAuthProvider(),
        showCreatePost: false,
        showDelete: false,
        showEditPost: false,
        user: null
      }
    },
    firebase: {
      posts: postsRef
    },
    methods: {
      cancelNewPost() {
        this.newPost = {}
        this.showCreatePost = false
      },
      deletePost(key) {
        db.ref('/blog').child(key).remove();
      },
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
        this.newPost = {}
        this.showCreatePost = false
        this.showEditPost = false
        this.showDelete = false
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
        this.newPost = {}
        this.showEditPost = false
        this.showCreatePost = true
      },
      toggleEditPost(key) {
        this.newPost = {}
        this.showCreatePost = false
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
        this.showEditPost = true
     }
    }
  }
</script>
