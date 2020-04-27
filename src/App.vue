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
        margin: 0;
    }

    #app {
        font-family: 'Prompt', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: white;
    }

    @font-face {
        font-family: Trueno-Black;
        src: url('/TruenoBlack-mBYV.otf');
    }
    @font-face {
        font-family: Trueno-Black-Italic;
        src: url('/TruenoBlackItalic-dXnl.otf');
    }
    @font-face {
        font-family: Trueno-Black-Outline;
        src: url('/TruenoBlackOutline-P43P.otf');
    }
    @font-face {
        font-family: Trueno-Black-Outline-Italic;
        src: url('/TruenoBlackOutlineItalic-LLEy.otf');
    }

    #nav a {
        font-weight: bold;
        color: #161616;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    h1 {
        font-family: Trueno-Black-Outline;
        color: white;
        font-size: 5rem;
        text-transform: uppercase;
        margin: 0 0 0.5rem 0;
        line-height: 4rem;
        letter-spacing: 5px;
    }
    h2 {
        font-family: Trueno-Black;
        color: white;
        font-size: 3rem;
        line-height: 3rem;
        text-transform: uppercase;
        margin: 2rem auto;
        max-width: 1400px;
    }
    h3 {
        font-family: Trueno-Black;
        color: white;
        font-size: 1.5rem;
        line-height: 1.5rem;
        text-transform: uppercase;
        margin: 0 0 0 0;
    }
    h5 {
        font-family: 'Prompt', sans-serif;
        font-size: 0.75rem;
        line-height: 1rem;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 200;
        color: white;
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
        max-width: 900px;
        margin: auto;
    }
    .widebox {
        padding: 180px 20px;
        width: 90%;
        margin: auto;
    }
    .wonkright {
        transform: rotate(3deg);
    }
    .wonkleft {
        transform: rotate(-3deg);
    }
    .introtext {
        width: 50vw; /* Needs to be bigger on mobile */
        position: absolute;
        left: 25%;
        text-shadow: 0px 0px 30px black;
        white-space: nowrap;
    }
    .projectthumbnail {
        height: 33vw;
        background-size: cover;
        background-position: center;
        overflow: hidden;
        display: flex;
    }
    .projectoverlay {
        align-self: flex-end;
        padding: 0 0.3rem 0.3rem 0;
        text-align: right;
        width: 100%;
    }
    .projectoverlay h3 {
        font-size: 1rem;
        line-height: 1rem;
        text-shadow: 0px 0px 30px black;
    }
    .projectoverlay p {
        font-size: 0.75rem;
        text-transform: none;
        letter-spacing: 0px;
        line-height: 0.75rem;
        margin: 0;
        text-shadow: 0px 0px 30px black;
    }
    .projectthumbnail-portrait {
        height: 66vw;
        width: 36vw;
        background-size: cover;
        background-position: center;
    }
    .mockup-square {
        width: 33vw;
    }
    .mockup-square-roundup {
        width: 34vw;
    }
    .mockup-landscape {
        width: 66vw;
    }
    .mockup-portrait {
        width: 33vw;
        height: 66vw;
    }
    .mockup-hero {
        width: 100vw;
        height: 50vw;
    }
    .video_landscape {
        overflow: hidden;
        width: 100vw;
        height: 50vw;
    }
    .video_zoom_on_mobile {
        height: 100%;
    }
    .flexcontainer {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        padding: 0;
    }
    .flexcontainer-columns {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        width: 100vw;
        height: 64vw;
        padding: 0;
    }
    .container-square {
        width: 66vw;
        height: 66vw;
    }

    a {
        color: white;
        text-decoration: underline;
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
        font-family: Trueno-Black;
        font-size: 1rem;
        text-transform: uppercase;
        padding: 20px 50px;
        margin: 40px auto;
        display: block;
        width: max-content;
        border: #161616 solid 1px;
        border-radius: 5px;
    }

    .cta:hover {
        background-color: #161616;
        background-image: url('/highlight_hover.svg');
        color: white;
        border: white solid 1px;
        cursor: pointer;
    }

    .logosvg {
        width: 800px;
        margin: calc(50vh - 132px) auto;
    }

    li {
        margin: 3rem auto;
        list-style-type: none;
        max-width: 600px;
    }

    li p {
        line-height: 1.5rem;
        letter-spacing: 0px;
        text-transform: none;
    }
    .tree h3 {
        font-family: Trueno-Black-Outline;
        letter-spacing: 2px;
    }
    .mountain::before {
        content: url("/mountain.svg");
        display: block;
        height: 40px;
        width: 33px;
        margin: 1rem auto;
    }
    .tree::before {
        content: url("/tree.svg");
        display: block;
        height: 40px;
        width: 33px;
        margin: 1rem auto;
    }

    .case-study h2 {
        margin: 3rem auto 0.5rem;
    }
    .case-study h5 {
        margin: 1rem 0 2rem;
    }
    .case-study p {
        line-height: 1.5rem;
        margin: 1rem 1rem 0rem;
    }
    .show-on-ipad {
        display: none;
    }

    .bottom-spacer {
        margin: 0 0 4rem 0;
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
        .logosvg {
            width: 700px;
            margin: calc(50vh - 116px) auto;
        }
    }
    @media only screen and (max-width: 750px) {
        html {
            font-size: 20px;
        }
        .projectthumbnail {
            width: 50vw;
            height: 50vw;
        }
        .mockup-hero {
            width: 100vw;
            height: 50vw;
        }   
        .logosvg {
            width: 300px;
            margin: calc(50vh - 50px) auto;
        }
        .container-square {
            width: 50vw;
            height: 100vw;
        }
        .mockup-portrait {
            width: 50vw;
            height: 100vw;
        }
        .hide-on-ipad {
            display: none;
        }
        .show-on-ipad {
            display: flex;
        }
        .show-on-desktop {
            display: none;
        }
    }
    @media only screen and (max-width: 500px) {
        html {
            font-size: 15px;
        }
        .projectthumbnail {
            width: 100vw;
            height: 100vw;
        }
        .logosvg {
            width: 300px;
            margin: calc(50vh - 50px) auto;
        }
        .stickynav h2, .stickynav p {
            margin: 0 auto 1rem;
        }
        .projectoverlay h3 {
            font-size: 1.5rem;
            line-height: 1.5rem;
        }
        .projectoverlay p {
            font-size: 1rem;
            line-height: 1rem;
        }
        .video_landscape {
            height: 100vw;
        }
        .video_shunt_on_mobile {
            position: relative;
            left: -30vw;
        }
        .container-square {
            width: 100vw;
            height: 400vw;
        }
        .mockup-portrait {
            width: 100vw;
            height: 200vw;
        }
        .hide-on-ipad {
            display: flex;
        }
        .show-on-ipad {
            display: none;
        }
    }
    
</style>
