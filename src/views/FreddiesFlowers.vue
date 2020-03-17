<!-- 
    Homepage *
    Sliding between landing pages
    Sign up
    How it works
    Recent deliveries
    Calendar
    Current Box
-->

<template>
    <div>
        <get-in-touch-nav></get-in-touch-nav>

        <div class="case-study">
            <h2>Freddie’s Flowers</h2>
            <p>Fresh flowers delivered weekly for £25 a pop.</p>
            <h5>Visit the <a href="www.freddiesflowers.com" target="_blank">live site</a>!</h5>
            <div class="flexcontainer">
                <div class="projectthumbnail mockup-hero">
                    <video class="video_zoom_on_mobile" autoplay muted loop>
                        <source src="/landscape_05.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="projectthumbnail mockup-square-roundup">
                    <video class="video_zoom_on_mobile" autoplay muted loop>
                        <source src="/ff_landingpages_video.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="projectthumbnail mockup-landscape mockup-ff-whatsinthebox">
                </div>

                <div class="projectthumbnail mockup-square mockup-ff-styleguide-01">
                </div>
                <div class="projectthumbnail mockup-square mockup-ff-styleguide-02">
                </div>
                <div class="projectthumbnail mockup-square-roundup mockup-ff-styleguide-03">
                </div>

                <div class="projectthumbnail mockup-square-roundup mockup-ff-recentdeliveries">
                </div>
                <div class="projectthumbnail mockup-landscape">
                    <video class="video_zoom_on_mobile" autoplay muted loop>
                        <source src="/ff_howitworks.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>

<style>

    .projectthumbnail {
        border: #161616 solid 5px;
        box-sizing: border-box;
    }
    .mockup-ff-styleguide-01 {
        background-image: url('/mockup_ff_styleguide_01.jpg');
    }
    .mockup-ff-styleguide-02 {
        background-image: url('/mockup_ff_styleguide_02.jpg');
    }
    .mockup-ff-styleguide-03 {
        background-image: url('/mockup_ff_styleguide_03.jpg');
    }
    .mockup-ff-recentdeliveries {
        background-image: url('/mockup_ff_recentdeliveries_sq.jpg');
    }
    .mockup-ff-signup {
        background-image: url('/mockup_ff_signup.jpg');
    }
    .mockup-ff-whatsinthebox {
        background-image: url('/mockup_ff_whatsinthebox.jpg');
    }

</style>
