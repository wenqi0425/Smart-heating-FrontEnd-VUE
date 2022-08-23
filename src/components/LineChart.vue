<template>
    <div class="Echarts">
        <div :id="echartId" style="width:300px;height:200px;"></div>
    </div>
</template>

<script>
  /*  import * as echarts from 'echarts';*/

    import * as echarts from 'echarts/core';
    import { GridComponent } from 'echarts/components';
    import { LineChart } from 'echarts/charts';
    import { UniversalTransition } from 'echarts/features';
    import { CanvasRenderer } from 'echarts/renderers';

    echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

    export default {
        name: 'LineChart',
        props: {
            echartId: String,
            echartColor: String
            //value: Number
        },

        methods: {
            myEcharts() {
                var chartDom = document.getElementById(this.echartId);
                var myChart = echarts.init(chartDom);
                var option;

                option = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    },
                    yAxis: {
                        type: 'value',
                    },

                    // The policy to take color from option.color. Valid values:
                    // 'series': assigns the colors in the palette by series, so that all data in the same series are in the same color;
                    // 'data': assigns colors in the palette according to data items, with each data item using a different color.

                    series: [
                        {
                            data: [-10, -5, 0, 5, 10, 15, 20],
                            type: 'line',                            
                            itemStyle: {
                                normal: {
                                    color: this.echartColor,
                                    lineStyle: {
                                        width: 5//…Ë÷√œﬂÃı¥÷œ∏
                                    }
                                }
                            }
                        }
                    ]
                };

                option && myChart.setOption(option);
            }
        },

        // to install the current myEcharts to the webpage.
        mounted() {
            this.myEcharts();
        }
    }
</script>

<style scoped>
</style>