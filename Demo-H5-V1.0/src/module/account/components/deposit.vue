<template>
    <div class="comp-deposit">
        <div class="deposit-cont">
            <div class="deposit-cont-code"><img src="../img/qrcode.png" alt="" class="deposit-cont-code-img"></div>
            <div class="deposit-cont-addr">152f1muMCNa7goXYhYAQC61hxEgGacmncB</div>
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
                document.title="Deposit";
            });
        },
        methods: {}

    }
</script>

<style lang="sass" rel="stylesheet/scss">
    .comp-deposit {
        padding-top: .3rem;
        .deposit-cont{
            margin: 0 .3rem;
            padding: .88rem 0;
            border-radius: 4px;
            background: #fff;
            &-code {
                margin-bottom: .8rem;
                padding: 0 .8rem;
                &-img{
                    width: 100%;
                }
            }
            &-addr{
                text-align: center;
                font-size: .28rem;
            }
        }
    }
</style>