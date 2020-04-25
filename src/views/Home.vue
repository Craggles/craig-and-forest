<template>


    <div>

        <get-in-touch-nav></get-in-touch-nav>

        <div style="height:100vh;">

        <div class="logo fadeout">
            <img src="/logo.svg" class="logosvg"/>
        </div>

        <div style="width:100vw;height:100vh;position:absolute;overflow: hidden;">
            <div class="clip-left splash c_0 slideout slideoutleft"></div>
            <div class="clip-right splash f_0 slideout slideoutright"></div>
        </div>
        <div class="clip-left c_1 fadein">
            <div class="introtext" style="bottom:57%;">
                <h3 class="animated">Digital Branding</h3>
                <h1 class="animated delay_1">Craig&</h1>
                
            </div>
        </div>
        <div class="clip-right f_1 fadein">
            <div class="introtext" style="top:46%;">
                <h1 class="animated delay_3">Forest</h1>
                <h3 class="animated delay_2">Super Adorable</h3>
            </div>
        </div>
        </div>

        <div class="textbox">
            <p>between us we have over eight years <span style="white-space: nowrap">of digital branding experience</span></p>
            <p>— & —</p>
            <p>just over two years experience being  <span style="white-space: nowrap">a really cute dog.</span></p>
        </div>

        <div style="height:100vh;">
            <div class="clip-left c_2"></div>
            <div class="clip-right f_2"></div>
        </div>

        <div class="textbox">
            <p style="margin-bottom:100px;">We currently work in London at freddie’s flowers, a flower box subscription service, <span style="white-space: nowrap">where we’ve</span> had some really great results:</p>
            <p style="text-transform:uppercase;line-height:1.5rem;margin-top:40px;">Conversion rate change:<br />
            <span style="font-weight:600;">+14%</span></p>
            <p style="text-transform:uppercase;line-height:1.5rem;margin-top:40px;">Number of site visitors:<br />
            <span style="font-weight:600;">+19%</span></p>
            <p style="text-transform:uppercase;line-height:1.5rem;margin-top:40px;">Order rate:<br />
            <span style="font-weight:600;">+8%</span></p>
            <p style="text-transform:uppercase;line-height:1.5rem;margin-top:40px;">Amount of ‘recommend a friend’ invites sent:<br />
            <span style="font-weight:600;">+94%</span></p>
            <p style="text-transform:uppercase;line-height:1.5rem;margin-top:40px;">Office adorableness levels:<br />
            <span style="font-weight:600;">+4000%</span></p>

        </div>

        <div class="video_landscape">
            <video class="video_zoom_on_mobile video_shunt_on_mobile" autoplay muted loop>
                <source src="/landscape_03.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
        </div>

        <router-link :to="{ name: 'freddies-flowers' }">
            <span class="cta">
                More on Freddie’s Flowers
            </span>
        </router-link>

        <div>
            <h2 style="margin-top:200px;">Other brands we’ve worked with:</h2>
            <div class="flexcontainer">
                <div class="projectthumbnail mockup-square mockup-yeo">
                    <div class="projectoverlay">
                        <h3>Yeo Valley</h3>
                        <p>Organic Dairy Products</p>
                    </div>
                </div>
                <div class="projectthumbnail mockup-landscape mockup-balans02">
                    <div class="projectoverlay">
                        <h3>Balans</h3>
                        <p>Eccentric Restaurants</p>
                    </div>
                </div>
                <div class="projectthumbnail mockup-landscape mockup-earlyman">
                    <div class="projectoverlay">
                        <h3>Early Man</h3>
                        <p>Aardman Feature Film</p>
                    </div>
                </div>
                <div class="projectthumbnail mockup-square mockup-tedandmuffy">
                    <div class="projectoverlay">
                        <h3>Ted & Muffy</h3>
                        <p>Bespoke Footwear</p>
                    </div>
                </div>
                <div class="projectthumbnail mockup-square mockup-freaks">
                    <div class="projectoverlay">
                        <h3>Freaks of Nature</h3>
                        <p>Vegan Desserts</p>
                    </div>
                </div>
                <div class="projectthumbnail mockup-square mockup-eatyourhat">
                    <div class="projectoverlay">
                        <h3>Eat Your Hat</h3>
                        <p>Fair Trade Chocolate</p>
                    </div>
                </div>
                <div class="projectthumbnail mockup-square mockup-merchantgourmet">
                    <div class="projectoverlay">
                        <h3>Merchant Gourmet</h3>
                        <p>Ingredients from around the world</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="widebox">
            
            <h2>Things we do</h2>
            <ul class="flexcontainer">
                <li class="mountain">
                    <h3>Design websites!</h3>
                    <p>We've designed many a website – <span style="white-space: nowrap">from simple</span> three pagers to massive ecommerce sites with member's areas and collector's schemes.</p>
                </li>
                <li class="tree">
                    <h3>Sleep under your tables</h3>
                    <p>Do you have tables without dogs sleeping underneath them? We can sort that for you!</p>
                </li>
                <li class="mountain">
                    <h3>Get your brand sorted for digital</h3>
                    <p>Need branding that's ready for all things digital? We've worked with all sorts, from start-ups to multinationals, looking to rebrand – nothing's too big or too small.</p>
                </li>
                <li class="tree">
                    <h3>Run away from tall men in the office</h3>
                    <p>If you need to remind any tall men wandering about that they can be physically intimidating, Forest is extremely talented at scampering away from them while delivering powerful side-eye.</p>
                </li>
                <li class="mountain">
                    <h3>Create social / email campaigns</h3>
                    <p>We can help with top-level strategy, campaign ideas and content creation. We've a ton of experience creating stills, videos & animations for social and designing and building email campaigns.</p>
                </li>
                <li class="tree">
                    <h3>Wookie impressions</h3>
                    <p>Not enough Star Wars characters in your office? Well Forest's Chewbacca impressions will make you feel like you're sat playing holochess on the Millenium Falcon.</p>
                </li>
            </ul>

        </div>

        <div style="height:100vh;">
            <div class="clip-left c_4"></div>
            <div class="clip-right f_4"></div>
        </div>

        
        <div class="textbox">
            <h2>Personal Ethos</h2>
            <p>In my opinion, treating both employees, users and the planet with respect is paramount.</p>
            <p>So if your project or company has some sort of ethical bent I am more than happy to discuss reduced rates.</p>
            <p>I'm keen to do some good and stop just making rich people even richer!</p>
        </div>

        <footer-bar></footer-bar>

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
        },
        methods: {
        },
        destroyed: function() {
            window.removeEventListener(this.eventListener);
        }
        // props: 
    }
