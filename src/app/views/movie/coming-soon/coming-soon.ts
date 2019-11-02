import Vue from 'vue';
import Component from 'vue-class-component';
import MovieService from '../service/movie-service';
import { ComingMovie } from '../service/movie-model';
import { setImgSize } from '@/app/shared/filters/set-img-size';

@Component({
    name: 'comming-soon',
    filters: {
        setImgSize
    }
})
export default class CommingSoonComponent extends Vue {

    public movies: ComingMovie[] = [];

    public loading: boolean = true;

    /** 上次的城市id */
    private id: number = -1;


    constructor() {
        super();
    }

    public activated(): void {
        const cityId = this.$store.state.city.id;
        if (this.id === cityId) {
            return;
        }
        this.id = cityId;
        this.getMovieComingList();
    }

    /**
     * 获取即将上映电影列表
     */
    public getMovieComingList() {
        return MovieService.getMovieComingList({cityId: this.id}).then((res: any) => {
            if (res.data.msg === 'ok') {
                this.movies = res.data.data.comingList;
                this.loading = false;
                return true;
            } else {
                return false;
            }
        });
    }

}
