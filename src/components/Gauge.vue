<template>
    <div class="Echarts">
        <div :id="echartId" style="width:300px;height:200px;"></div>
    </div>
</template>

<script>
    // when create componet to import the echarts package

    // Vue ��ͨ�� webpack ʵ�ֵ�ģ�黯����˿���ʹ�� import ������ģ�顣
    /// ��һ�������� 
    // ���� echarts ����ģ�飬����ģ���ṩ�� echarts ʹ�ñ���Ҫ�Ľӿڡ�
    import * as echarts from 'echarts/core';

    // ����GaugeChartͼ����ͼ����׺��Ϊ Chart
    import { GaugeChart } from 'echarts/charts';

    // ���� Canvas ��Ⱦ����ע������ CanvasRenderer ���� SVGRenderer �Ǳ����һ��
    import { CanvasRenderer } from 'echarts/renderers';

    // �ڶ�����ע���������
    echarts.use([GaugeChart, CanvasRenderer]);

    // ������������ģ��
    // export ��������ģ�飬Vue �ĵ��ļ���� SFC ͨ����Ҫ����һ��������������� Vue ʵ����ѡ������Ա����������ط�����ʹ�� import ���롣
    // �� new Vue() �൱��һ�����캯����������ļ� main.js ����������ͬʱ�����������������������������ô Vue ��ͨ�������ѡ����������Ӧ�� Vue ʵ���������γ�һ���������
    // export ��export default ���������ڣ�export ���Ե����������ģ�顣

    export default {
        name: 'Gauge',

        // props��data����: 
        // data��ÿ�������˽���ڴ棬���������д洢��Ҫ���κα�����
        // props�ǽ����ݴӸ�������ݵ�������ķ�ʽ,  ֻ�ܵ����䡣
        // data�� props��ʹ����ͬ�����ƣ�Vue �����һ�����棬��Ϊ����֪����������ĸ���

        // ���и������������ѡ����Խ��û������ property ���ӵ����ʵ���У�
        // ���� methods��props��computed��inject �� setup��

        // ���ʵ�������� property��������ζ��壬�������������ģ���з��ʡ�
        // Vue ��ͨ�����ʵ����¶��һЩ���� property���� $attrs �� $emit��
        // ��Щ property ����һ�� $ ǰ׺���Ա������û������ property ����ͻ��

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

                // ��ʼ��ͼ��������������
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
        // mount ������Ӧ�ñ������෴�������ص��Ǹ����ʵ����
        mounted() {
            this.myEcharts();
        }
    }
</script>

<style>
</style>