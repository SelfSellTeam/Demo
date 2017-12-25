<template>
    <div class="comp-potofolio">
        <div id="piechart" style="width: 100%;height: 6rem"></div>
        <ul class="info-ul">
            <li class="info-li">
                <div class="left">Highest Personal Token Value:</div><div class="right">17.5 SSS</div>
            </li>
            <li class="info-li">
                <div class="left">Lowest Personal Token Value:</div><div class="right">0.03 SSS</div>
            </li>
            <li class="info-li">
                <div class="left">Average Personal Token Value:</div><div class="right">1.05 SSS</div>
            </li>
             <li class="info-li">
                <div class="left">Varience:</div><div class="right">2000%</div>
            </li>
            <li class="info-li">
                <div class="left">Personal Token Count:</div><div class="right">32</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    let piechart = document.querySelector("#piechart");
    this.myChart = echarts.init(piechart);
    this.drawGrap();
  },
  methods: {
    drawGrap() {
      let option = {};
      this.myChart.setOption(
        (option = {
          graphic: [
            {
                type: 'text',
                bottom: '10%',
                right:'10%',
                style: {
                    text: ['personal token','value(in SSS)'].join('\n'),
                    font: '13px "normal"'
                }
            },
            {
                type: 'text',
                top: '20%',
                left:0,
                style: {
                    text: 'count',
                    font: '13px "normal"'
                }
            }
          ],
          xAxis: {
            data: ["a", "b", "c", "d", "e", "f", "g", "h"],
            axisLine: { lineStyle: { color: "rgb(220, 220, 220)" } },
            axisTick: { show: false },
            axisLabel: { show: false }
          },
          yAxis: {
            // splitNumber:3,
            interval:333,
            axisLine: { lineStyle: { color: "rgb(220, 220, 220)" } },
            axisTick: { show: false },
            axisLabel: { show: false },
            splitLine:{show:false}
          },
          series: [
            {
              type: "bar",
              barWidth:'10px',
              itemStyle: {
                normal: {
                  color: function(params) {
                    //首先定义一个数组
                    var colorList = [
                      "#C33531",
                      "#EFE42A",
                      "#64BD3D",
                      "#EE9201",
                      "#29AAE3",
                      "#B74AE5",
                      "#0AAF9F",
                      "#E89589"
                    ];
                    return colorList[params.dataIndex];
                  }
                }
              },
              data: [100, 250, 600, 1000, 1200, 800, 500, 50]
            }
          ]
        }),
        true
      );
    }
  }
};
</script>

<style lang="sass" rel="stylesheet/scss">
    .comp-potofolio {
        .info-ul {
            width:90%;
            margin-left:5%;
            font-size:.25rem;
            .info-li{
                height:.5rem;
                line-height:.5rem;
                .left{
                    float:left;
                }
                .right{
                    float:right;
                }
            }
        }
    }
</style>