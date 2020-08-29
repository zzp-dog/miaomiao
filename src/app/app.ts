import LocalStorage from '@/app/shared/db/LocalStorage';
import BaseComponent from '@bigbigbird/vue/mb/component/base-component';
import AppHeaderComponent from './shared/components/app-layout/app-header/app-header';
import AppFooterComponent from './shared/components/app-layout/app-footer/app-footer';
import Component from 'vue-class-component';
import AppService from './app-service';

@Component({
    name: 'app-compoent',
    components: {
        AppHeaderComponent,
        AppFooterComponent
    }
})
// 必须是export default，编译过程中没有解构
export default class AppComonent extends BaseComponent {
    /** 头部标题 */
    public title: string | null = '喵喵影院';
    constructor() {
        super();
    }

    /**
     * 初次进入获取城市定位
     */
    public mounted() {
        setTimeout(() => {
            AppService.getLocationn().then(async (res: any) => {
                if (res.data.msg === 'ok') {
                    const nm = res.data.data.nm;
                    const id = res.data.data.id;
                    const r = await this.openAlert({
                        title: '当前定位',
                        content: nm,
                        buttons: ['取消', '重新定位']
                    });
                    if (r === 2) {
                        this.$router.push('/movie/city');
                    } else {
                        this.$store.state.city.id = id;
                        this.$store.state.city.nm = nm;
                        LocalStorage.setItem('nm', nm);
                        LocalStorage.setItem('id', id);
                        // 定到当前位置后刷新当前路由
                        this.$router.push('/refresh');
                    }
                }
            });
        }, 1000);
    }
}
