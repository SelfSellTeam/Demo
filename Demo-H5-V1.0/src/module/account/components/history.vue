<template>
    <div class="comp-history">
        <div class="history-header">
            <p><span class="history-header-icon">$ </span><span>238,934,67</span><span class="history-header-smallfont">(around)</span>
            </p>
        </div>
        <div class="history-list">
            <div class="list-header">History</div>
            <div class="list-title">
                <span class="list-title-date">Date<img class="list-title-date-img" src="../img/icon_triangle.png" alt=""></span>
                <span class="list-title-type">Type<img class="list-title-type-img" src="../img/icon_triangle_2.png" alt=""></span>
                <span>Token</span>
                <span>Amount</span>
            </div>
            <div class="list-item"><span>14:03:00 Sep 20</span><span>Withdraw</span><span>LENO</span><span>15.3</span></div>
            <div class="list-item"><span>14:03:00 Sep 20</span><span>Deposit</span><span>SSS</span><span>ANDR</span></div>
            <div class="list-item"><span>14:03:00 Sep 20</span><span>Buy</span><span>SARA</span><span>1</span></div>
            <div class="list-item"><span>14:03:00 Sep 20</span><span>Sell</span><span>SARA</span><span>1000</span></div>
            <div class="list-item"><span>14:03:00 Sep 20</span><span>Invest</span><span>ANRD</span><span>500</span></div>
            <div class="list-item"><span>14:03:00 Sep 20</span><span>Invest</span><span>SARA</span><span>100</span></div>
            <div class="list-item"><span>14:03:00 Sep 20</span><span>Invest</span><span>LEON</span><span>100</span></div>
            <div class="list-item"><span>14:03:00 Sep 20</span><span>Bonus</span><span>SSS</span><span>100</span></div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                document.title="History";
            });
        },
        methods: {}

    }
</script>

<style lang="sass" rel="stylesheet/scss">
    @import "../../../css/base/var";

    .comp-history {
        .history-header {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2.6rem;
            font-size: .56rem;
            color: #fff;
            background-color: #171717;
            &-icon {
                color: $color-orange;
            }
            &-smallfont{
                font-size: .26rem;
                color: #bbb;
            }
        }
        .history-list {
            background-color: #fff;
            >.list-header {
                padding: 0 .26rem;
                line-height: .9rem;
                height: .9rem;
                font-size: .3rem;
                font-weight: normal;
                color: #171717;
                background-color: #eee;
            }
            .list-item,.list-title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-left: .3rem;
                height: 1rem;
                border-bottom: 1px solid #eee;
                span{
                    &:first-child{
                        width: 33%;
                    }
                    &:last-child{
                        width: 17%;
                    }
                }
                &-date,&-type{
                    &-img {
                        vertical-align: middle;
                        width: .16rem;
                        margin-left: .2rem;
                    }
                }
            }
        }
    }
</style>