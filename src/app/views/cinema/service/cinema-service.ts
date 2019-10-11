import aixos, { AxiosStatic } from 'axios';
import { Injectable, Autowired } from 'bigbigbird';
import { Cinema } from './cinema-model';
@Injectable()
export default class CinemaService {

    @Autowired({name: 'http', token: aixos, noInstance: true})
    private http!: AxiosStatic;

    constructor() {}

    /**
     * 获取影院列表
     * @param data 城市id
     */
    public getCinemaList(data: {cityId: number}): Promise<any> {
        return this.http.get('/api/cinemaList', {params: data});
    }

}
