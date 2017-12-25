/**
 * Created by tangting on 2017/11/20.
 */

import Vue from 'vue';
import tpl from './tpl.html';
import './style.scss';

import Christina from './christina.vue';
import Ella from './ella.vue';

export default Vue.extend({
    template: tpl,
    name:'CoinIco',
    data(){
        return {
        }
    },
    components:{
        Christina,
        Ella
    },
    mounted(){

    },
    created() {
    },

    methods: {

    }
});
