import BaseService from 'bigbigbird/@vue/@decrator/service/BaseDBService';
/**
 * 全局服务类
 */
export default class AppService extends BaseService {

    constructor() {
        super();
    };

    /**
     * 获取当前位置
     * @returns {Promise<any>}
     */
    public static getLocationn(): Promise<any> {
        return this.http.get('/api/getLocation');
    }
}
