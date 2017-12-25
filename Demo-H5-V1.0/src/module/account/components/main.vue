<template>
    <div class="comp-main">
        <ul>
            <li class="main-item">
                <router-link to="/account/history" v-tap></router-link>
                <span class="main-item-name">History</span>
            </li>
            <li class="main-item">
                <router-link to="/account/potofolio" v-tap></router-link>
                <span class="main-item-name">Potofolio</span>
            </li>
            <li class="main-item">
                <router-link to="/account/deposit" v-tap></router-link>
                <span class="main-item-name">Deposit</span>
            </li>
            <li class="main-item">
                <router-link to="/account/withdraw" v-tap></router-link>
                <span class="main-item-name">Withdraw</span>
            </li>
            <li class="main-item">
                <router-link to="/account/contact" v-tap></router-link>
                <span class="main-item-name">Contact us</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                document.title="Account";
            });
        },
        methods:{

        }

    }
</script>

<style lang="sass" rel="stylesheet/scss">
    .comp-main{
        padding-top: .3rem;
        ul{
            background-color: #fff;
            .main-item{
                position: relative;
                margin-left: .3rem;
                height: 1rem;
                line-height: 1rem;
                font-size: .28rem;
                color: #171717;
                background-color: #fff;
                &:not(:last-child){
                    border-bottom: 1px solid #eee;
                }
                & > a:first-child {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>