<style lang="sass?indentedSyntax">
.blog-single-view
  margin: auto
  max-width: 960px
  width: 86%

  .post-info
    color: #676767
    font-family: 'Open Sans', sans-serif
    font-size: 10px

  .italic
    font-style: italic

  h3
    font-family: 'Open Sans', sans-serif
    text-transform: capitalize

  p
    font-family: 'Merriweather', serif
    color: #676767
    font-size: 14px

  ul
    list-style-type: none
    padding: 0

  .discreet
    border-width: 0
    bottom: 0
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
    <h3>{{ post.title }}</h3>
    <span class="post-info">{{ post.dateCreated | dated  }} {{ post.category }} <span class="italic" v-if="post.dateUpdated">Updated {{ post.dateUpdated | dated  }}</span></span><br>
    <div v-if="user">
      <button v-if="user.email === 'jhar87@gmail.com'" @click="toggleEditPost(post['.key'])">Edit Post</button>
      <button v-if="user.email === 'jhar87@gmail.com'" @click="deletePost(post['.key'])">Delete Post</button>
    </div>
    <div>
      {{{ post.content | marked }}}
    </div>
    <div class="user-bar" v-if="user">
      <ul>
        <li v-if="user.email">{{user.email}}</li>
        <li v-if="user.email === 'jhar87@gmail.com'">
          <button @click="toggleCreatePost">Create Post</button>
        </li>
        <li>
          <button v-on:click="signOut">Sign Out</button>
        </li>
      </ul>
      <form v-if="user.email === 'jhar87@gmail.com' && showCreatePost === true" @submit.prevent="setPost">
        <input v-model="newPost.title" placeholder="Post title"><br>
        <input v-model="newPost.category" placeholder="Post category"><br>
        <textarea v-model="newPost.content" placeholder="Post content"></textarea><br>
        <input v-model="newPost.key" placeholder="Pretty url"><br>
        <button>Add Post</button>
      </form>
      <form v-if="user.email === 'jhar87@gmail.com' && showEditPost === true" @submit.prevent="setPost">
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
  import marked from 'marked'
  import dateFormat from 'dateformat'
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
        user: null,
        newPost: {},
        post: {
          category: '',
          content: '',
          dateCreated: 0,
          dateUpdated: 0,
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
    filters: {
      marked: marked,
      dated(digits) {
        var newDate = new Date(digits);
        return dateFormat(newDate, "mmmm dS, yyyy");
      }
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
        postsRef.child(key).remove();
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
        postsRef.child(key).once('value').then(function(snap) {
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
    }
  }
</script>

