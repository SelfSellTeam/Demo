<template>
    <div class="comp-potofolio">
        <div id="piechart" class="piechart">
        </div>
        <!-- <img src="../images/r1.png" alt="" style="display:none;"> -->
        <div class="gap">&nbsp;</div>
        <div id="piechart1" class="piechart">
        </div>
        <!-- <img src="../images/r2.png" alt="" style="display:none;"> -->
    </div>
</template>
<script>
    import imgR1 from '../images/r1.png';
    import imgR2 from '../images/r2.png';
    export default {
        data() {
            return {
                imgR1:imgR1,
                imgR2:imgR2
            };
        },
        mounted(){
            let piechart = document.querySelector('#piechart');
            this.myChart = echarts.init(piechart);
            this.drawGrap();

            let piechart1 = document.querySelector('#piechart1');
            this.myChart1 = echarts.init(piechart1);
            this.drawGrap1();
        },
        methods: {
            drawGrap(){
                let option = {};
                this.myChart.setOption(option = {
                    graphic: [
                    {
                        type: 'group',
                        left: '6%',
                        top:'10%',
                        width:'45%',
                        children: [
                            {
                                type: 'text',
                                top: 0,
                                left:0,
                                style: {
                                    text: '1st Alex',
                                    font: '20px "normal"'
                                }
                            },
                            {
                                type: 'image',
                                left: 80,
                                top: 2,
                                style: {
                                    // image: '../images/r1.png',
                                    image: this.imgR1,
                                    width: 20   
                                }
                            },
                            {
                                type: 'text',
                                top: 25,
                                left:0,
                                style: {
                                    text: 'My Potofolio',
                                    font: '13px "normal"'
                                }
                            }
                        ]
                    },
                    {
                        type: 'text',
                        bottom: '5%',
                        left:'6%',
                        style: {
                            text: 'Total Return',
                            font: '13px "normal"'
                        }
                    },
                    {
                        type: 'text',
                        bottom: '5%',
                        left:'64%',
                        style: {
                            text: '3400%',
                            font: '13px "normal"'
                        }
                    }
                    ],
                    backgroundColor: '#fff',
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        y:'center',
                        left:'5%',
                        itemWidth:14,
                        itemHeight:14,
                        height:80,
                        data:['SSS','USD','Andres','Ella','Lola']
                    },
                    color:['#ffa424','#ff5943', '#88d064', '#00c09f', '#ff6ac9'],
                    series: [
                        {
                            name:'value',
                            type:'pie',
                            radius: ['25%', '70%'],
                            center:['70%','50%'],
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
            },
            drawGrap1(){
                let option = {};
                this.myChart1.setOption(option = {
                    graphic: [
                    {
                        type: 'group',
                        left: '6%',
                        top:'10%',
                        width:'45%',
                        children: [
                            {
                                type: 'text',
                                top: 0,
                                left:0,
                                style: {
                                    text: '2st David',
                                    font: '20px "normal"'
                                }
                            },
                            {
                                type: 'image',
                                left: 95,
                                top: 2,
                                style: {
                                    // image: '../images/r2.png',
                                    image: this.imgR2,
                                    width: 20   
                                }
                            },
                            {
                                type: 'text',
                                top: 25,
                                left:0,
                                style: {
                                    text: 'My Potofolio',
                                    font: '13px "normal"'
                                }
                            }
                        ]
                    },
                    {
                        type: 'text',
                        bottom: '5%',
                        left:'6%',
                        style: {
                            text: 'Total Return',
                            font: '13px "normal"'
                        }
                    },
                    {
                        type: 'text',
                        bottom: '5%',
                        left:'64%',
                        style: {
                            text: '1200%',
                            font: '13px "normal"'
                        }
                    }
                    ],
                    backgroundColor: '#fff',
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        y:'center',
                        left:'5%',
                        itemWidth:14,
                        itemHeight:14,
                        height:80,
                        data:['SSS','USD','Lola']
                    },
                    color:['#ffa424','#ff5943', '#ff6ac9'],
                    series: [
                        {
                            name:'value',
                            type:'pie',
                            radius: ['25%', '70%'],
                            center:['70%','50%'],
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
        .piechart{
            width: 100%;
            height: 5rem;
            .potofo{
                border:1px solid red;
                width:20px;
                height:20px;
            }
        }
        .gap{
            width:100%;
            height:'.4rem';
            background-color: #f4f4f4;
        }
    }
</style>