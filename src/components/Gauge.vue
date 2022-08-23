<template>
    <div class="Echarts">
        <div :id="echartId" style="width:300px;height:200px;"></div>
    </div>
</template>

<script>
    // when create componet to import the echarts package

    // Vue 是通过 webpack 实现的模块化，因此可以使用 import 来引入模块。
    /// 第一步：引入 
    // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
    import * as echarts from 'echarts/core';

    // 引入GaugeChart图表，图表后缀都为 Chart
    import { GaugeChart } from 'echarts/charts';

    // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
    import { CanvasRenderer } from 'echarts/renderers';

    // 第二步：注册必须的组件
    echarts.use([GaugeChart, CanvasRenderer]);

    // 第三步：导出模块
    // export 用来导出模块，Vue 的单文件组件 SFC 通常需要导出一个对象，这个对象是 Vue 实例的选项对象，以便于在其它地方可以使用 import 引入。
    // 而 new Vue() 相当于一个构造函数，在入口文件 main.js 构造根组件的同时，如果根组件还包含其它子组件，那么 Vue 会通过引入的选项对象构造其对应的 Vue 实例，最终形成一棵组件树。
    // export 和export default 的区别在于：export 可以导出多个命名模块。

    export default {
        name: 'Gauge',

        // props和data区别: 
        // data是每个组件的私有内存，可以在其中存储需要的任何变量。
        // props是将数据从父组件传递到子组件的方式,  只能单向传输。
        // data和 props中使用相同的名称，Vue 会给你一个警告，因为它不知道你想访问哪个。

        // 还有各种其他的组件选项，可以将用户定义的 property 添加到组件实例中，
        // 例如 methods，props，computed，inject 和 setup。

        // 组件实例的所有 property，无论如何定义，都可以在组件的模板中访问。
        // Vue 还通过组件实例暴露了一些内置 property，如 $attrs 和 $emit。
        // 这些 property 都有一个 $ 前缀，以避免与用户定义的 property 名冲突。

        props: {
            // exporsue the attribute of component Gauge
            echartId: String,
            echartColor: String,
            echartValue: Number,
            echartUnit: String
        },
        
        methods: {
            myEcharts() {
                var chartDom = document.getElementById(this.echartId);

                // 初始化图表，设置配置项
                var myChart = echarts.init(chartDom,'dark');
                var option;

                // constant dataset
                const gaugeData = [
                    {
                        value: this.echartValue,
                        name: this.echartUnit,   // name is the title
                        // ring color
                        itemStyle: {
                            color: this.echartColor
                        },

                        // title is for setting name
                        title: {
                            offsetCenter: ['0%', '50%'], // x,y
                            fontSize: 14,
                            fontWeight: 'bolder',
                            color: this.echartColor,
                        },

                        // detail is for setting number
                        detail: {
                            valueAnimation: true,    // to show the change like a continuous function
                            offsetCenter: ['00%', '00%']
                        }
                    }
                ];
                option = {
                    series: [
                        {
                            type: 'gauge',
                            startAngle: 90,
                            endAngle: -270,
                            pointer: {
                                show: false
                            },
                            progress: {
                                show: true,
                                overlap: false,
                                roundCap: true,
                                clip: false,
                                itemStyle: {
                                    borderWidth: 1,
                                    borderColor: this.echartColor
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    width: 10
                                }
                            },
                            splitLine: {
                                show: false,
                                distance: 0,
                                length: 10
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: false,
                                distance: 50
                            },
                            data: gaugeData,
                            title: {
                                fontSize: 14
                            },
                            detail: {
                                width: 50,
                                height: 14,
                                fontSize: 28,
                                color: 'auto',
                                borderColor: '',
                                borderRadius: 20,
                                borderWidth: 0,
                                formatter: '{value}',
                            }
                        }
                    ]
                };

                // When used alone, the owner is the Global object, so this refers to the Global object.
                // In a browser window the Global object is[object Window]:  https://www.w3schools.com/js/js_this.asp

                var that = this;

                setInterval(function () {
                    gaugeData[0].value = that.echartValue;
                    myChart.setOption({
                        series: [
                            {
                                data: gaugeData,
                                pointer: {
                                    show: false
                                }
                            }
                        ]
                    });
                }, 2000);

                option && myChart.setOption(option);
            }
        },
        // to install the current myEcharts to the webpage.
        // mount 不返回应用本身。相反，它返回的是根组件实例。
        mounted() {
            this.myEcharts();
        }
    }
</script>

<style>
</style>
