<template>
      <div class="atb-card" style="display:flex;flex-direction:row">
          <div style="width:100%;height:50%">
              <div ref="myCharts" style="width:100%;height:100%"></div>
              <div ref="myCharts1" style="width:100%;height:100%"></div>
          </div>
          <div style="width:100%;height:50%">
              <div ref="myCharts2" style="width:100%;height:100%"></div>
          </div>
     </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {
        
    },
    mounted() {
        this.$nextTick(function() {
            this.drawCharts()
            this.drawCharts1()
            this.drawCharts2()
        })
    },
    methods: {
        drawCharts() {
            let myChart = this.$echarts.init(this.$refs.myCharts)
            let seriesData = [60, 20, 36, 10, 10, 20]
            let option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫1', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: seriesData
                }]
            }
            myChart.setOption(option)
        },
        drawCharts1() {
            let myChart = this.$echarts.init(this.$refs.myCharts1)
            let option = {
                xAxis: {
                    data: [
                        'Jan','Feb','Mar','Apr','May','Jun'
                    ]
                },
                yAxis: {},
                series: [
                    {
                        type: 'pie',
                        center: ['405',60],
                        radius: 35,
                        data: [
                            {name: 'xx',value:52},
                            {name: 'yy',value:54},
                            {name: 'zz',value:42}
                        ]
                    },
                    {
                        type: 'line',
                        data: [24,38,56,99,120,100]
                    },
                    {
                        type: 'bar',
                        data: [10,20,30,10,10,30]
                    }
                ]
            }
            myChart.setOption(option)
        },
        drawCharts2() {
            let myChart = this.$echarts.init(this.$refs.myCharts2)
            let option = {
                xAxis: {type: 'category'},
                yAxis: {},
                dataset: {
                    source: [
                        ['Jan',34,30,'xx',52],
                        ['Feb',20,40,'yy',56],
                        ['Mar',30,35,'zz',20],
                        ['Apr',50,20],
                        ['May',33,22],
                        ['Jun',10,7]
                    ]
                },
                series: [
                    {
                        type: 'pie',
                        center: ['65%',60],
                        radius: 35,
                        encode: {itemName:3,value:4}
                    },
                    {
                        type: 'line',
                        encode: {x:0,y:1}
                    },
                    {
                        type: 'bar',
                        encode: {x:0,y:2}
                    }
                ]
            }
            myChart.setOption(option)
        },
    }
}
</script>