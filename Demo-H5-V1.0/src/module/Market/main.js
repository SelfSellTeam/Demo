/**
 * Created by Administrator on 2017/3/29.
 */
/**
 * @file
 * @auth Tangting
 * @date 2017/2/15
 */
import Vue from 'vue';
import tpl from './tpl.html';
import './style.scss';
import commonservice from '../../common/commonService'
import Mainnav from '../../components/MainNav.vue';
import DropList from './components/DropList.vue';
import BuySell from './components/BuySell.vue'
import kline from './components/kline.vue'

export default Vue.extend({
    template: tpl,
    data(){
        return {
            isActive: false,
            page:'KLINE',
            buySellType:'Buy'
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            document.title="Market";
            vm.page = 'KLINE';
        });
    },
    mounted(){

    },
    created() {
    },
    components: {
        Mainnav,
        kline,
        DropList,
        BuySell
    },
    watch: {

    },
    methods: {
        tottleList(){
            this.isActive = !this.isActive;
        },

        turnToBuySell(val){
            this.page = 'BUYSELL';
            this.buySellType = val;
        }
    }
});
