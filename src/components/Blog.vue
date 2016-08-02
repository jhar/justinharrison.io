<template>
  <div class="blog">
    <ul>
      <li v-for="post in posts | orderBy 'dateCreated' -1" track-by=".key">
        <h3>{{ post.title }}</h3>
        <span>{{ post.category }}</span><br>
        <span>Created: {{ post.dateCreated | dated }}</span><br>
        <span v-if="post.dateUpdated">Updated: {{ post.dateUpdated | dated }}</span><br>
        <button v-if="user.email === 'jhar87@gmail.com'" @click="toggleEditPost(post['.key'])">Edit Post</button>
        <button v-if="user.email === 'jhar87@gmail.com'" @click="deletePost(post['.key'])">Delete Post</button>
        <div>{{{ post.content | marked }}}</div>
      </li>
    </ul>
    <div v-if="user">
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
      <button @click="signIn">Sign In</button>
    </div>
  </div>
</template>

<script>
  import * as firebase from 'firebase'
  import marked from 'marked'

  // Firebase setup
  const config = {
    apiKey: "AIzaSyBvbih18hAFNeR_kptuLck_1iLYbKFTk90",
    authDomain: "justin-harrison.firebaseapp.com",
    databaseURL: "https://justin-harrison.firebaseio.com",
    storageBucket: "justin-harrison.appspot.com"
  }  
  var firebaseApp = firebase.initializeApp(config)
  var db = firebaseApp.database()
  var storage = firebaseApp.storage()  
  const postsRef = db.ref('blog/')

  export default {
    data() {
      return {
        user: null,
        newPost: {},
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
        return newDate;
      }
    },
    firebase: {
      posts: postsRef
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
    }
  }
</script>
