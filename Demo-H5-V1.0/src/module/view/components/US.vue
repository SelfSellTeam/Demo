<template>
    <div class="comp-us">
        <div class="item">
            <img class="avar" src="../images/tu1.png"/>
            <div class="remark">
                <p>Why I invest Ella?</p>
                <p>And we become friend now.We talked lot of her future career path, how to help other young ladys in school,and take independent role in our society....</p>
                <a>more></a>
            </div>
        </div>

        <div class="item">
            <img class="avar" src="../images/tu2.png"/>
            <div class="remark">
                <p>How I grow using the crowfund?</p>
                <p>And we become friend now.We talked lot of her future career path, how to help other young ladys in school,and take independent role in our society....</p>
                <a>more></a>
            </div>
        </div>
        
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        mounted(){
            
        },
        methods: {
        }

    }
</script>

<style lang="sass" rel="stylesheet/scss">
    .comp-us {
        .item {
            width:100%;
            margin-bottom:.6rem;
            .avar{
                width:100%;
            }
            .remark{
                width:90%;
                margin-left:5%;
                word-break:break-all;
                font-size:.25rem;
                line-height:.5rem;
                position:relative;
                a{
                    position:absolute;
                    bottom:0;
                    right:0;
                    color:#ffa424;
                }
            }
        }
    }
</style>