</script>

<style>
    .clip-left {
        clip-path: polygon(0% 0%,100% 0%,100% 20%,20% 80%,20% 100%,0% 100%);
        position: absolute;
        left: 0%;
        background-size: cover;
        background-position: left top;
        width: 90vw;
        height: 100vh;
        overflow: hidden;
    }
    .clip-right {
        clip-path: polygon(100% 0%,80% 0%,80% 20%,0% 80%,0% 100%,100% 100%);
        position: absolute;
        right: 0%;
        background-size: cover;
        background-position: right bottom;
        width: 90vw;
        height: 100vh;
        overflow: hidden;
    }

    .splash {
        z-index: 2;
    }
    .logo {
        width: 100%;
        height: 100%;
        position: absolute;
        margin: auto;
        z-index: 3;
    }

    .c_0 {
        background-image:url('/craig_0.jpg');
    }
    .f_0 {
        background-image:url('/forest_0.jpg');
    }
    .c_1 {
        background-image:url('/craig_1.jpg');
        opacity: 0;
    }
    .f_1 {
        background-image:url('/forest_1.jpg');
        opacity: 0;
    }
    .c_2 {
        background-image:url('/craig_2.jpg');
    }
    .f_2 {
        background-image:url('/forest_2.jpg');
    }
    .c_3 {
        background-image:url('/craig_3.jpg');
    }
    .f_3 {
        background-image:url('/forest_3.jpg');
    }
    .c_4 {
        background-image:url('/craig_4.jpg');
    }
    .f_4 {
        background-image:url('/forest_4.jpg');
    }

    .mockup-yeo {
        background-image: url('/mockup_yeo.jpg');
    }
    .mockup-tedandmuffy {
        background-image: url('/mockup_tm.jpg');
    }
    .mockup-balans02 {
        background-image: url('/mockup_balans02.jpg');
    }
    .mockup-freaks {
        background-image: url('/mockup_freaks.jpg');
    }
    .mockup-merchantgourmet {
        background-image: url('/mockup_merchantgourmet.jpg');
    }
    .mockup-earlyman {
        background-image: url('/mockup_earlyman.jpg');
    }
    .mockup-eatyourhat {
        background-image: url('/mockup_eatyourhat.jpg');
    }

    /* ANIMATING THE SPLASH */

    @keyframes slideoutleft {
        0% {left: 0%}
        100% {left: -100%;}
    }
    @keyframes slideoutright {
        0% {right: 0%;}
        100% {right: -100%;}
    }
    @keyframes fadeout {
        0% {opacity: 1;}
        99% {opacity: 0; visibility: visible;}
        100% {opacity: 0; visibility: hidden;}
    }
    @keyframes fadein {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    .slideout {
        animation-duration: 2s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-delay: 2.5s;
    }

    .slideoutleft {
        animation-name: slideoutleft;
    }
    .slideoutright {
        animation-name: slideoutright;
    }
    .fadeout {
        animation-name: fadeout;
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-delay: 2s;
    }
    .fadein {
        animation-name: fadein;
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-delay: 1s;
    }

    /* FINISHED ANIMATING THE SPLASH */

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
