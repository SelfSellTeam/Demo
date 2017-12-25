<template>
    <div class="module-detail">
        <section class="detail-vedio">
            <video  controls style="width: 100%; height: 100%; ">
                <source :src="mp4Ella" type="video/mp4">
                Your browser does not support the Video tag.
            </video>
        </section>
        <section class="detail-intro">
            <div class="intro-item">
                <h2 class="item-title">Education Background<i class="item-icon"></i></h2>
                <P class="item-text">Mali Women's College 2014~2017 <br>Bachelor in sociology: marketing and international relationship  GPA2.8.</P>
            </div>
            <div class="intro-item">
                <h2 class="item-title">Career Background<i class="item-icon"></i></h2>
                <P class="item-text">WWM, CA, Summer 2016, 2017 (60 hrs/week)<br>Co-found a startup and worked on marketing and branding to sell women and children daily necessarity.</P>
            </div>
            <div class="intro-item">
                <h2 class="item-title">Salary & Inestment<i class="item-icon"></i></h2>
                <P class="item-text">I get zero salary while WWM's revenue increased to $350,000 from $2,000 last year. I have 60% shares of WWM.</P>
            </div>
        </section>
        <section class="detail-plan">
            <div class="plan-item">
                <h2 class="item-title">How I use cryptocurrency & my future plan</h2>
                <p class="item-text">50,000 SSS will be used for marketing and increase inventory of WWM. And I plan to reach $800,000 revenue this year.</p>
            </div>
        </section>
        <section class="detail-ico">
            <div class="ico-cont">
                <div class="ico-total">1,000SSS</div>
                <div class="ico-bar">
                    <div class="ico-bar-percent" :style="{width:barWidth+'%'}" ref="bar"></div>
                </div>
                <div class="ico-deadline">End at 20:00 Sep 22 (PST)</div>
            </div>
            <a class="ico-btn ui-btn" href="#/talents/ico/ella">Invest</a>
        </section>
    </div>
</template>

<script>
    import mp4Ella from './vedios/ella.mp4';
    export default {
        name:'Detail',
        data() {
            return {
                mp4Ella: mp4Ella,
                barWidth: 40
            };
        },
        props: ['ella']
    }
</script>

