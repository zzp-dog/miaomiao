import {Injectable} from 'bigbigbird/@vue/@decrator/service';
import BaseService from 'bigbigbird/@vue/@decrator/service/BaseDBService';

@Injectable()
class MovieService extends BaseService {

    public store!: string;

    private static cancle: Function;

    /**
     * 获取城市
     */
    public static getCityList(): Promise<any> {
       return this.http.get('/api/cityList');
    }

    /**
     * 根据城市id取正在上映电影列表
     * @param data 城市id数据
     */
    public static getMovieOnInfoList(data: {cityId: number}): Promise<any> {
        return this.http.get('/api/movieOnInfoList', {params: data});
    }

    /**
     * 根据城市id获取即将上映的电影
     * @param data 城市id数据
     */
    public static getMovieComingList(data: {cityId: number}): Promise<any> {
        return this.http.get('/api/movieComingList', {params: data});
    }
    /**
     * 根据城市id和关键字搜索电影列表,防抖
     * @param data 城市id和关键字
     */
    public static getSearchList(data: {cityId: number, kw: string}): Promise<any> {
        if (typeof this.cancle === 'function') {
            this.cancle();
        }
        return this.http.get('/api/searchList', {params: data,
         cancelToken: new this.http.CancelToken((c) => { this.cancle = c })});
    }

    /**
     * 根据电影id获取影片详情
     * @param data 电影id
     * @returns {Promise}
     */
    public static getMovieDetailByMovieId(data: {movieId: number}): Promise<any> {
        return this.http.get('/api/detailmovie', {params: data});
    }

    constructor() {
        super();
    };
}
export default MovieService
