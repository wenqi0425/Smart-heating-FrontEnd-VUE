<template>
    <div class="Echarts">
        <div :id="echartId" style="width:auto;height:500px;"></div>
    </div>
</template>

<script>
    import * as echarts from 'echarts/core';
    import {
        TooltipComponent,
        GridComponent,
        LegendComponent
    } from 'echarts/components';
    import { LineChart, BarChart } from 'echarts/charts';
    import { UniversalTransition } from 'echarts/features';
    import { CanvasRenderer } from 'echarts/renderers';

    echarts.use([
        TooltipComponent,
        GridComponent,
        LegendComponent,
        LineChart,
        BarChart,
        CanvasRenderer,
        UniversalTransition
    ]);

    export default {
        name: 'LineBarChart',
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

                // Generate data
                let category = [];
                let dottedBase = +new Date();
                let lineData = [];
                let barData = [];
                for (let i = 0; i < 20; i++) {
                    let date = new Date((dottedBase += 3600 * 24 * 1000));
                    category.push(
                        [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
                    );
                    let b = Math.random() * 200;
                    let d = Math.random() * 200;
                    barData.push(b);
                    lineData.push(d + b);
                }

                // option
                option = {
                    backgroundColor: '#100C2A',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['Expense', 'Energy'],
                        textStyle: {
                            color: '#ccc',
                        }
                    },
                    xAxis: {
                        data: category,
                        axisLine: {
                            lineStyle: {
                                color: '#ccc'
                            }
                        }
                    },
                    yAxis: {
                        splitLine: { show: false },
                        axisLine: {
                            lineStyle: {
                                color: '#ccc'
                            }
                        }
                    },
                    series: [
                        {
                            name: 'Expense',
                            type: 'line',
                            smooth: true,
                            showAllSymbol: true,
                            symbol: 'emptyCircle',
                            symbolSize: 15,
                            data: lineData,
                            color: '#FB4141'
                        },
                        {
                            name: 'Energy',
                            type: 'bar',
                            barWidth: 20,
                            itemStyle: {
                                borderRadius: 5,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: '#14c8d4' },
                                    { offset: 1, color: '#43eec6' }
                                ])
                            },
                            data: barData
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