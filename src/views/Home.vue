<template>
    <div class="case-study">
        <div style="height:100vh;">
            <div class="clip-left">
                <div class="introtext" style="bottom:57%;">
                    <h1 class="animated">Craig</h1>
                    <h2 class="animated delay_1">Digital Branding</h2>
                </div>
            </div>
            <div class="clip-right">
                <div class="introtext" style="top:47%;">
                    <h1 class="animated delay_2">Forest</h1>
                    <h2 class="animated delay_3">Super Adorable</h2>
                </div>
            </div>
        </div>

        <div class="textbox">
            <p>between us we have over seven years of&nbsp;digital branding experience</p>
            <p>— & —</p>
            <p>almost two years experience being a&nbsp;really cute dog.</p>
        </div>

        <div ref="scrollThing" style="height:100vh;">
            <div class="clip-left"></div>
            <div class="clip-right"></div>
        </div>

        <div class="textbox">
            <p style="margin-bottom:100px;">We currently work at freddie’s flowers where we’ve had some really great results:</p>
            <p style="text-transform:uppercase;line-height:1.5rem;margin-top:40px;">Conversion rate change:<br />
            <span style="font-weight:600;">+14%</span></p>
            <p style="text-transform:uppercase;line-height:1.5rem;margin-top:40px;">Number of site visitors:<br />
            <span style="font-weight:600;">+19%</span></p>
            <p style="text-transform:uppercase;line-height:1.5rem;margin-top:40px;">Amount of ‘recommend a friend’ invites sent:<br />
            <span style="font-weight:600;">+94%</span></p>
            <p style="text-transform:uppercase;line-height:1.5rem;margin-top:40px;">Office adorableness levels:<br />
            <span style="font-weight:600;">+4000%</span></p>

            <router-link :to="{ name: 'home' }">
                <span class="cta">
                    More on Freddie’s Flowers
                </span>
            </router-link>

        </div>

        <div ref="scrollThing" style="height:100vh;">
            <div class="clip-left"></div>
            <div class="clip-right"></div>
        </div>

        <div class="flexcontainer">
            <div class="projectthumbnail">
            </div>
            <div class="projectthumbnail">
            </div>
            <div class="projectthumbnail">
            </div>
            <div class="projectthumbnail">
            </div>
            <div class="projectthumbnail">
            </div>
        </div>

    </div>
</template>


<script>

    // ROTATING THE INTRO TYPE

    var tobetanned;
    var radians;
    var angle;
    var introTexts;
    var i;
        

    function setTypeAngle() {
        tobetanned = ((window.innerHeight * 6) / 10) / ((window.innerWidth * 6) / 10);
        radians = Math.atan(tobetanned);
        angle = (radians * (180/Math.PI) * -1) +4; // Don't know why we need to add four :shrugs:
        introTexts = document.querySelectorAll('.introtext');
        i = 0;

        for (i = 0; i < introTexts.length; i++) {
            introTexts[i].style.transform = 'rotate('+angle+'deg)';
        }
    }

    window.onload = setTypeAngle;
    window.onresize = setTypeAngle;

    // FINISHED ROTATING THE INTRO TYPE


    export default {
        name: 'Home',
        data: function() {
            return {
                eventListener: null,
            }
        },
        mounted: function() {
            this.eventListener = window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                const hT = this.$refs.scrollThing.offset().top,
                    hH = this.$refs.scrollThing.outerHeight(),
                    wH = window.height(),
                    wS = this.scrollTop();
                    console.log((hT-wH) , wS);
                if (wS > (hT+hH-wH)){
                    alert('you have scrolled to the h1!');
                }
            }
        },
        destroyed: function() {
            window.removeEventListener(this.eventListener);
        }
    }
</script>

<style>
    .clip-left {
        clip-path: polygon(0% 0%,100% 0%,100% 20%,20% 80%,20% 100%,0% 100%);
        position: absolute;
        left: 0%;
        background-image:url('/craig_1.jpg');
        background-size: cover;
        background-position: right;
        width: 90vw;
        height: 100vh;
    }
    .clip-right {
        clip-path: polygon(100% 0%,80% 0%,80% 20%,0% 80%,0% 100%,100% 100%);
        position: absolute;
        right: 0%;
        background-image:url('/forest_1.jpg');
        background-size: cover;
        background-position: left;
        width: 90vw;
        height: 100vh;
    }
    .svg-stroke {
        position: absolute;
        z-index: -1;
        left: 0;
    }

    /* ANIMATING THE INTRO TYPE */

    @keyframes slide {
        0% {margin-left: -15rem;}
        50% {margin-left: 4rem;}
        100% {margin-left: -15rem;}
    }

    .animated {
        margin-left: -15rem;
        animation-name: slide;
        animation-duration: 10s;
        animation-iteration-count: infinite;
    }
    .delay_1 {
        animation-delay: -0.5s;
    }
    .delay_2 {
        animation-delay: -5s;
    }
    .delay_3 {
        animation-delay: -5.5s;
    }
    
    /* FINISHED ANIMATING THE INTRO TYPE */

</style>
