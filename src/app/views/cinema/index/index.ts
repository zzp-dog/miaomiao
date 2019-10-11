import { Autowired } from 'bigbigbird';
import Vue from 'vue';
import Component from 'vue-class-component';
import CinemaService from '../service/cinema-service';
import { Cinema } from '../service/cinema-model';
import {setTagStyle} from '../filters/set-tag-style';

@Component({
    filters: {
        setTagStyle
    }
})
export default class CinemaComponent extends Vue {

    public cinemas: Cinema[] = [];

    public map: Object = {
        allowRefund: '可退',
        buyout: '收购',
        cityCardTag: '城市卡',
        deal: '处理',
        endorse: '宣传',
        sell: '在售',
        snack: '小吃',
        vipTag: 'VIP',
    };

    @Autowired({name: 'service', token: CinemaService})
    private service!: CinemaService;

    constructor() {
        super();
    }

    public mounted(): void {
        this.service.getCinemaList({cityId: 10}).then((res) => {
            if (res.data.msg === 'ok') {
                this.cinemas = res.data.data.cinemas;
            }
        });
    }
}
