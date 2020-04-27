<template>
    <div>
        <get-in-touch-nav></get-in-touch-nav>

        <back-nav></back-nav>

        <div class="case-study bottom-spacer">
            <h2>Freddie’s Flowers</h2>
            <p>Fresh flowers delivered weekly for £24 a pop.</p>
            <h5>Visit the <a href="https://www.freddiesflowers.com" target="_blank">live site</a></h5>
            <div class="flexcontainer">
                <div class="projectthumbnail mockup-hero">
                    <video class="video_zoom_on_mobile video_shunt_on_mobile" autoplay muted loop>
                        <source src="/landscape_05.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="projectthumbnail mockup-square">
                    <video class="video_zoom_on_mobile" autoplay muted loop>
                        <source src="/ff_landingpages_video.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="projectthumbnail mockup-landscape show-on-desktop">
                    <video class="video_zoom_on_mobile" autoplay muted loop>
                        <source src="/ff_howitworks.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div class="projectthumbnail mockup-square mockup-ff-styleguide-01">
                </div>
                <div class="projectthumbnail mockup-square mockup-ff-styleguide-02">
                </div>
                <div class="projectthumbnail mockup-square mockup-ff-styleguide-03">
                </div>

                
                <div class="flexcontainer container-square">
                    <div class="projectthumbnail mockup-square mockup-ff-dashboard">
                    </div>
                    <div class="projectthumbnail mockup-square mockup-ff-currentbox">
                    </div>
                    <div class="projectthumbnail mockup-square mockup-ff-account hide-on-ipad">
                    </div>
                    <div class="projectthumbnail mockup-square mockup-ff-ratemyflowers hide-on-ipad">
                    </div>
                </div>
                <div class="projectthumbnail mockup-portrait">
                    <video class="video_zoom_on_mobile" autoplay muted loop>
                        <source src="/ff_calendar.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div class="projectthumbnail mockup-square mockup-ff-account show-on-ipad">
                </div>
                <div class="projectthumbnail mockup-square mockup-ff-ratemyflowers show-on-ipad">
                </div>

            </div>
        </div>

        <footer-bar></footer-bar>

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
    .mockup-ff-recentdeliveriesdesktop {
        background-image: url('/mockup_ff_recentdeliveries.jpg');
    }
    .mockup-ff-dashboard {
        background-image: url('/mockup_ff_dashboard.jpg');
    }
    .mockup-ff-currentbox {
        background-image: url('/mockup_ff_currentbox.jpg');
    }
    .mockup-ff-account {
        background-image: url('/mockup_ff_account.jpg');
    }
    .mockup-ff-ratemyflowers {
        background-image: url('/mockup_ff_ratemyflowers.jpg');
    }

</style>
