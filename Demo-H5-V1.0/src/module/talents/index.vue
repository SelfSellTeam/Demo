<template>
<div class="module-talents">
    <!--ella-->
    <div class="talents-item ella" v-if="$route.params.person === 'ella'">
        <!-- <div class="face-btn">
            <a class="btn like" href="#/talents/detail/ella"  :class="{'like--active':like }" @click="chooseFace"></a>
        </div> -->
        <div class="icoFlag">
            <img src="./img/zc.png"/>
            <span>In CrowdFunding</span>
        </div>

        <div class="labels">
            <p class="name">Ella</p>
            <p class="label-list">
                <span class="label-item">Mali Women's College</span>
            </p>
            <p class="label-list">
                <span class="label-item">Start own business for selling children daily necessities</span>
            </p>
            <p class="label-list">
                <span class="label-item">20 years old</span>
                <span class="label-item">A big family with 8 sisters/brothers</span>
            </p>
        </div>

        <div class="mask" @click="redirectTo('#/talents/detail/ella')"></div>

        <div class="swipe-nav">
            <a class="left" href="javascript:;" @click="turnTo('christina')"><img src="./img/left.png" alt="" width="20" ></a>
            <a class="right" href="javascript:;" @click="turnTo('andres')"><img src="./img/right.png" alt="" width="20" ></a>
        </div>

        <div class="bg"></div>
        
    </div>





    <div class="talents-item andres" v-if="$route.params.person === 'andres'">
        <!-- <div class="face-btn">
            <a class="btn like" href="#/talents/detail/andres"  :class="{'like--active':like }" @click="chooseFace"></a>
        </div> -->

        

        <div class="mask" @click="redirectTo('#/talents/detail/andres')"></div>


        <div class="labels">
            <p class="name">Andres</p>
            <p class="label-list">
                <span class="label-item">American Political Science Association Award</span>
            </p>
            <p class="label-list">
                <span class="label-item">Law school</span>
                <span class="label-item">Harvard University</span>
                <span class="label-item">21 years old</span>
            </p>
            <p class="label-list">
                <span class="label-item">good at swimming</span>
                <span class="label-item">Keen on public interest</span>
            </p>
        </div>

        <div class="swipe-nav">
            <a class="left" href="javascript:;" @click="turnTo('ella')"><img src="./img/left.png" alt="" width="20" ></a>
            <a class="right" href="javascript:;" @click="turnTo('christina')"><img src="./img/right.png" alt="" width="20" ></a>
        </div>

        <div class="bg"></div>
    </div>




    <div class="talents-item christina" v-if="$route.params.person === 'christina'">
        <!-- <div class="face-btn">
            <a class="btn like" href="#/talents/detail/christina"  :class="{'like--active':like }" @click="chooseFace"></a>
        </div> -->
        <div class="icoFlag">
            <img src="./img/zc.png"/>
            <span>In CrowdFunding</span>
        </div>

        <div class="mask" @click="redirectTo('#/talents/detail/christina')"></div>

        


        <div class="labels">
            <p class="name">Christina</p>
            <p class="label-list">
                <span class="label-item">800k followers on Youbute channel</span>
            </p>
            <p class="label-list">
                <span class="label-item">Passions for all creative expression</span>
                <span class="label-item">18 years old</span>
            </p>
            <p class="label-list">
                <span class="label-item">carleton college</span>
                <span class="label-item">major in Political Science</span>
            </p>
        </div>

        <div class="swipe-nav">
            <a class="left" href="javascript:;" @click="turnTo('andres')"><img src="./img/left.png" alt="" width="20" ></a>
            <a class="right" href="javascript:;" @click="turnTo('ella')"><img src="./img/right.png" alt="" width="20" ></a>
        </div>

        <div class="bg"></div>
    </div>

</div>
</template>


<script>
    export default {
        data() {
            return {
                like:true,
                page:1
            };
        },
        methods:{
            chooseFace(){
                this.like = !this.like
            },

            turnTo(page){
                this.page = page;
                location.href="#/talents/main/"+page;
                this.like = true;
            },

             redirectTo(page){
                location.href=page;
            }
        }

    }
</script>


<style lang="sass" rel="stylesheet/scss">

    .module-talents{
        width: 100%;
        height: 100%;

        .talents-item{
            position: relative;
            width: 100%;
            height: 100%;
            .icoFlag{
                height:.65rem;
                position:absolute;
                top:.5rem;
                width:100%;
                background-image: url("./img/di.png");
                background-repeat: no-repeat;
                background-size:auto 100%;
                background-position:.1rem;
                display:flex;
                align-items:center;
                color:#ffa424;
                font-size:.22rem;
                img{
                    height:70%;
                    margin-left:.15rem;
                    margin-right:.15rem;
                }
            }
            .face-btn{
                padding-top: 0.8rem;
                padding-left: 0.4rem;
                .btn{
                    display: inline-block;
                    width: 0.48rem;
                    height: 0.48rem;
                    background-repeat: no-repeat;
                    background-size: 100%;
                    margin-right: 0.16rem;
                }
                >.like{
                    background-image: url("./img/like.png");
                    &--active{
                        background-image: url("./img/like2.png");
                    }
                }
                >.unlike{
                    background-image: url("./img/unlike.png");
                    &--active{
                        background-image: url("./img/unlike2.png");
                    }
                }
            }

            .swipe-nav{
                position: absolute;
                top: 50%;
                transform: translateY(-50%);

                display: flex;
                justify-content: space-between;
                width: 100%;
                >.left{
                    padding-left: 0.32rem;
                }
                >.right{
                    padding-right: 0.32rem;
                    justify-content: flex-end;
                }
                a{
                    width:2rem;
                    height:2rem;
                    display:flex;
                    align-items:center;
                }
            }

            .labels{
                position: absolute;
                bottom: 15%;
                width: 100%;
                >.name{
                    color: #fff;
                    font-size: 0.6rem;
                    text-align: center;
                }
                .label-list{
                    display: flex;
                    justify-content: space-around;
                    padding: 0.08rem 0;
                    .label-item{
                        display: inline-block;
                        padding: 0.04rem 0.16rem;
                        background: rgba(51, 51, 51, 0.4);
                        font-size: 0.22rem;
                        color:#fff;
                    }
                }
            }

            .bg{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;

                background-repeat: no-repeat;
                background-size: 100%;
                z-index: -1;
            }
            .mask{
                position: absolute;
                top: 0;
                left: 0;
                background-color:rgba(255, 255, 255, 0); 
                margin:0px;
                padding:0px;
                width:90%;
                height:90%;

            }
        }

        .ella{
            .bg{
                background-image: url("./img/nv.jpg");
            }
        }
        .andres{
            .bg{
                background-image: url("./img/nan.jpg");
            }
        }
        .christina{
            .bg{
                background-image: url("./img/wh.jpg");
            }
        }
    }
</style>