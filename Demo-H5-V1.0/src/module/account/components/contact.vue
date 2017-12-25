<template>
    <div class="comp-contact">
        <ul class="contact-list">
            <li class="list-item"><span class="item-title">Email</span><span>hi@selfsell.com</span></li>
            <li class="list-item"><span class="item-title">Twitter</span><span>selfsell</span></li>
            <li class="list-item"><span class="item-title">Facebook</span><span>selfsell</span></li>
            <li class="list-item"><span class="item-title">Slack</span><span>selfsell.slack.com</span></li>
            <li class="list-item"><span class="item-title">Telegram</span><span>selfsell</span></li>
            <li class="list-item"><span class="item-title">Reddit</span><span>selfsell</span></li>
        </ul>
        <div class="contact-box">
            <div class="contact-box-title">Leave us a message</div>
            <textarea class="contact-box-cont"></textarea>
            <div class="ui-btn contact-box-submit">Submit</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                document.title="Contact us";
            });
        },
        methods: {}

    }
</script>

<style lang="sass" rel="stylesheet/scss">
 .comp-contact{
     $fontColor: #171717;

     padding: .16rem .3rem;
     background: #fff;
     .contact-list{
         margin-bottom: .4rem;
         >.list-item{
             display: flex;
             justify-content: flex-start;
             align-items: center;
             height: .58rem;
             font-size: .24rem;
             color: #777;
             .item-title{
                 width: 1.7rem;
                 color: $fontColor;
             }
         }
     }
     .contact-box{
         &-title{
             margin-bottom: .2rem;
         }
         &-cont{
             display: block;
             margin-bottom: .8rem;
             width: 100%;
             height: 5rem;
             border: 1px solid #eee;
         }
         &-submit{
             margin-bottom: .8rem;
             width: 100%;
             height: 1rem;
             line-height: 1rem;
             color: #fff;
             background: #171717;
         }
     }
 }
</style>