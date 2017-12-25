<template>
    <div class="comp-droplist">
        <ul class="list">
            <li class="list-item" @click="changeTradingPair('ELLA')">
                <span class="item-label">ELLA/SSS</span>
                <span class="item-text">1.234</span>
                <span class="item-text green">+10%</span>
            </li>
            <li class="list-item" @click="changeTradingPair('ANDR')">
                <span class="item-label">ANDR/SSS</span>
                <span class="item-text">1.342</span>
                <span class="item-text red">0.0%</span>
            </li>
            <li class="list-item" @click="changeTradingPair('TIME')">
                <span class="item-label">TIME/SSS</span>
                <span class="item-text">1.008</span>
                <span class="item-text red">-5%</span>
            </li>
            <li class="list-item" @click="changeTradingPair('BUST')">
                <span class="item-label">BUST/SSS</span>
                <span class="item-text">2.234</span>
                <span class="item-text green">+2.92%</span>
            </li>
        </ul>
    </div>
</template>


<script type="text/babel">
    export default {
        data() {
            return {

            };
        },
        methods:{
            changeTradingPair(val){
                this.$emit('hide')
            }
        }

    }
</script>


<style lang="sass" rel="stylesheet/scss">
    .comp-droplist{
        position: absolute;
        top:.9rem;
        left: 0;
        width: 100%;
        padding: 0.2rem 0.3rem;
        box-sizing: border-box;
        line-height: 0.52rem;
        border-top: 1px solid #171717;
        background-color: rgba(00,00,00,.8);
        z-index: 2;
        font-size: .26rem;

        >.list{
            >.list-item{
                >.item-label{
                    display: inline-block;
                    width: 2.5rem;
                    color: #fff;
                }
                >.item-text{
                    display: inline-block;
                    width: 1.1rem;
                    color: #fff;
                }
                >.red{
                    color: #f13e79;
                }
                >.green{
                    color: #75aa3d;
                }
            }
        }

    }
</style>