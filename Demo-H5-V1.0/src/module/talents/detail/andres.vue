<template>
    <div class="module-detail">
        <section class="detail-vedio">
            <video  controls style="width: 100%; height: 100%; ">
                <source :src="mp4Andres" type="video/mp4">
                Your browser does not support the Video tag.
            </video>
        </section>
        <section class="detail-intro">
            <div class="intro-item">
                <h2 class="item-title">Education Background<i class="item-icon"></i></h2>
                <P class="item-text">Harvard University 2010–2014 <br>Bachelor: International Law, International Relations GPA: 3.84</P>
            </div>
            <div class="intro-item">
                <h2 class="item-title">Career Background<i class="item-icon"></i></h2>
                <P class="item-text">CBS Interactive Irvine, CA  2014~2017 (Full time job)<br>Lawyer</P>
            </div>
            <div class="intro-item">
                <h2 class="item-title">Salary & Inestment<i class="item-icon"></i></h2>
                <P class="item-text">$160,000 per year (Based on last year)</P>
            </div>
        </section>
        <section class="detail-return">
            <div class="return-item">
                <h2 class="item-title">In Return History<br>(per thousand personal token)</h2>
                <ul class="item-list">
                    <li>
                        <span class="item-list-time">2017-09-13</span>
                        <i class="item-list-line"></i>
                        <span class="item-list-account">15.73 SSS</span>
                    </li>
                    <li>
                        <span class="item-list-time">2017-08-13</span>
                        <i class="item-list-line"></i>
                        <span class="item-list-account">33.14 SSS</span>
                    </li>
                    <li>
                        <span class="item-list-time">2017-07-13</span>
                        <i class="item-list-line"></i>
                        <span class="item-list-account">13.24 SSS</span>
                    </li>
                    <li>
                        <span class="item-list-more">...More</span>
                    </li>
                </ul>
            </div>
        </section>
        <section class="detail-plan">
            <div class="plan-item" style="border-bottom: none">
                <h2 class="item-title">How I use cryptocurrency & my future plan</h2>
                <p class="item-text">92384 SSS used for Standford MBA program, and I use my free time to answer and help
                    young student into financial consultant industry.</p>
            </div>
            <a class="plan-btn ui-btn" href="index.html#/market">Go to Trade</a>
        </section>
    </div>
</template>

<script>
    import mp4Andres from './vedios/andres.mp4';
    export default {
        data() {
            return {
                mp4Andres: mp4Andres,
                barWidth: 40
            };
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                document.title="Andres Details";
            });
        },
        props: ['andres']
    }
</script>

