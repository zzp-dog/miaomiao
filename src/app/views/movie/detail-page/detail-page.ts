import { setImgSize } from '@/app/shared/filters/set-img-size';
import Vue from 'vue';
import Component from 'vue-class-component';
import AppHeaderComponent from '@/app/shared/components/app-layout/app-header/app-header';
import MovieService from '../service/movie-service';
import { Prop } from 'vue-property-decorator';
/**
 * 电影详情页
 */
@Component({
    name: 'detail',
    components: {
        AppHeaderComponent
    },
    filters: {
        setImgSize
    }
})
export default class DetailComponent extends Vue {

    /** 影片id */
    @Prop({
        type: String,
        default: null
    })
    public movieId!: string;

    /** 是否在加载中 */
    public isLoading: boolean = true;

    /** 影片详情 */
    public detailMovie: any = {};

    constructor() {
        super();
    }

    public mounted() {
        const id = parseInt(this.movieId, 10);
        MovieService.getMovieDetailByMovieId({movieId: id}).then((res: any) => {
            if (res.data.msg === 'ok') {
                this.detailMovie = res.data.data.detailMovie;
                console.log(res.data.data);
            }
            this.isLoading = false;
        });
    }

    /**
     * 返回前一个路由
     */
    public back() {
        this.$router.back();
    }
}
