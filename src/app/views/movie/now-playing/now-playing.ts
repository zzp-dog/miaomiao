import Vue from 'vue';
import { NowPlayingMovie } from './../service/movie-model';
import Component from 'vue-class-component';
import { Autowired } from 'bigbigbird';
import MovieService from '../service/movie-service';
import {setImgSize} from '@/app/shared/filters/set-img-size';

@Component({
    name: 'now-playing',
    filters: {
        setImgSize
    }
})
export default class NowPlayingComponent extends Vue {

    /** 正在热映电影 */
    public movies: NowPlayingMovie[] = [];

    /** 3d max 小图标 */
    // public max3d: string = '';

    /** 服务实列 */
    @Autowired({name: 'service', token: MovieService})
    private service!: MovieService;

    constructor() {
        super();
    }

    /**
     * 挂载后获取正在上映列表
     */
    public mounted(): void {
        // console.log(this.service)
        this.service.getMovieOnInfoList({cityId: 10}).then((res: any) => {
            if (res.data.msg === 'ok') {
                this.movies = res.data.data.movieList;
            }
        });
    }

}
