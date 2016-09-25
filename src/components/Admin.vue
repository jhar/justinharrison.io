<style lang="sass?indentedSyntax">
.admin-page,
input,
textarea,
keygen,
select,
button
  font-family: 'Raleway', sans-serif

button:focus
  outline: 0

.admin-page
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

  .top-bar
    display: flex
    height: 48px
    flex-flow: row wrap;
    justify-content: flex-end;
    margin-bottom: 12px

    .top-button
      background-color: #4874d4
      border: 5px solid white
      border-radius: 40px
      color: white
      flex: 1 33%
      font-size: 14px

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

    form
      margin-bottom: 48px
      width: 100%

      input,
      textarea
        display: block
        font-size: 14px
        margin: 0 auto 18px auto
        width: 100%

      input
        height: 24px

      textarea
        height: 500px
</style>

<template>
  <div class="admin-page">
    <div v-if="user && user.email === 'justinadenharrison@gmail.com'">
      

      <div class="top-bar">
        <button class="top-button" v-on:click="toggleCreatePost">New Blog Post</button>
        <button class="top-button" v-on:click="toggleCreateProject">New Portfolio Project</button>
        <button class="top-button" v-on:click="signOut">Sign Out</button>
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
          <li v-for="project in projects | orderBy 'dateCreated' -1" track-by=".key">
            <span @click="toggleEditProject(project['.key'])">{{ project['.key'] }}</span>
          </li>
        </ul>

      </div>

      <div class="admin-editor">

        <!-- Form for creating new blog posts -->
        <form v-if="showCreatePost === true" @submit.prevent="setPost">
          <input v-model="newPost.title" placeholder="Post title">
          <input v-model="newPost.category" placeholder="Post category">
          <textarea v-model="newPost.content" placeholder="Post content"></textarea
          <input v-model="newPost.key" placeholder="Pretty url">
          <button>Add Post</button>
          <button type="button" @click="resetState">Cancel</button>
        </form>

        <!-- Form for editing blog posts -->
        <form v-if="showEditPost === true" @submit.prevent="setPost">
          <input v-model="newPost.title">
          <input v-model="newPost.category">
          <textarea v-model="newPost.content"></textarea>
          <input v-model="newPost.key">
          <button>Submit Edit</button>
          <button @click="deletePost(post['.key'])">Delete Post</button>
        </form>

        <!-- Form for creating new portfolio projects -->
        <form v-if="showCreateProject === true" @submit.prevent="setProject">
          <input v-model="newProject.title" placeholder="Project title">
          <input v-model="newProject.category" placeholder="Project category">
          <textarea v-model="newProject.content" placeholder="Project content"></textarea
          <input v-model="newProject.key" placeholder="Pretty url">
          <button>Add Project</button>
          <button type="button" @click="resetState">Cancel</button>
        </form>

        <!-- Form for editing portfolio projects -->
        <form v-if="showEditProject === true" @submit.prevent="setProject">
          <input v-model="newProject.title">
          <input v-model="newProject.category">
          <textarea v-model="newProject.content"></textarea>
          <input v-model="newProject.key">
          <button>Submit Edit</button>
          <button @click="deleteProject(project['.key'])">Delete Project</button>
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
  const projsRef = db.ref('portfolio/')

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
        newProject: {},
        provider: new firebase.auth.GoogleAuthProvider(),
        showCreatePost: false,
        showEditPost: false,
        showCreateProject: false,
        showEditProject: false,
        user: null
      }
    },
    firebase: {
      posts: postsRef,
      projects: projsRef
    },
    methods: {
      deletePost(key) {
        db.ref('/blog').child(key).remove()
      },
      deleteProject(key) {
        db.ref('/portfolio').child(key).remove()
      },
      resetState() {
        this.newPost = {}
        this.newProject = {}
        this.showCreatePost = false
        this.showEditPost = false
        this.showCreateProject = false
        this.showEditProject = false
      },
      setPost() {
        var currentDate = Date.now()
        var setData = { title: this.newPost.title, category: this.newPost.category, content: this.newPost.content }
        // Check if the post has already been created
        if (this.newPost.dateCreated) {
          setData.dateCreated = this.newPost.dateCreated
          setData.dateUpdated = currentDate
        } else {
          setData.dateCreated = currentDate
        }
        db.ref('blog/' + this.newPost.key).set(setData)
        // Clear our state
        this.resetState()
      },
      setProject() {
        var currentDate = Date.now()
        var setData = { title: this.newProject.title, category: this.newProject.category, content: this.newProject.content }
        // Check if the project has already been created
        if (this.newProject.dateCreated) {
          setData.dateCreated = this.newProject.dateCreated
          setData.dateUpdated = currentDate
        } else {
          setData.dateCreated = currentDate
        }
        db.ref('portfolio/' + this.newProject.key).set(setData)
        // Clear our state
        this.resetState()
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
        this.resetState()
        this.showCreatePost = true
      },
      toggleEditPost(key) {
        this.resetState()
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
     },
     toggleCreateProject() {
       this.resetState()
       this.showCreateProject = true
     },
     toggleEditProject() {
        this.resetState()
        // Load project to edit into form
        var that = this;
        db.ref('/portfolio').child(key).once('value').then(function(snap) {
          that.newProject.title = snap.val().title;
          that.newProject.category = snap.val().category;
          that.newProject.content = snap.val().content;
          that.newProject.key = snap.key;
          that.newProject.dateCreated = snap.val().dateCreated;
        });
        // Show form
        this.showEditProject = true
     }
    }
  }
</script>
