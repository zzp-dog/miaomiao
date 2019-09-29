export const MovieRoute: any = {
    path: '/movie',
    name: 'movie',
    // tslint:disable-next-line: semicolon
    component: () => import('@/app/views/movie/index/index.vue')
};

