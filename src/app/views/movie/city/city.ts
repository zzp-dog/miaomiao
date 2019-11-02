import Vue from 'vue';
import Component from 'vue-class-component';
import { City } from '../service/movie-model';
import MovieService from '../service/movie-service';
import SessionStorage from '@/app/shared/db/SessionStorege';
import LocalStorage from '@/app/shared/db/LocalStorage';

@Component({
    name: 'city'
})
export default class CityComponent extends Vue {

    /** 热门城市列表 */
    public hotCityList: City[] = [];

    /** 城市字母映射列表 */
    public map: {[key: string]: City[]} = {};

    /** 首字母列表 */
    public letters: string[] = [];

    public isLoading: boolean = true;

    constructor(
    ) {
        super();
    }

    /**
     * 在将模板挂在到html后查询城市数据
     */
    public mounted(): void {
        const city = SessionStorage.getItem('cities') as any;
        if (city) {
            this.getCityList(city);
            this.isLoading = false;
            return;
        }
        MovieService.getCityList().then((res: any) => {
            if (res.data.msg === 'ok') {
                const cities = res.data.data.cities;
                SessionStorage.setItem('cities', cities);
                this.getCityList(cities);
                this.isLoading = false;
            }
        });
    }

    /**
     * 获取热门城市和按首字母排序后的城市
     */
    private getCityList(cities: City[]): void {

        // 先排序
        cities.sort((a: City, b: City) => {
            return a.py.localeCompare(b.py);
        });

        cities.forEach((item: City) => {
            // 热门城市
            if (item.isHot === 1) {
                this.hotCityList.push(item);
            }

            // 字母映射列表
            const firstLetter = item.py.substr(0, 1).toUpperCase();
            if (!this.map[firstLetter]) {
                this.letters.push(firstLetter);
                this.map[firstLetter] = [];
            }
            this.map[firstLetter].push(item);
        });
    }

    /**
     * 点击城市后，跳转到正在热映，
     * 因为涉及到不同模块都要使用id，
     * 可以通过修改store中的id进行全局修改
     * 故这里路由传参不适用
     */
    public handleToCity(nm: string, id: number): void {
        // 提交状态
        this.$store.commit('city/CITY_INFO', {nm, id});
        // 为了使用位置历史记录功能，使用本地存贮
        LocalStorage.setItem('nm', nm);
        LocalStorage.setItem('id', id);
        // 路由跳转
        this.$router.push({
            path: '/movie/now-playing',
            // query: {
                //     nm,
                //     id: id + ''
                // }
        });
        // 2.根据name匹配，使用params传参
        // this.$router.push({
        //     name: 'now-playing',
        //     params: {
        //         nm,
        //         id: id + ''
        //     }
        // });
        // 3.路径拼接，需要在路由配置中配置对应的':' + 接受参数，使用params取 如：
        // {
        //     path: '/describe/:id/:nm',
        //     name: 'Describe',
        //     component: Describe
        // }
        // this.$router.push({
        //     path: `/describe/${id}/${nm}/`,
        // })
    }

}
