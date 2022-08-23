<template>
    <div class="Echarts">
        <div :id="echartId" style="width:400px;height:300px;"></div>
    </div>
</template>

<script>
    import * as echarts from 'echarts/core';
    import {
        TitleComponent,
        ToolboxComponent,
        TooltipComponent,
        GridComponent,
        LegendComponent,
        MarkLineComponent,
        MarkPointComponent
    } from 'echarts/components';

    import { LineChart } from 'echarts/charts';
    import { UniversalTransition } from 'echarts/features';
    import { CanvasRenderer } from 'echarts/renderers';

    echarts.use([
        TitleComponent,
        ToolboxComponent,
        TooltipComponent,
        GridComponent,
        LegendComponent,
        MarkLineComponent,
        MarkPointComponent,
        LineChart,
        CanvasRenderer,
        UniversalTransition
    ]);

    export default {
        name: 'ComingLineChart',
        props: {
            echartId: String,
            echartTitle: String,
            echartColor: String
            //echartValue: Number,
            //echartItem: String
        },

        methods: {
            myEcharts() {
                var chartDom = document.getElementById(this.echartId);
                var myChart = echarts.init(chartDom);
                var option;

                option = {
                    title: {
                        text: this.echartTitle,
                        textStyle: {
                            color: this.echartColor,
                            fontStyle: 'normal',
                            fontWeight: 'bolder',
                            fontFamily: 'sans-serif',
                            fontSize: 18
                        }
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {},
                    toolbox: {
                        show: false,
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: { readOnly: false },
                            magicType: { type: ['line', 'bar'] },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    series: [
                        {
                            type: 'line',
                            itemStyle: {
                                normal: {
                                    color: this.echartColor,
                                    lineStyle: {
                                        width: 5//…Ë÷√œﬂÃı¥÷œ∏
                                    }
                                }
                            },
                            data: [10, 6, 5, 8, 2, 0, -3],
                            markPoint: {
                                data: [
                                    { type: 'max', name: 'Max' },
                                    { type: 'min', name: 'Min' }
                                ]
                            },
                            markLine: {
                                data: [{ type: 'average', name: 'Avg' }]
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