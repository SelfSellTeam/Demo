<template>
    <div class="module-detail">
        <section class="detail-vedio">
            <video  controls style="width: 100%; height: 100%; ">
                <source :src="vedioMp4" type="video/mp4">
                Your browser does not support the Video tag.
            </video>
        </section>
        <section class="detail-intro">
            <div class="intro-item">
                <h2 class="item-title">Education Background<i class="item-icon"></i></h2>
                <P class="item-text">CARLETON COLLEGE,  2016~2018<br>B.A., magna cum laude in Political Science.</P>
            </div>
            <div class="intro-item">
                <h2 class="item-title">Career Background<i class="item-icon"></i></h2>
                <P class="item-text">Manage my own Youtube Channel with brand "Chris Daily"<br>800k followers and 11,000 views on average.</P>
            </div>
            <div class="intro-item">
                <h2 class="item-title">Salary & Inestment<i class="item-icon"></i></h2>
                <P class="item-text">$180,000 per year (based on last year).</P>
            </div>
        </section>
        <section class="detail-plan">
            <div class="plan-item">
                <h2 class="item-title">How I use cryptocurrency & my future plan</h2>
                <p class="item-text">20,000 SSS will be used for my travel next year. As a youbute creator, I share interesting staff in my daily life, and I plan to expand my videos to world tour to find more interesting things.</p>
            </div>
        </section>
        <section class="detail-ico">
            <div class="ico-cont">
                <div class="ico-total">20,000SSS</div>
                <div class="ico-bar">
                    <div class="ico-bar-percent" :style="{width:barWidth+'%'}" ref="bar"></div>
                </div>
                <div class="ico-deadline">End at 20:00 Nov 22 (PST)</div>
            </div>
            <a class="ico-btn ui-btn" href="#/talents/ico/christina">Invest</a>
        </section>
    </div>
</template>

<script>
    import vedioMp4 from './vedios/christina.mp4';
    export default {
        name:'Detail',
        data() {
            return {
                vedioMp4: vedioMp4,
                barWidth: 30
            };
        },

        props: ['Christina']
    }
</script>

