<template>

  <div>
    <router-link :to="{ name: 'home' }">
      <div class="stickybacknav">
        <div class="icon-back"></div><div class="back">Back</div>
      </div>
    </router-link>
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

.stickybacknav {
        background-color: #ececec;
        border: #161616 solid 2px;
        color: #161616;
        transform: rotate(-5deg);
        position: fixed;
        left: -0.5rem;
        z-index: 1;
        top: -0.5rem;
        width: 7rem;
        padding: 0.5rem 0.2rem 0 0;
        cursor: pointer;
}

.back {
        font-family: 'Prompt', sans-serif;
        font-size: 1rem;
        line-height: 3rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 200;
        line-height: 1rem;
        display: inline-block;
        margin: 0;
        text-align: left;
        position: relative;
        bottom: 0.6rem
}

.icon-back {
        background-image: url('/arrows_left.svg');
        background-size: cover;
        height: 2rem;
        width: 2rem;
        display: inline-block;
    }

.stickybacknav:hover {
        background-image: url('/highlight.svg');
        background-repeat: no-repeat;
        background-position: 0%;
        animation-name: highlightcta;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
}
</style>
