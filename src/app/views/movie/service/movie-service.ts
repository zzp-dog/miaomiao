
import aixos, {AxiosStatic} from 'axios';
import {Injectable, Autowired} from 'bigbigbird';

@Injectable()
class MovieService {

    private cancle: any;

    @Autowired({name: 'http', token: aixos, noInstance: true})
    private http!: AxiosStatic;
    constructor() {
    };

    /**
     * 获取城市
     */
    public getCityList(): Promise<any> {
       return this.http.get('/api/cityList');
    }

    /**
     * 根据城市id取正在上映电影列表
     * @param data 城市id数据
     */
    public getMovieOnInfoList(data: {cityId: number}): Promise<any> {
        return this.http.get('/api/movieOnInfoList', {params: data});
    }

    /**
     * 根据城市id获取即将上映的电影
     * @param data 城市id数据
     */
    public getMovieComingList(data: {cityId: number}): Promise<any> {
        return this.http.get('/api/movieComingList', {params: data});
    }
    /**
     * 根据城市id和关键字搜索电影列表,防抖
     * @param data 城市id和关键字
     */
    public getSearchList(data: {cityId: number, kw: string}): Promise<any> {
        if (typeof this.cancle === 'function') {
            this.cancle();
        }
        return this.http.get('/api/searchList', {params: data,
         cancelToken: new this.http.CancelToken((c) => { this.cancle = c })});
    }
}
export default MovieService
