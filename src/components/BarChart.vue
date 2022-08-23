<template>
    <div class="Echarts">
        <div :id="echartId" style="width:300px;height:200px;"></div>
    </div>
</template>

<script>
    import * as echarts from 'echarts/core';
    import { TooltipComponent, GridComponent } from 'echarts/components';
    import { BarChart } from 'echarts/charts';
    import { CanvasRenderer } from 'echarts/renderers';

    echarts.use([TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

    export default {
        name: 'BarChart',
        props: {
            echartId: String
            //value: Number
        },

        methods: {
            myEcharts() {
                var chartDom = document.getElementById(this.echartId);
                var myChart = echarts.init(chartDom);
                var option;

                option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: 'Direct',
                            type: 'bar',
                            barWidth: '60%',
                            data: [10, 52, 200, 334, 390, 330, 220]
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