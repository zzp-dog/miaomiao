export const MovieRoute: any = {
    path: '/movie',
    name: 'movie',
    redirect: '/movie/now-playing',
    // tslint:disable-next-line: semicolon
    component: () => import('@/app/views/movie/index/index.vue'),
    children: [
        {
            // 城市
            path: 'city',
            name: 'city',
            component: () => import('@/app/views/movie/city/city.vue')
        },
        {
            // 正在上映
            path: 'now-playing',
            name: 'now-playing',
            component: () => import('@/app/views/movie/now-playing/now-playing.vue')
        },
        {
            // 即将上映
            path: 'coming-soon',
            name: 'coming-soon',
            component: () => import('@/app/views/movie/coming-soon/coming-soon.vue')
        },
        {
            // 搜索
            path: 'search',
            name: 'search',
            component: () => import('@/app/views/movie/search/search.vue')
        }
    ]
};

