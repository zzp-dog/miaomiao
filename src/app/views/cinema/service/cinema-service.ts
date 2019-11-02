import {Injectable} from 'bigbigbird/@vue/@decrator/service';
import BaseService from 'bigbigbird/@vue/@decrator/service/BaseDBService';
@Injectable()
export default class CinemaService extends BaseService {

    constructor() {
        super();
    }
    /**
     * 获取影院列表
     * @param data 城市id
     */
    public static getCinemaList(data: {cityId: number}): Promise<any> {
        return this.http.get('/api/cinemaList', {params: data});
    }

}
