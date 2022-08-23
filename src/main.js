import Vue from 'vue';
import App from './App.vue';

// for the layout
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// 一个应用需要被挂载到一个 DOM 元素中。例如，如果你想把一个 Vue 应用挂载到 < div id = "app" ></div >，应该传入 #app：
// mount 不返回应用本身。相反，它返回的是根组件实例。
// export 用来导出模块，Vue 的单文件组件通常需要导出一个对象，这个对象是 Vue 实例的选项对象，以便于在其它地方可以使用 import 引入。
// 而 new Vue() 相当于一个构造函数，在入口文件 main.js 构造根组件的同时，如果根组件还包含其它子组件，那么 Vue 会通过引入的选项对象构造其对应的 Vue 实例，最终形成一棵组件树。

new Vue({
    render: h => h(App)
}).$mount('#app');
