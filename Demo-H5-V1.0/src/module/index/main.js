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

export default Vue.extend({
    name: 'index',
    template: tpl,
    data(){
        return {

        }
    },
    mounted(){
        let img=new Image();
        img.src="./images/nan.jpg";
        let img1=new Image();
        img1.src="./images/nv.jpg";
        let img2=new Image();
        img2.src="./images/wh.jpg";
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            document.title="Index";
        });
    },
    methods: {
        enter(){
            this.$router.push({name: 'talentMain',params:{person:'ella'}});
        }
    }
});
