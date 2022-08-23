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

// һ��Ӧ����Ҫ�����ص�һ�� DOM Ԫ���С����磬��������һ�� Vue Ӧ�ù��ص� < div id = "app" ></div >��Ӧ�ô��� #app��
// mount ������Ӧ�ñ����෴�������ص��Ǹ����ʵ����
// export ��������ģ�飬Vue �ĵ��ļ����ͨ����Ҫ����һ��������������� Vue ʵ����ѡ������Ա����������ط�����ʹ�� import ���롣
// �� new Vue() �൱��һ�����캯����������ļ� main.js ����������ͬʱ�����������������������������ô Vue ��ͨ�������ѡ����������Ӧ�� Vue ʵ���������γ�һ���������

new Vue({
    render: h => h(App)
}).$mount('#app');
