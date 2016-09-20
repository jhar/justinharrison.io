<style lang="sass?indentedSyntax">
.my-resume
  font-family: 'Raleway', sans-serif
  margin: auto
  max-width: 960px
  width: 86%

  .main-title
    font-size: 28px

  p
    color: #676767
    font-size: 16px

  h3
    color: #4874d4

  .title
    font-weight: bold

  .loc,
  .dates
    color: #676767
    font-size: 12px
    
  .blk-1,
  .blk-3
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    display: inline-block
    float: left
    min-height: 57px
    padding-right: 40px
    width: 100%

  .blk-2,
  .blk-4
    -webkit-box-sizing: border-box
    -moz-box-sizing: border-box
    box-sizing: border-box
    display: inline-block
    float: right
    width: 100%

  @media only screen and (min-width: 768px)
    .blk-1,
    .blk-3
      width: 62%

    .blk-2,
    .blk-4
      width: 38%

    .blk-3,
    .blk-4
      margin-bottom: 75px
</style>

<template>
  <div class="my-resume">
    <div class="header">
      <div class="blk-1">
       <span class="main-title">Web Application Developer</span>
      </div>
      <div class="blk-2">
        <span class="bold">(206) 377-9027</span><br>
        <span class="bold">Skype: justin.a.harrison</span><br>
        <a href="mailto:justinadenharrison@gmail.com" target="_top">justinadenharrison@gmail.com</a><br>
      </div>
    </div>
    <div class="blk-3">

      <h3>Work Experience</h3>

      <span class="title">Web Engineer</span><br>
      <span class="org">Advercalls, Inc</span><br>
      <span class="loc">Los Angeles, CA</span><br>
      <span class="dates">Feb 2016 - Jul 2016</span>
      <p>Developed a third-party JavaScript lead gen app. Wrote back-end integrations for marketing services like ActiveCampaign. Wrote scripts to clean redundancies and errors from a large database, built a web directory service to navigate the data, then incorporated user profiles, a membership service, and InfusionSoft for payment processing. Conducted research and feasibility studies. Recruited, managed and wrote specs for off-shore developers. Designed and developed APIs for our own services. Maintained dozens of websites.</p>
      
      <span class="title">Contract Software Developer</span><br>
      <span class="org">Not That This, LLC</span><br>
      <span class="loc">Burbank, CA</span><br>
      <span class="dates">Nov 2015 - Jan 2016</span>
      <p>Converted PSD designs to pixel perfect UI with Enyo.js for an enterprise Cisco IoT project.</p>
      
      <span class="title">Web Content Evaluator</span><br>
      <span class="org">FlexaSoft</span><br>
      <span class="loc">Redmond, WA</span><br>
      <span class="dates">Oct 2014 - Jun 2015</span><br>
      <p>Evaluated the accuracy and relevancy of Microsoft Bing search results.</p>
      
      <span class="title">Web Developer</span><br>
      <span class="org">University of California Institute for Research in the Arts</span><br>
      <span class="loc">Santa Barbara, CA</span><br>
      <span class="dates">Jul 2014 - Sep 2014</span><br>
      <p>Worked on a new website for the UCIRA. Merged their main site and State of the Arts blog. Worked to create a platform for California art researchers to network and display their work. The project was cancelled after funding cuts.</p>

      <span class="title">IT Helpdesk Assistant</span><br>
      <span class="org">Davidson Library</span><br>
      <span class="loc">Santa Barbara, CA</span><br>
      <span class="dates">Mar 2013 - Jul 2014</span><br>
      <p>Provided technical assistance and support related to computer networks, hardware, and software. Responded to calls and emails and tracked issues with JIRA to help diagnose, solve, and document problems. Managed hardware inventory.</p>


    </div>

    <div class="blk-4">


      <h3>Education and Awards</h3>

      <span class="title">BA in Art with High Honors</span><br>
      <span class="org">University of California</span><br>
      <span class="loc">Santa Barbara, CA</span><br>
      <span class="dates">Graduated 2014</span><br>
      <p>Promising Artist Achievement Award, William Dole Award, Faculty Award of Distinction x2, Dean's Honors x5</p>

      <h3 class="mono">Professional Development</h3>

      <span class="title">MongoDB for Node.js Developers</span><br>
      <span class="org">MongoDB University</span><br>
      <span class="dates">Completed 2015</span><br><br>

      <span class="title">Front-End Web Developer Nanodegree</span><br>
      <span class="org">Udacity</span><br>
      <span class="dates">Completed 2015</span><br>

      <h3>Skills</h3>

      <p>HTML, CSS, JavaScript, PHP, MySQL, MongoDB, Unix, Bootstrap, jQuery, React, Knockout, Vue, Node, NPM, Express, SASS, LESS, Firebase, AWS, Webpack, Browserify, Gulp, WordPress, p5.js, Processing, Chrome Developer Tools, AJAX, and Google.</p>

      <h3>Volunteering</h3>

      <span class="title">Shopify Administrator</span><br>
      <span class="org">Arroyo Food Co-op</span><br>
      <span class="loc">Pasadena, CA</span><br>
      <span class="dates">Feb 2016 - May 2016</span><br><br>

      <span class="title">Cook and Server</span><br>
      <span class="org">Food Not Bombs</span><br>
      <span class="loc">Goleta, CA</span><br>
      <span class="dates">Jan 2013 - Sep 2014</span>






    </div>

  </div>
</template>
