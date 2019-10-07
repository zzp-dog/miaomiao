import AppHeaderComponent from './components/app-layout/app-header/app-header';
import AppFooterComponent from './components/app-layout/app-footer/app-footer';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    name: 'app-compoent',
    components: {
        AppHeaderComponent,
        AppFooterComponent
    }
})
// 必须是export default，编译过程中没有解构
export default class AppComonent extends Vue {
    /** 头部标题 */
    public title: string | null = '喵喵影院';
    constructor() {
        super();
    }
}
