import Vue from 'vue';
import { Autowired } from 'bigbigbird';
import Component from 'vue-class-component';
import { City } from '../service/movie-model';
import MovieService from '../service/movie-service';

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

    /** 服务实列 */
    @Autowired({name: 'service', token: MovieService})
    private service!: MovieService;

    constructor(
    ) {
        super();
    }

    /**
     * 在将模板挂在到html后查询城市数据
     */
    public mounted(): void {
        this.service.getCityList().then((res) => {
            if (res.data.msg === 'ok') {
                this.getCityList(res.data.data.cities);
            }
        });
    }

    /**
     * 获取热门城市和按首字母排序后的城市
     */
    private getCityList(cities: City[]): void {
        console.log('城市：');
        console.log(cities);

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

}
