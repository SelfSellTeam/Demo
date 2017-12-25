<template>
    <div class="comp-view">
        <div class="tab-list">
            <span class="tab-item" :class="{'tab-item--active':tabType==='RR'}" @click="changeTabType('RR')">ROI Ranking</span>
            <span class="tab-item" :class="{'tab-item--active':tabType==='DS'}" @click="changeTabType('DS')">Distribution Statistic</span>
            <span class="tab-item" :class="{'tab-item--active':tabType==='US'}" @click="changeTabType('US')">User Story</span>
        </div>

        <div v-if="tabType === 'RR'">
            <RR></RR>
        </div>

        <div v-if="tabType === 'DS'">
            <DS></DS>
        </div>

        <div v-if="tabType === 'US'">
            <US></US>
        </div>
        

    </div>
</template>


<script type="text/babel">
    import RR from './RR.vue'
    import DS from './DS.vue'
    import US from './US.vue'
    export default {
        data() {
            return {
                tabType:'RR'
            };
        },

        components:{
            RR,
            DS,
            US
        },
        computed:{
            
        },
        methods:{
            changeTabType(type){
                this.tabType = type;
            }
        }

    }
</script>


<style lang="sass" rel="stylesheet/scss">
    .comp-view{

        .tab-list{
            display: flex;
            background-color: #fff;
            font-size: 0.16rem;
            height: 1rem;
            line-height: 1rem;
            border-bottom:1px solid rgb(221,221,221);

            .tab-item{
                flex: 1;
                text-align: center;
                color:#000;
                &--active{
                    border-bottom:2px solid #ffa424;
                }
            }
        }

        .view-content{
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