<template>
    <div>
        <get-in-touch-nav></get-in-touch-nav>

        <back-nav></back-nav>

        <div class="case-study">
            <div class="textbox top">
                <h2>The Process</h2>
                <p>Freddie’s Flowers is a weekly fresh flower subscription service. I was brought in to redesign their website and create a digital style guide to be rolled out across all their digital channels.</p>
                <p>Visit the <a href="https://www.freddiesflowers.com" target="_blank">live site</a>.</p>
            </div>

            <div class="mockup-hero mockup-white-ff-homepage">
            </div>

            <div class="textbox">
                <h3>Research</h3>
                <p>Freddie’s had been running for about four years beforeI got there so there was a fair amount of data to get my teeth into.</p>
                <p>I also interviewed members of the customer service team to understand problems users were experiencing and set up an additional abandon basket email with a quick survey to get more information on why people were reluctant to sign up.</p>
            </div>

            <div class="mockup-hero mockup-white-ff-landingpages">
            </div>

            <div class="textbox">
                <h3>User Journeys</h3>
                <p>Armed with an understanding of the audience and some of the problems they were experiencing, I created an exhaustive list of user goals and drew up ideal user journeys for them.</p>
            </div>

            <div class="mockup-hero mockup-white-ff-deliveryschedule">
            </div>

            <div class="textbox">
                <h3>Wireframes</h3>
                <p>With the user journeys in place I started wireframing and created a fully interactive prototype in Axure. This was particularly useful for the checkout and account pages as there were a lot of complicated user interactions to do with managing your delivery schedule and wider account.</p>
            </div>

            <div class="mockup-hero mockup-white-ff-wireframes">
            </div>

            <div class="textbox">
                <h3>Design Style</h3>
                <p>The existing website featured a lot of skeuomorphism and illustration – and while I wanted to keep a nod to this as it’s an important part of the wider branding – users needed to see the flowers. So I leant a lot more into photography and video.</p>
            </div>

            <div class="mockup-hero mockup-white-ff-recentdeliveries">
            </div>

            <div class="textbox">
                <h3>Checkout & Account Pages</h3>
                <p>These pages needed to be, above all, simple to use. The hard part of selling the product was done at this stage in the user journey, so I relied on a minimalist style and spacious layouts with the occasional texture or illustration where appropriate to keep the pages as distraction-free as possible.</p>
            </div>

            <div class="mockup-hero mockup-white-ff-checkout">
            </div>

            <div class="textbox">
                <h3>Style Guides</h3>
                <p>With the UI of a few key pages signed off I created a Style Guide for the developers, the existing teamand any future designers, and then rolled the designout to a few of the more complicated pages.</p>
            </div>

            <div class="mockup-hero mockup-white-ff-styleguide">
            </div>

            <div class="textbox bottom">
                <p>Using the now established digital style guides I created a series of ad templates to use on social media which resulted in an almost 20% increase in visitors.</p>
                <p>And despite this increase in traffic we saw a 14% increase in the conversion rate, an order rate increase of 8% and almost double the number of friend referrals.</p>
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

    .case-study p {
        text-transform: none;
        line-height: 1.5rem;
        letter-spacing: 0;
    }

    .case-study .textbox {
        padding: 5rem 0 5rem;
    }

    .case-study .top {
        padding-top: 3rem;
    }

    .case-study .bottom {
        padding-bottom: 10rem;
    }

    .case-study .mockup-hero {
        background-size: cover;
        background-position-x: center;
    }

    .mockup-white-ff-checkout {
        background-image: url('/mockup_white_ff_checkout.jpg');
    }
    .mockup-white-ff-deliveryschedule {
        background-image: url('/mockup_white_ff_deliveryschedule.jpg');
    }
    .mockup-white-ff-homepage {
        background-image: url('/mockup_white_ff_homepage.jpg');
    }
    .mockup-white-ff-landingpages {
        background-image: url('/mockup_white_ff_landingpages.jpg');
    }
    .mockup-white-ff-recentdeliveries {
        background-image: url('/mockup_white_ff_recentdeliveries.jpg');
    }
    .mockup-white-ff-styleguide {
        background-image: url('/mockup_white_ff_styleguide.jpg');
    }
    .mockup-white-ff-wireframes {
        background-image: url('/mockup_white_ff_wireframes.jpg');
    }


    @media only screen and (max-width: 750px) {
        .case-study .mockup-hero {
            width: 100vw;
            height: 100vw;
        }
    }


</style>
