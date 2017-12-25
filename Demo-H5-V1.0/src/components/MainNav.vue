<!--
 *
 * 底部菜单
 *
 * 使用方法：
 *     <main-nav current="mine"></main-nav>
 *
 * current: 当前页面
 * show-activity-icon: 只有首页需要传入这个值，其他页面直接判断cookie
 *
 -->


<template>

    <!--<div class="nav" @@if(typeof keyboard !== 'undefined'){data-keyboard="@@keyboard"}>-->
    <div class="nav" >

        <div class="nav-item" :class="{'on': current==='talents'}">
            <a :href="current==='talents' ? 'javascript:;' : 'index.html#/talents/main/ella'" class="nav-link" v-tap>
                <span class="nav-icon"><i class="nav-talents"></i></span>
                <span class="nav-name">Talents</span>
            </a>
        </div>

        <div class="nav-item" :class="{'on': current==='market'}">
            <a :href="current==='market' ? 'javascript:;' : 'index.html#/market'" class="nav-link" v-tap>
                <span class="nav-icon"><i class="nav-market"></i></span>
                <span class="nav-name">Market</span>
            </a>
        </div>

        <div class="nav-item" :class="{'on': current==='vote'}">
            <a :href="current==='vote' ? 'javascript:;' : 'index.html#/vote/main'" class="nav-link" v-tap>
                <span class="nav-icon"><i class="nav-vote"></i></span>
                <span class="nav-name">Votes</span>
            </a>
        </div>

        <div class="nav-item" :class="{'on': current==='view'}">
            <a :href="current==='view' ? 'javascript:;' : 'index.html#/view/main'" class="nav-link" v-tap>
                <span class="nav-icon"><i class="nav-view"></i></span>
                <span class="nav-name">Views</span>
            </a>
        </div>

        <div class="nav-item" :class="{'on': current==='account'}">
            <a :href="current==='account' ? 'javascript:;' : 'index.html#/account/main'" class="nav-link" v-tap>
                <span class="nav-icon"><i class="nav-account"></i></span>
                <span class="nav-name">Account</span>
            </a>
        </div>
    </div>

</template>


<script>
    export default {
        data() {
            return {

            };
        },
        props: ['current']
    }
</script>


<style lang="sass" rel="stylesheet/scss">

    .view-nav{
        opacity: 0;
    }
    .nav {
        $img: './images';
        $names: 'talents' 'market' 'vote' 'view' 'account';
        $width: .4rem;
        $height: .4rem;

        $bg: #171717;
        $def: #777;
        $on-font: #ffa424;

        @mixin bgimg($url: null, $width: 0, $height: $width) {
            width: $width;
            height: $height;
            background-image: url($url);
            background-repeat: no-repeat;
            background-size: contain;
        }

        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.96rem;
        background-color: $bg;

        &-item {
            flex: 1;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-bottom: .1rem;
        }
        &-link {
            display: flex;
            flex-direction: column;
            padding-top: .22rem;
            padding-bottom: .06rem;
        }
        &-icon {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            /*// flex-direction: column; */
        }
        &-icon2{
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: center;
            margin-top: -.24rem;
        }
        &-name {
            color: $def;
            text-align: center;
            font-size: .2rem;
            line-height: 1.7;
            white-space: nowrap;
            .on & {
                color: $on-font;
            }
        }

        @each $n in $names {
            &-#{$n} {
                display: inline-block;
                @include bgimg($img + '/' + $n + '.png', $width, $height);

                .on & {
                    @include bgimg($img + '/' + $n + '-on.png', $width, $height);
                }
            }
        }
    }
    .outer{
        position: relative;
        flex-direction: column;
        padding-bottom: .18rem;
    }
    .nav-curve{
        position: absolute;
        top: -32%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        border-radius: .54rem;
        border: 1px solid #DFDFDF;
        width: 1.08rem;
        height: 1.08rem;
        z-index: 997;
    }
    .nav-cover{
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        width: 1.16rem;
        height: 1.16rem;
        z-index: 998;
    }
</style>
