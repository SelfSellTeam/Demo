<template>
    <div class="comp-current-order">
        <ul class="list">
            <li class="list-item">
                <div class="title">
                    <span>SSS/ANDR</span>
                    <span>19:55:27</span>
                </div>
                <div class="content">
                    <div class="content-item">
                        <span class="type" style="background-color: #75aa3d">Buy</span>
                    </div>
                    <div class="content-item">
                        <span class="title">Price</span>
                        <span class="text">0.78 SSS</span>
                    </div>
                    <div class="content-item">
                        <span class="title">Amount</span>
                        <span class="text">1000.00</span>
                    </div>
                    <div class="content-item">
                        <span class="title">Total</span>
                        <span class="text">780 SSS</span>
                    </div>
                    <div class="content-item">
                        <img src="../img/ljt.png" alt="" class="img">
                    </div>
                </div>
            </li>

            <li class="list-item">
                <div class="title">
                    <span>SSS/ANDR</span>
                    <span>19:45:06</span>
                </div>
                <div class="content">
                    <div class="content-item">
                        <span class="type" style="background-color: #f13e79">Sell</span>
                    </div>
                    <div class="content-item">
                        <span class="title">Price</span>
                        <span class="text">0.78 SSS</span>
                    </div>
                    <div class="content-item">
                        <span class="title">Amount</span>
                        <span class="text">1000.00</span>
                    </div>
                    <div class="content-item">
                        <span class="title">Total</span>
                        <span class="text">780 SSS</span>
                    </div>
                    <div class="content-item">
                        <img src="../img/ljt.png" alt="" class="img">
                    </div>
                </div>
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
        }

    }
</script>


<style lang="sass" rel="stylesheet/scss">
    .comp-current-order{
        >.list{
            color: #fff;
            width: 100%;
            >.list-item{
                margin: .3rem;
                padding: 0 .2rem;
                background-color: #171717;
                >.title{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    line-height: .6rem;
                    height: .6rem;
                    border-bottom: 1px solid #2d2d2d;
                }

                >.content{
                    display: flex;
                    justify-content: space-between;
                    .content-item{
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        flex-direction: column;
                        height: 1.1rem;
                        font-size: .24rem;
                        text-align: center;
                        >.type{
                            display: inline-block;
                            width: .6rem;
                            height: .6rem;
                            line-height: .6rem;
                            border-radius: 50%;
                        }
                        >.title{
                            color: #777;

                        }
                        >.text{

                        }
                        >.img{
                            width:.4rem;
                        }
                    }

                }
            }
        }

    }
</style>