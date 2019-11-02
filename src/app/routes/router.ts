import Vue from 'vue';
import Router from 'vue-router';
import MovieRoute from './movie/movie-route'; // 不是用默认导出，所以要解构
import { CinemaRoute } from './cinema/cinema-route';
import { MineRoute } from './mine/mine-route';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    MovieRoute,
    CinemaRoute,
    MineRoute,
    {
      // 刷新当前路由
      path: '/refresh',
      component: () => import('@/app/views/refresh/refresh.vue'),
    },
    {
      // 其他路径重定向到电影首页
      path: '/*',
      redirect: '/movie/now-playing'
    }
  ],
});
