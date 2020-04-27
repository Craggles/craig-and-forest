<template>
  
  <div class="stickynav nav-closed fadein" id="nav">
    <button @click="opennav()" class="cta cta-getintouch" id="cta_getintouch">
        Work with us
    </button>
    <div id="nav-open" class="hidden">
      <div class="scrollable-nav">
        <div @click="closenav()" id="cta_close" class="cta-close">
          <img src="/arrows_down.svg" class="shrink-on-landscape" />
        </div>
        <h2>Work with us</h2>
        <p>Well hello there!</p>
        <p>Our standard day rate is £300, but we're happy to work for reduced rates or even voluntarily if your project has an ethical focus.</p>
        <p>Just ping an email to <a href="mailto:craig@craigandforest.com">craig@craigandforest.com</a> and we can discuss what you need.</p>
      </div>
    </div>
</div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    methods: {
      opennav() {
        var nav = document.getElementById("nav");
        var CTAgetintouch = document.getElementById("cta_getintouch");
        var navopen = document.getElementById("nav-open");
        nav.classList.add("nav-opening");
        nav.classList.remove("nav-closing");
        nav.classList.remove("fadein");
        CTAgetintouch.classList.add("hidden");
        navopen.classList.remove("hidden");
      },
      closenav() {
        var nav = document.getElementById("nav");
        var CTAgetintouch = document.getElementById("cta_getintouch");
        var navopen = document.getElementById("nav-open");
        nav.classList.add("nav-closing");
        nav.classList.remove("nav-opening");
        CTAgetintouch.classList.remove("hidden");
        navopen.classList.add("hidden");
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.stickynav {
        background-color: #161616;
        border: white solid 2px;
        color: white;
        width: 150vw;
        transform: rotate(3deg);
        position: fixed;
        left: -25%;
        z-index: 1;
        height: 100vh;
        bottom: calc(-100vh + 110px);
    }
.stickynav h2, .stickynav p {
  color: black;
  max-width: 70vw;
  margin: 0 auto 1rem;
}
.stickynav p {
  line-height: 2rem;
}
.bold {
  font-weight: 600;
}
#nav-open {
  height: 100%;
}
.scrollable-nav {
  overflow-y: scroll;
  height: 100%;
}
@keyframes open {
    0% {bottom: calc(-100vh + 110px); background-color: #161616;}
    100% {bottom: -10vh; background-color: white;}
}
@keyframes close {
    0% {bottom: -10vh; background-color: white;}
    100% {bottom: calc(-100vh + 110px); background-color: #161616;}
}
@keyframes fadein {
    0% {opacity: 0;}
    100% {opacity: 1;}
}

.fadein {
        animation-name: fadein;
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-delay: 1s;
}
.nav-opening {
        animation-name: open;
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
}
.nav-closing {
        animation-name: close;
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
}
.cta-getintouch {
  margin: 10px auto;
}
.cta-close {
  cursor: pointer;
}
.hidden {
  display: none;
}


@media screen and (orientation:landscape) and (max-width: 750px) {
  
  .stickynav h2, .stickynav p {
    max-width: 90vw;
    margin: 0 auto 0.75rem;
  }
  .stickynav h2 {
    font-size: 2rem;
  }
  .stickynav p {
    font-size: 0.75rem;
    line-height: 1.5rem;
  }
  .cta-close {
    height: 2rem;
  }
  .shrink-on-landscape {
    height: 2rem;
  }
}

</style>
