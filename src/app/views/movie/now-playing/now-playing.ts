import BaseComponent from '@bigbigbird/vue/mb/component/base-component';
import { NowPlayingMovie } from './../service/movie-model';
import Component from 'vue-class-component';
import MovieService from '../service/movie-service';
import {setImgSize} from '@/app/shared/filters/set-img-size';

@Component({
    name: 'now-playing',
    filters: {
        setImgSize
    }
})
export default class NowPlayingComponent extends BaseComponent {

    /** 正在热映电影 */
    public movies: NowPlayingMovie[] = [];

    public loading: boolean = true;

    /** 设想当前的城市id */
    private id: number = -1;


    constructor() {
        super();
    }


    /**
     * keep-alive生命周期钩子函数，每次进入都会执行
     */
    public activated(): void {
        const cityId = this.$store.state.city.id;
        if (cityId === this.id) { // id未改变，退出不发请求
            return;
        }
        this.id = cityId;
        this.getMovieOnInfoList();
    }

    /**
     * 获取电影列表
     */
    public getMovieOnInfoList() {
        return MovieService.getMovieOnInfoList({cityId: this.id}).then((res: any) => {
            if (res.data.msg === 'ok') {
                this.movies = res.data.data.movieList;
                this.loading = false;
                return true;
            } else {
                return false;
            }
        });
    }

    /**
     * 去影片详情页
     * @param id 电影id
     */
    public toDetailPage(id: number = 1) {
        this.$router.push('/movie/detail/now-playing/' + id);
    }

}
