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

import Mainnav from '../../components/MainNav.vue';

export default Vue.extend({
    template: tpl,
    data(){
        return {

        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            document.title="Talents";
        });
    },
    mounted(){

    },
    created() {
    },
    components: {
        Mainnav
    },
    watch: {

    },
    methods: {

    }
});
