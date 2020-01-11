
const MovieRoute: any = {
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
            component: () => import('@/app/views/movie/now-playing/now-playing')
        },
        {
            // 正在上映详情
            path: 'detail/now-playing/:movieId',
            name: 'now-playing-detail',
            components: {
                default: () => import('@/app/views/movie/now-playing/now-playing.vue'),
                detail: () => import('@/app/views/movie/detail-page/detail-page.vue')
            },
            // movieId会变成'detail-page'对应组件的prop
            props: {
                default: false,
                detail: true
            }
        },
        {
            // 即将上映
            path: 'coming-soon',
            name: 'coming-soon',
            component: () => import('@/app/views/movie/coming-soon/coming-soon.vue')
        },
        {
            // 即将上映详情
            path: 'detail/coming-soon/:movieId',
            name: 'coming-soon-detail',
            components: {
                default: () => import('@/app/views/movie/coming-soon/coming-soon.vue'),
                detail: () => import('@/app/views/movie/detail-page/detail-page.vue')
            },
            props: {
                default: false,
                detail: true
            }
        },
        {
            // 搜索
            path: 'search',
            name: 'search',
            component: () => import('@/app/views/movie/search/search.vue')
        }
    ]
}

export default MovieRoute;
