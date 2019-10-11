

import Vue from 'vue';
import AppComonent from './app/app.vue';     // 根组件
import router from './app/routes/router';    // 根路由模块
import store from './app/stores/store';      // 应用状态管理模块
import Component from 'vue-class-component'; // 引入@Component装饰器
import Axios from 'axios';                   // 使用axios
// import VueAxios from 'vue-axios';            // 使用插件vue-axios将axios挂载到Vue上


// 是否生产环境
Vue.config.productionTip = false;

// 启用mock
require('../mock/index.js');

// 只有经过路由加载的组件才能使下面的路由钩子函数生效
// Register the router hooks with their names
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
]);

// VueAxios将axios安装到vue上，并启用axios和$http,这两个是一样的都是AxiosStatic
// Vue.use(VueAxios, Axios);

// 这里我使用自己的注册axios方式，表示axios可被注入
(Axios as any)._injectable = true;

new Vue({
  router,
  store,
  render: (h) => h(AppComonent),
}).$mount('#app');
