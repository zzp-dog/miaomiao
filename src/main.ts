import Vue from 'vue';
import AppComonent from './app/app.vue';     // 根组件
import router from './app/routes/router';    // 根路由模块
import store from './app/stores/store';      // 应用状态管理模块
import {Component} from 'vue-property-decorator'

// 只有经过路由加载的组件才能使下面的路由钩子函数生效
// Register the router hooks with their names
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
]);

// 是否生产环境
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(AppComonent),
}).$mount('#app');
