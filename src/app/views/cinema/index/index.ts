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

    public isLoading: boolean = true;

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

    /** 上一次的城市id */
    private id: number = -1;

    constructor() {
        super();
    }

    public activated() {
        const cityId = this.$store.state.city.id;
        if (cityId === this.id) {
            return;
        }
        this.id = cityId;
        this.getCinemaList();
    }

    /**
     * 获取影院列表
     */
    private getCinemaList() {
       return CinemaService.getCinemaList({cityId: this.id}).then(async (res) => {
            if (res.data.msg === 'ok') {
                this.cinemas = res.data.data.cinemas;
                this.isLoading = false;
                return true;
            } else {
                return false;
            }
        });
    }
}
