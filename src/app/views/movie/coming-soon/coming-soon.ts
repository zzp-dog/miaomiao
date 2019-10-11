import Vue from 'vue';
import { Autowired } from 'bigbigbird';
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

    @Autowired({name: 'service', token: MovieService})
    private service!: MovieService;


    constructor() {
        super();
    }

    public mounted(): void {
        this.service.getMovieComingList({cityId: 10}).then((res) => {
            if (res.data.msg === 'ok') {
                this.movies = res.data.data.comingList;
            }
        });
    }
}
