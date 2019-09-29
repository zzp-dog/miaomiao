import Vue from 'vue';
import AppComonent from './app/app.vue';     // 根组件
import router from './app/routes/router';    // 根路由模块
import store from './app/stores/store';      // 应用状态管理模块

// 是否生产环境
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(AppComonent),
}).$mount('#app');
