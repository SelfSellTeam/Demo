<template>
    <div class="comp-potofolio">
        <div id="piechart" style="width: 100%;height: 4.2rem"></div>
        <div class="potofolio-list">
            <div class="list-title">
                <span class="list-title-asset">Asset<img class="list-title-asset-img" src="../img/icon_triangle.png" alt=""></span>
                <span class="list-title-amount">Amount<img class="list-title-amount-img" src="../img/icon_triangle_2.png" alt=""></span>
                <span>Value($)</span>
                <span>Revenue($)</span>
            </div>
            <div class="list-item"><span>SSS</span><span>34234</span><span>1245.35</span><span>+243</span></div>
            <div class="list-item"><span>Lola</span><span>3000</span><span>800</span><span>+0</span></div>
            <div class="list-item"><span>Ella</span><span>834</span><span>150</span><span>-50</span></div>
            <div class="list-item"><span>USD</span><span>234</span><span>834</span><span>NA</span></div>
            <div class="list-item"><span>Andress</span><span>188</span><span>245</span><span>34</span></div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {};
        },
        mounted(){
            let piechart = document.querySelector('#piechart');
            this.myChart = echarts.init(piechart);
            this.drawGrap();
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                document.title = "Potofolio";
            });
        },
        methods: {
            drawGrap(){
                let option = {};
                this.myChart.setOption(option = {
                    backgroundColor: '#fff',
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        y:'center',
                        right:'10%',
                        itemWidth:14,
                        itemHeight:14,
                        data:['SSS','USD','Andres','Ella','Lola']
                    },
                    color:['#ffa424','#ff5943', '#88d064', '#00c09f', '#ff6ac9'],
                    series: [
                        {
                            name:'value',
                            type:'pie',
                            radius: ['25%', '70%'],
                            center:['35%','50%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '20',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:3424, name:'SSS'},
                                {value:3000, name:'USD'},
                                {value:834, name:'Andres'},
                                {value:234, name:'Ella'},
                                {value:188, name:'Lola'}
                            ]
                        }
                    ]
                }, true);
            }
        }

    }
</script>

<style lang="sass" rel="stylesheet/scss">
    .comp-potofolio {
        .potofolio-list {
            background-color: #fff;
            margin-top: .2rem;
            .list-item,.list-title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-left: .3rem;
                height: 1rem;
                border-bottom: 1px solid #eee;
                span{
                    width: 25%;
                    text-align: left;
                }
                &-asset,&-amount{
                    &-img {
                        vertical-align: middle;
                        width: .16rem;
                        margin-left: .2rem;
                    }
                }
            }
            >.list-title{
                color: #777;
            }
        }
    }
</style>