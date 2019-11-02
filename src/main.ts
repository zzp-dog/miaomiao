

import Vue, { CreateElement } from 'vue';
import AppComonent from './app/app.vue';     // 根组件
import router from './app/routes/router';    // 根路由模块
import store from './app/stores/store';      // 应用状态管理模块
import Component from 'vue-class-component'; // 引入@Component装饰器
import Router from 'vue-router';
import tappable from 'bigbigbird/@vue/@directive/tappable';
import LoadingComponent from './app/shared/components/commons/loading/loading';
import ScrollerComponent from 'bigbigbird/@vue/@component/scroller/scroller';

// 移动端300ms点击延迟（提示无attach方法，类型定义文件有问题，要修改一下）
// import FastClick from 'fastclick';
// FastClick.attach(document.body);

// import VueAxios from 'vue-axios';            // 使用插件vue-axios将axios挂载到Vue上

// VueAxios将axios安装到vue上，并启用axios和$http,这两个是一样的都是AxiosStatic
// Vue.use(VueAxios, Axios);

// 是否生产环境
Vue.config.productionTip = false;

// 只有经过路由加载的组件才能使下面的路由钩子函数生效
// Register the router hooks with their names
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
]);

// 全局注册指令
Vue.directive('tap', tappable);
// 全局注册组件
Vue.component('loading', LoadingComponent);
Vue.component('scroller', ScrollerComponent);

new Vue({
  router,
  store,
  render: (h) => h(AppComonent)
}).$mount('#app');

// 添加移动端eruda调试 - 也可在index.html直接引入外链eruda.js
if (!Vue.config.productionTip) {
  const eruda =  require('bigbigbird/@lib/debug/node_modules/eruda/eruda');
  eruda.init();
}

