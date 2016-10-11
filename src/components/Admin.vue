<style lang="sass?indentedSyntax">
@import definitions

.admin-page,
input,
textarea,
keygen,
select,
button
  font-family: $raleway

button:focus
  outline: 0

.admin-page
  margin: auto
  max-width: $max_w
  width: 86%

  .not-authorized
    margin-top: 38%
    text-align: center
    width: 100%

    button
      background-color: $blue
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
      background-color: $blue
      border: 5px solid white
      border-radius: 40px
      color: white
      flex: 1 25%
      font-size: 13px

  .admin-tree
    +box-sizing(border-box)
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
    +box-sizing(border-box)
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

  .image-uploader
    progress
      background-color: $blue
      border: 1px
      height: 24px
      margin-bottom: 12px
      border-radius: 9px
      width: 100%
    img
      max-width: 100%
    span
      font-size: 12px
      margin-bottom: 12px
</style>

<template>
  <div class="admin-page">
    <div v-if="user && user.email === 'justinadenharrison@gmail.com'">
      
      <div class="top-bar">
        <button class="top-button" v-on:click="toggleCreatePost">New Post</button>
        <button class="top-button" v-on:click="toggleCreateProject">New Project</button>
        <button class="top-button" v-on:click="toggleImageUpload">New Image</button>
        <button class="top-button" v-on:click="signOut">Log Out</button>
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
        <form v-if="showCreatePost === true" @submit.prevent>
          <input v-model="newPost.title" placeholder="Post title">
          <input v-model="newPost.category" placeholder="Post category">
          <textarea v-model="newPost.content" placeholder="Post content"></textarea>
          <input v-model="newPost.key" placeholder="Pretty url">
          <button @click="setPost">Add Post</button>
          <button @click="resetState">Cancel</button>
        </form>

        <!-- Form for editing blog posts -->
        <form v-if="showEditPost === true" @submit.prevent>
          <input v-model="newPost.title">
          <input v-model="newPost.category">
          <textarea v-model="newPost.content"></textarea>
          <input v-model="newPost.key">
          <button @click="setPost">Submit Edit</button>
          <button @click="deletePost">Delete Post</button>
        </form>

        <!-- Form for creating new portfolio projects -->
        <form v-if="showCreateProject === true" @submit.prevent>
          <input v-model="newProject.title" placeholder="Project title">
          <input v-model="newProject.category" placeholder="Project category">
          <input v-model="newProject.featured" placeholder="Featured image">
          <textarea v-model="newProject.content" placeholder="Project content"></textarea>
          <input v-model="newProject.key" placeholder="Pretty url">
          <button @click="setProject">Add Project</button>
          <button @click="resetState">Cancel</button>
        </form>

        <!-- Form for editing portfolio projects -->
        <form v-if="showEditProject" @submit.prevent>
          <input v-model="newProject.title">
          <input v-model="newProject.category">
          <input v-model="newProject.featured" placeholder="Featured image">
          <textarea v-model="newProject.content"></textarea>
          <input v-model="newProject.key">
          <button @click="setProject">Submit Edit</button>
          <button @click="deleteProject">Delete Project</button>
        </form>

        <!-- Image uploader -->
        <form class="image-uploader" v-if="showImageUploader" @submit.prevent>
          <progress value="0" max="100" id="uploadProgress">0%</progress>
          <label>Destination Folder</label>
          <input v-model="newImage.folder">
          <label>Image Title</label>
          <input v-model="newImage.title">
          <input type="file" value="upload" id="fileButton" v-on:change="uploadImage">
          <label v-if="newImage.success">Direct URL (make sure to copy)</label><br><br>
          <span>{{ newImage.url }}</span><br><br>
          <img :src="newImage.url">
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
  import { db, storage } from '../services/firebase'

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
        newImage: {
          url: '',
          success: false
        },
        provider: new firebase.auth.GoogleAuthProvider(),
        showCreatePost: false,
        showEditPost: false,
        showCreateProject: false,
        showEditProject: false,
        showImageUploader: false,
        user: null
      }
    },
    firebase: {
      posts: postsRef,
      projects: projsRef
    },
    methods: {
      deletePost() {
        db.ref('blog/' + this.newPost.key).set(null)
        this.resetState()
      },
      deleteProject() {
        db.ref('project/' + this.newProject.key).set(null)
        this.resetState()
      },
      resetState() {
        this.newPost = {}
        this.newProject = {}
        this.newImage = {
          url: '',
          success: false
        }
        this.showCreatePost = false
        this.showEditPost = false
        this.showCreateProject = false
        this.showEditProject = false
        this.showImageUploader = false
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
        var setData = { title: this.newProject.title, category: this.newProject.category, featured: this.newProject.featured, content: this.newProject.content }
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
          that.newPost.title = snap.val().title
          that.newPost.category = snap.val().category
          that.newPost.content = snap.val().content
          that.newPost.key = snap.key
          that.newPost.dateCreated = snap.val().dateCreated
        });
        // Show form
        this.showEditPost = true
     },
     toggleCreateProject() {
       this.resetState()
       this.showCreateProject = true
     },
     toggleEditProject(key) {
        this.resetState()
        // Load project to edit into form
        var that = this;
        db.ref('/portfolio').child(key).once('value').then(function(snap) {
          that.newProject.title = snap.val().title
          that.newProject.category = snap.val().category
          that.newProject.featured = snap.val().featured
          that.newProject.content = snap.val().content
          that.newProject.key = snap.key
          that.newProject.dateCreated = snap.val().dateCreated
        });
        // Show form
        this.showEditProject = true
     },
     toggleImageUpload() {
       this.resetState()
       this.showImageUploader = true
     },
     uploadImage(e) {
       var that = this
       // Get file & progress bar
       var file = e.target.files[0]
       var bar = document.getElementById('uploadProgress')
       // Create storage ref 
       var ref = storage.ref('/images/' + this.newImage.folder + '/' + this.newImage.title)
       // Upload file
       var task = ref.put(file)
       // Update progress bar
       task.on('state_changed', 

         function progress(snapshot) {
           var percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
           bar.value = percent
         },

         function error(error) {
           console.log(error)
         },

         function complete() {
           that.newImage.success = true
           ref.getDownloadURL().then(function(url) {
             that.newImage.url = url
           }).catch(function(error) {
             console.log(error) 
           })
         }
       )

     }
    }
  }
</script>
