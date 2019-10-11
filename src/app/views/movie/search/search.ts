import { Autowired } from 'bigbigbird';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import MovieService from '../service/movie-service';
import { SearhMovie } from '../service/movie-model';
import { setImgSize } from '@/app/shared/filters/set-img-size';

@Component({
    name: 'search',
    filters: {
        setImgSize
    }
})
export default class SearchComponent extends Vue {

    public keyword: string = '';

    public movies: SearhMovie[] = [];

    public placeholder: string = '请输入关键字';

    @Autowired({name: 'service', token: MovieService})
    private service!: MovieService;

    constructor() {
        super();
    }

    @Watch('keyword')
    public search(newValue: string, oldValue: string) {
        this.service.getSearchList({cityId: 10, kw: newValue}).then((res) => {
            if (res.data.msg === 'ok') {
                this.movies = res.data.data.movies.list;
            }
        }).catch((err) => {
            console.log(err)
        });
    }
}
