<template>
  <h1>justin harrison</h1>
  <nav class="navbar navbar-default">
    <div class="container">
      <ul class="nav navbar-nav">
        <li><a v-link="'home'">Home</a></li>
        <li><a v-link="'blog'">Blog</a></li>
        <li><a v-link="'resume'">Resume</a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
