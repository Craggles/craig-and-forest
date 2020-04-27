<template>
  
  <div class="footer-bar">
    <a href="#">
      <h5 class="footer-instagram">Follow us on Instagram:</h5>
    </a>
    <a href="https://www.linkedin.com/in/craig-jenner-4928b617/" target="_blank">
      <h5 class="footer-CV">Find us on LinkedIn:</h5>
    </a>
    <h5 class="top-margin">Photography by <a href="https://www.harrylivingstone.com" target="_blank" style="text-decoration: underline;">Harry Livingstone</a></h5>
      <h5>He’s amazing and an absolute sweetheart so pay him to take photos of you</h5>
  </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    methods: {
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .footer-bar {
    background-color: #232323;
    padding: 2rem 1rem 10rem;
  }

  a {
    color: white;
  }

  .top-margin {
    margin-top: 2rem;
  }

  .footer-instagram, .footer-CV {
    width: 35%;
    display: inline-block;
  }
  
  .footer-instagram::after {
    content: url("/icon_instagram.svg");
    display: block;
    height: 40px;
    width: 40px;
    margin: 1rem auto;
  }
  
  .footer-CV::after {
    content: url("/icon_linkedin.svg");
    display: block;
    height: 40px;
    width: 40px;
    margin: 1rem auto;
  }


  @media only screen and (max-width: 750px) {
    .footer-instagram, .footer-CV {
        width: 50%;
    }
  }

</style>
