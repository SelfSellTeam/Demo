/**
 * Created by Administrator on 2017/3/27.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
// import vueTap from 'v-tap';

import '../css/index.scss';

import './base/init';

import Index from '../module/index/main';
import Talents from '../module/talents/main';
import Market from '../module/market/main';
import Vote from '../module/vote/main';
import View from '../module/view/main';
import Account from '../module/account/main';
// import BlockInfo from '../module/index/blockInfo/main'
// import pageFooter from '../components/footer/footer';

// Vue.use(vueTap);


import talentMain from '../module/talents/index.vue';
import talentDetail from '../module/talents/detail/detail.vue';
import coinIco from '../module/talents/coinIco/main';

import viewMain from '../module/view/components/main.vue';

import voteMain from '../module/vote/components/main.vue';
import voteDetail from '../module/vote/components/detail.vue';

import accountMain from '../module/account/components/main.vue'
import accountHistory from '../module/account/components/history.vue'
import accountPotofolio from '../module/account/components/potofolio.vue'
import accountWithdraw from '../module/account/components/withdraw.vue'
import accountDeposit from '../module/account/components/deposit.vue'
import accountContact from '../module/account/components/contact.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
        },
        {
            path: '/talents',
            name: 'talents',
            component: Talents,
            children: [
                // {
                //     path: '',
                //     name: 'talentMain',
                //     component: talentIndex
                // },
                {
                    path: 'main/:person',
                    name: 'talentMain',
                    component: talentMain
                },
                {
                    path: 'detail/:person',
                    name: 'detail',
                    component: talentDetail
                },
                {
                    path: 'ico/:person',
                    name: 'coinIco',
                    component: coinIco
                }
            ]
        },
        {
            path: '/market',
            name: 'market',
            component: Market
        },
        {
            path: '/vote',
            name: 'vote',
            component: Vote,
            children: [
                {
                    path: 'main',
                    name: 'VoteMain',
                    component: voteMain
                },
                {
                    path: 'detail',
                    name: 'voteDetail',
                    component: voteDetail
                }
            ]
        },
        {
            path: '/view',
            name: 'view',
            component: View,
            children: [
                {
                    path: 'main',
                    name: 'viewMain',
                    component: viewMain
                }
            ]
        },
        {
            path: '/account',
            name: 'account',
            component: Account,
            children: [
                {
                    path: 'main',
                    name: 'accountMain',
                    component: accountMain
                },
                {
                    path: 'history',
                    name: 'accountHistory',
                    component: accountHistory
                },
                {
                    path: 'potofolio',
                    name: 'accountPotofolio',
                    component: accountPotofolio
                },
                {
                    path: 'withdraw',
                    name: 'accountWithdraw',
                    component: accountWithdraw
                },
                {
                    path: 'deposit',
                    name: 'accountDeposit',
                    component: accountDeposit
                },
                {
                    path: 'contact',
                    name: 'accountContact',
                    component: accountContact
                },
            ]
        },

    ]
});

const app = new Vue({
    router,
    components: {
        // pageFooter
    }
}).$mount('#app');
