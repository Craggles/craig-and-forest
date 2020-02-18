<template>
    <div id="app">
        <!-- Main Template
        <router-link :to="{ name: 'home' }">
            Home
        </router-link>
        <router-link :to="{ name: 'case-study' }">
            Case Study
        </router-link> -->
        <router-view></router-view>
    </div>
</template>

<style>
    html {
        font-size: 30px;
    }

    body {
        background-color: #161616;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    @font-face {
        font-family: Phosphate-Inline;
        src: url('/Phosphate-Inline.ttf');
    }
    @font-face {
        font-family: Phosphate-Solid;
        src: url('/Phosphate-Solid.ttf');
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    h1 {
        font-family: Phosphate-Solid;
        color: white;
        font-size: 5rem;
        text-transform: uppercase;
        text-shadow: 0px 0px 30px black;
        margin: 0 0 0 0;
        line-height: 4rem;
    }

    h2 {
        font-family: Phosphate-Inline;
        color: white;
        font-size: 1.5rem;
        line-height: 1.5rem;
        text-transform: uppercase;
        text-shadow: 0px 0px 30px black;
        margin: 0 0 0 0;
    }
    p {
        font-family: 'Prompt', sans-serif;
        font-size: 1rem;
        line-height: 3rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 200;
        color: white;
    }
    .textbox {
        padding: 180px 20px;
        max-width: 700px;
        margin: auto;
    }
    .introtext {
        width: 50vw; /* Needs to be bigger on mobile */
        position: absolute;
        left: 25%;
    }
    .projectthumbnail {
        width: 280px;
        height: 280px;
        background-color: white;
        border: turquoise 1px solid;
    }
    .flexcontainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        padding: 180px 20px;
        margin: auto;
        max-width: 90vw;
    }

    a {
        color: black;
        text-decoration: none;
    }

    .cta {
        background-color: #ececec;
        background-image: url('/highlight.svg');
        background-repeat: no-repeat;
        background-position: 0%;
        animation-name: highlightcta;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        color: black;
        text-decoration: none;
        font-family: Phosphate-Solid;
        font-size: 1rem;
        text-transform: uppercase;
        padding: 20px 50px;
        margin: 40px auto;
        display: block;
        width: max-content;
    }

    @keyframes highlightcta {
        0% {background-position: -50%;}
        33% {background-position: 150%;}
        100% {background-position: 150%;}
    }
    @media only screen and (max-width: 1000px) {
        html {
            font-size: 20px;
        }
}
    
</style>
