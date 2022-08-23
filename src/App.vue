<template>
    <div id="app">
        <div>
            <b-tabs content-class="mt-3" justified>
                <b-tab title="Welcome" active>
                    <b-container>
                        <b-row>
                            <b-col>
                                <div style="width: 300px; height: 50px; font-size: 30px; text-align: center"> Home </div>
                                <Gauge echartId="HomeHeating" echartColor="#fac858" :echartValue="heatingLevel" echartUnit="Level" />
                                <Gauge echartId="HomeTemperature" echartColor="#D03CDD" :echartValue="HomeTemp" echartUnit="℃" />
                                <Gauge echartId="HomeHumidity" echartColor="#27C7C7" :echartValue="HomeHumi" echartUnit="%" />

                                <div style="width: 300px; height: 100px; margin-top: 30px">
                                    <toggle-button :value="true"
                                                   :labels="{checked: 'On', unchecked: 'Off'}"
                                                   :width="150"
                                                   :height="50"
                                                   :font-size="25"
                                                   :margin="3"
                                                   :color="{checked: '#00FF00', unchecked: '#CCCCCC'}" />
                                </div>

                                <div style="width: 300px; height: 100px">
                                    <toggle-button :value="true"
                                                   :labels="{checked: '30', unchecked: '60'}"
                                                   :width="150"
                                                   :height="50"
                                                   :font-size="25"
                                                   :margin="3"
                                                   :color="{checked: '#fc8452', unchecked: '#fc8452'}" />
                                </div>
                            </b-col>

                            <b-col>
                                <div style="width: 300px; height: 50px; font-size: 30px; text-align:center"> Today </div>
                                <div style="width: 300px; height: 200px;">
                                    <img src="@/assets/Sunny.png"/>
                                </div>
                                <Gauge echartId="OutTemperature" echartColor="#D03CDD" :echartValue="TodayTemp" echartUnit="°C" />
                                <Gauge echartId="OutHumidity" echartColor="#27C7C7" :echartValue="TodayHumi" echartUnit="%" />
                                <Gauge echartId="Wind" echartColor="#ee6666" :echartValue="TodayWind" echartUnit="m/s" />
                            </b-col>
                        </b-row>
                    </b-container>
                </b-tab>

                <b-tab title="Inside" active>
                    <b-container>
                        <div style="width: 500px; height: 50px; font-size: 30px; text-align: center"> Home Condition Weekly History </div>
                        <ComingLineChart echartId="HeatingStat" echartColor="#fac858" echartTitle="Heating Level" />
                        <ComingLineChart echartId="HomeTempStat" echartColor="#D03CDD" echartTitle="Home Temperature" />
                        <ComingLineChart echartId="HomeHumiStat" echartColor="#27C7C7" echartTitle="Home Humidity" />
                    </b-container>
                </b-tab>

                <b-tab title="Outside" active>
                    <p>Outside Weather</p>
                    <b-container>
                        <div style="width: 400px; height: 50px; font-size: 30px; text-align: center"> Coming Weekly Temperature </div>
                        <ComingLineChart echartId="ComingTemp" echartColor="#D03CDD" echartTitle="Coming Temperature" />
                        <ComingLineChart echartId="ComingHumi" echartColor="#27C7C7" echartTitle="Coming Humidity" />
                        <ComingLineChart echartId="ComingWind" echartColor="#fac858" echartTitle="Coming Wind Speed" />
                    </b-container>
                </b-tab>

                <b-tab title="Energy" active>
                    <div style="width: 300px; height: 50px; font-size: 30px; text-align: center"> Energy Consumption </div>
                    <b-container>
                        <b-row>
                            <b-col>
                                <Gauge echartId="Enery" echartColor="#27C7C7" echartUnit="KW" :echartValue="EneryKW" />
                            </b-col>
                            <b-col>
                                <Gauge echartId="Expense" echartColor="#FB4141" echartUnit="DKK" :echartValue="ExpenseDKK" />
                            </b-col>
                            <LineBarChart echartId="EneryExpenseStat" />
                        </b-row>
                    </b-container>
                </b-tab>
            </b-tabs>         
        </div>
    </div>
</template>

<script>
    import Gauge from "./components/Gauge.vue";
    import ComingLineChart from "./components/ComingLineChart.vue";
    import LineBarChart from "./components/LineBarChart.vue";

    import { ToggleButton } from 'vue-js-toggle-button';

    export default {
        name: "App",
        props: {
            // exporsue the attribute of component Gauge
        },
        data() {
            return {
                heatingStatValue: 0,   // *** 绑定的是数据名字叫 heatingLevel，这里名字叫 heatingStatValue，但是好像影响不大，只是初始值是NaN。为什么？
                HomeTemp: 0,
                HomeHumi: 0,

                TodayTemp: 0,
                TodayHumi: 0,
                TodayWind: 0,

                EneryKW: 0,
                ExpenseDKK: 0
            }
        },
        components: {
            Gauge, LineBarChart, ComingLineChart,ToggleButton
        },
        methods: {
            updateValue() {
                // 获取数据
                //// 为给定 ID 的 user 创建请求
                //axios.get('/user?ID=12345')
                //    .then(function (response) {
                //       //更新数据
                //        this.heatingStatValue = response.heatingStatValue;
                //        //.....
                //        sleep(5000);
                //        updateValue();
                //    })
                //    .catch(function (error) {
                //        console.log(error);
                //    });

                ////// 上面的请求也可以这样做
                //axios.get('/user', {
                //    params: {
                //        ID: 12345
                //    }
                //})
                //    .then(function (response) {
                //        console.log(response);
                //    })
                //    .catch(function (error) {
                //        console.log(error);
                //    });

                //axios.post('/user', {
                //    firstName: 'Fred',
                //    lastName: 'Flintstone'
                //})
                //    .then(function (response) {
                //        console.log(response);
                //    })
                //    .catch(function (error) {
                //        console.log(error);
                //    });
            }
        },
        mounted() {
            // js: this 会根据上下文发生改变 
            var that = this;

            setInterval(function () {
                // this 
                that.heatingLevel = +(Math.random() * 100).toFixed(2);
                that.HomeTemp = +(Math.random() * 100).toFixed(2);
                that.HomeHumi = +(Math.random() * 100).toFixed(2);

                that.TodayTemp = +(Math.random() * 100).toFixed(2);
                that.TodayHumi = +(Math.random() * 100).toFixed(2);
                that.TodayWind = +(Math.random() * 100).toFixed(2);

                that.EneryKW = +(Math.random() * 100).toFixed(2);
                that.ExpenseDKK = +(Math.random() * 100).toFixed(2);

            }, 2000);
        }
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        /*-moz-osx-font-smoothing: grayscale;*/
        text-align: center;
        color: #ffffff; /*font color*/
        margin-top: 0px;
        background-color: #100C2A; /*dark 背景*/
        width: 1500px;
        height: 1000px;
    }
</style>
