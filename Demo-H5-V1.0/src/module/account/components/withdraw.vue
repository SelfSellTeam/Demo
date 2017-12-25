<template>
    <div class="comp-withdraw">
        <section class="withdraw-detail">
            <div class="detail-item">
                <p class="item-left"><span class="item-left-title">SSS</span></p>
                <span class="item-right"><img class="item-right-arrow" src="../img/icon_arrow.png" alt=""></span>
            </div>
            <div class="detail-item">
                <p class="item-left"><span class="item-left-title">Address</span></p>
                <span class="item-right"><img class="item-right-scan" src="../img/icon_scan.png" alt=""></span>
            </div>
            <div class="detail-item">
                <p class="item-left"><span class="item-left-title">Amount</span><span style="color: #777">max 0.003</span></p>
                <span class="item-right"></span>
            </div>
            <div class="detail-item">
                <p class="item-left"><span class="item-left-title">Fee</span><span>0.01</span></p>
                <span class="item-right">SSS</span>
            </div>
        </section>
        <div class="withdraw-btn"><span class="ui-btn">Send</span></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                document.title="Withdraw";
            });
        },
        methods: {}

    }
</script>

<style lang="sass" rel="stylesheet/scss">
    .comp-withdraw {
        padding-top: .3rem;
        .withdraw-detail{
            margin-bottom: .7rem;
            color: #171717;
            background-color: #fff;
            >.detail-item{
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-left: .3rem;
                padding-right: .3rem;
                height: 1rem;
                &:not(:last-child){
                    border-bottom: 1px solid #eee;
                }
                .item-left{
                    flex-grow: 1;
                    &-title{
                        display: inline-block;
                        width: 1.24rem;
                    }
                }
                .item-right{
                    &-arrow{
                        width: .28rem;
                    }
                    &-scan{
                        width: .4rem;
                    }
                }
            }
        }
        .withdraw-btn{
            padding: 0 .3rem;
            >.ui-btn{
                width: 100%;
                height: 1rem;
                line-height: 1rem;
                color: #fff;
                background: #171717;
            }
        }
    }
</style>