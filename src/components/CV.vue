<style lang="sass?indentedSyntax">
.my-resume
  font-family: 'Ubuntu', sans-serif
  margin: auto
  max-width: 960px
  width: 86%

  .mono
    font-family: 'Ubuntu Mono', monospace

  p
    color: #676767
    font-size: 16px

  h3
    color: #4874d4

  .bold
    font-weight: bold
    
  .col-1
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    display: inline-block
    float: left
    padding-right: 20px
    width: 100%

    .italic
      font-style: italic
    
    .dates
      color: #676767
      font-size: 12px

  .col-2
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    display: inline-block
    float: right
    width: 100%

  @media only screen and (min-width: 768px)
    .col-1
      width: 62%
    .col-2
      width: 38%
</style>

<template>
  <div class="my-resume">
    <div class="header">
      <div class="col-1">
       <h2 class="mono">Artist and Software Developer</h2>
      </div>
      <div class="col-2 mono">
        <span class="bold">(206) 377-9027</span><br>
        <span class="bold">Skype: justin.a.harrison</span><br>
        <a href="mailto:jhar87@gmail.com" target="_top">jhar87@gmail.com</a><br>
      </div>
    </div>
    <div class="col-1">
      <h3 class="mono">Web Experience</h3>
      <span class="bold">Golden Funnel Marketing</span>, Remote - <span class="italic">Web Engineer</span><br>
      <span class="dates mono">FEBRUARY 2016 - JULY 2016</span><br>
      <p>Full stack developer for a wide variety of digital marketing projects. Rapid development of sites and services to the architecture and specifications of a non-technical executive. Engineering custom solutions to integration problems between WordPress, WP plugins, and external services. Third party JavaScript development. API design, development, and testing.</p>
      <span class="bold">Not That, This LLC</span>, Remote — <span class="italic">Software Developer</span><br>
      <span class="dates mono">NOVEMBER 2015 - JANUARY 2016</span><br>
      <p>Contract JavaScript development for Cisco project based in Dubai. Converted PSD designs to pixel perfect UI for an existing enterprise level IoT interface written with Enyo. Reported directly to C-level executives.</p>
      <span class="bold">FlexaSoft</span>, Remote — <span class="italic">Web Content Evaluator</span><br>
      <span class="dates mono">OCTOBER 2014 - JUNE 2015</span><br>
      <p>Human judge for tuning Microsoft Bing’s semantic search results.</p>
      <span class="bold">UC Santa Barbara</span>, Santa Barbara, CA — <span class="italic">Web Developer</span><br>
      <span class="dates mono">JULY 2014 - SEPTEMBER 2014</span><br>
      <p>WordPress theme development and site mergers for a UC wide arts research institute.</p>
      <h3 class="mono">Education</h3>
      <span class="bold">Udacity</span>, Remote — <span class="italic">Front End Development Nanodegree</span>
      <p>HTML5, Git/Github, AJAX, CSS/Bootstrap, jQuery, Object-oriented design/development, Design Patterns, Test Driven Development, Performance Optimization, Application Development/Deployment</p>
      <span class="bold">UC Santa Barbara</span>, Santa Barbara, CA — <span class="italic">BA Art, High Honors</span>
      <p>Processing, Arduino, Drawing, Painting, Printmaking</p>
      <span class="bold">University of Georgia</span>, Athens, GA — <span class="italic">Cognitive Science</span>
      <p>Logic, Java, C++, Unix</p>
    </div>
    <div class="col-2">
      <h3 class="mono">Primary Skills</h3>
      <p>JavaScript, CSS, HTML, PHP, MySQL and MongoDB.</p>
      <p>Experience using a wide variety of libraries, frameworks, platforms, and tools related to the above core technologies (Node/NPM, React, Bootstrap, Laravel, AWS, etc). Experience with other languages such as Python, C, C++, and Java but not in a professional context.</p>
      <p>Experience balancing client requests with architectural concerns, design patterns, and best practices - learning from apps that don’t scale or fail to be maintainable.</p>
      <h3 class="mono">Awards</h3>
      <span class="bold">Promising Artist Achievement Award</span><br>
      UCSB Department of Art
      <p>Most outstanding graduating artist</p>
      <span class="bold">William Dole Award</span><br>
      UCSB Department of Art<br><br>
      <span class="bold">Faculty Award of Distinction</span><br>
      UCSB Department of Art<br><br>
      <span class="bold">Dean's Honors x5</span><br>
      UCSB
    </div>
  </div>
</template>
