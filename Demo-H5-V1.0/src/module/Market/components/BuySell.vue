<template>
    <div class="comp-buy-sell">
        <div class="tab-list">
            <span class="tab-item" :class="{'tab-item--active':tabType==='Buy'}" @click="changeTabType('Buy')">Buy</span>
            <span class="tab-item" :class="{'tab-item--active':tabType==='Sell'}" @click="changeTabType('Sell')">Sell</span>
            <span class="tab-item" :class="{'tab-item--active':tabType==='Order'}" @click="changeTabType('Order')">Current Orders</span>
        </div>

        <div v-if="tabType === 'Order'">
            <current-order></current-order>
        </div>
        <div class="buy-sell-content" v-if="tabType!=='Order'">
            <div class="left">
                <p class="item-label">Available</p>
                <p class="item item-text">3190 SSS</p>
                <p class="item item-input">
                    <input class="input" type="text" v-model="amount" >
                    <span class="unit">ANDR</span>
                </p>
                <p class="item item-input">
                    <input class="input" type="text" v-model="price" placeholder="Price">
                    <span class="unit">SSS</span>
                </p>
                <p class="item item-tip">
                    <span>Total:</span>
                    <span>{{total}}</span>
                </p>
                <p class="item item-btn">
                    <span class="btn" :class="{'red':tabType === 'Sell','green':tabType === 'Buy'}" @click="tabType = 'Order'">{{tabType}}</span>
                </p>
            </div>

            <div class="right">
                <ul class="list red">
                    <li class="list-item">
                        <span class="price title">Price</span>
                        <span class="amount title">Amount</span>
                    </li>
                    <li class="list-item">
                        <span class="price">1.347</span>
                        <span class="amount">2647.00</span>
                    </li>
                    <li class="list-item">
                        <span class="price">1.346</span>
                        <span class="amount">234.03</span>
                    </li>
                    <li class="list-item">
                        <span class="price">1.345</span>
                        <span class="amount">546.05</span>
                    </li>
                    <li class="list-item">
                        <span class="price">1.344</span>
                        <span class="amount">10.00</span>
                    </li>
                    <li class="list-item">
                        <span class="price">1.343</span>
                        <span class="amount">120.20</span>
                    </li>
                </ul>

                <p class="current-price">1.342 SSS</p>

                <ul class="list green">
                    <li class="list-item">
                        <span class="price title">Price</span>
                        <span class="amount title">Amount</span>
                    </li>
                    <li class="list-item">
                        <span class="price">1.347</span>
                        <span class="amount">2647.00</span>
                    </li>
                    <li class="list-item">
                        <span class="price">1.346</span>
                        <span class="amount">234.03</span>
                    </li>
                    <li class="list-item">
                        <span class="price">1.345</span>
                        <span class="amount">546.05</span>
                    </li>
                    <li class="list-item">
                        <span class="price">1.344</span>
                        <span class="amount">10.00</span>
                    </li>
                    <li class="list-item">
                        <span class="price">1.343</span>
                        <span class="amount">120.20</span>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>


<script type="text/babel">
    import currentOrder from './CurrentOrder.vue'
    export default {
        data() {
            return {
                tabType:this.buySellType,
                price:'',
                amount:234,

            };
        },
        props: {
            buySellType: {
                type: String,
                default: ''
            },
        },

        components:{
            currentOrder
        },
        computed:{
            total() {
                if(this.price && this.amount){
                    return this.price * this.amount;
                }else{
                    return '--'
                }
            },
        },
        methods:{
            changeTabType(type){
                this.tabType = type;
                this.price = '';
            }
        }

    }
</script>


<style lang="sass" rel="stylesheet/scss">
    .comp-buy-sell{

        .tab-list{
            display: flex;
            background-color: #171717;
            font-size: 0.26rem;
            height: .6rem;
            line-height: .6rem;

            .tab-item{
                flex: 1;
                text-align: center;
                color:#fff;
                &--active{
                    color: #ffa424;
                }
            }
        }

        .buy-sell-content{
            display: flex;
            font-size: .22rem;
            >.left{
                flex: 1;
                padding:.3rem ;
                color:#777;
                .item{
                    padding: 0.2rem 0;
                }
                .item-label{
                    height: .5rem;
                    line-height: .5rem;
                    padding-bottom: 0.2rem;
                }
                .item-text{
                    color: #fff;
                    font-size: .26rem;
                }
                .item-input{
                    position: relative;
                    >.input{
                        display: block;
                        width: 100%;
                        color: #fff;
                        background-color: #171717;
                        border: 1px solid #2d2d2d;
                        border-radius: 0;
                        line-height: .8rem;
                        height: .8rem;
                    }
                    >.unit{
                        position: absolute;
                        right: .2rem;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
                .item-tip{
                    display: flex;
                    justify-content: space-between;
                }
                .item-btn{

                    >.btn{
                        display: block;
                        line-height: .8rem;
                        height: .8rem;
                        text-align: center;
                        color: #fff;
                    }
                    >.red{
                        background-color:#f13e79;
                    }
                    >.green{
                        background-color:#75aa3d;
                    }
                }

            }
            >.right{
                flex: 1;
                padding:.3rem ;
                >.current-price{
                    font-size: .28rem;
                    border-top: 1px solid #171717;
                    border-bottom: 1px solid #171717;
                    text-align: center;
                    color:#fff;
                    line-height: .8rem;
                    height: .8rem;

                }
                >.list{
                    .list-item{
                        display: flex;
                        line-height: .5rem;
                        height: .5rem;
                        .price{
                            flex: 1;
                        }
                        .amount{
                            flex: 1;
                            text-align: right;
                            color:#fff;
                        }
                        .title{
                            color: #777777;
                            font-size: .22rem;
                        }
                    }
                }
                >.red{
                    .price{
                        color:#f13e79;
                    }
                }
                >.green{
                    .price{
                        color:#75aa3d;
                    }
                }
            }
        }

    }
</style>