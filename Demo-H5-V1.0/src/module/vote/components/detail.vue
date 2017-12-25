<template>
    <div class="module-detail">
        <section class="detail-vedio">
            <video  controls style="width: 100%; height: 100%; ">
                <source :src="mp4Ella" type="video/mp4">
                Your browser does not support the Video tag.
            </video>
            <div class="mask">
                <img src="../img/xin.png">
                <span>99</span>
            </div>
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

        <a class="vote ui-btn">Ask me a question</a>
        <a class="vote ui-btn">Chanllege the integrity</a>
    </div>
</template>

<script>
    import mp4Ella from '../video/ella.mp4';
    export default {
        data() {
            return {
                mp4Ella:mp4Ella
            };
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                document.title="lisa";
            });
        },
        methods:{

        }

    }
</script>

