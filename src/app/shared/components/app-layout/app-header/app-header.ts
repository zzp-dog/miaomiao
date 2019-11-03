import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

@Component({
    /**
     * 这里的name用于调式工具中查看
     * 在其他组件中引入组件的时候，在模板中只能使用组件类名或者其小写形式
     * 如：AppCompoent ，写在模板中为<AppComponent/>或<app-compoent/>,
     * 最终都会变为首字母大写形式
     */
    name: 'h-头部'
})
export default class AppHeaderComponent extends Vue {

    /** 当前头部标题 */
    public title: string = '';

    /** 各个模块的标题映射 */
    private map: {[key: string]: any} = {
        'movie': '喵喵电影',
        'cinema': '喵喵影院',
        'mine': '喵喵我的'
    };

    constructor() {
        super();
    }

    /**
     * 监听路由事件
     * @param newValue 更新后的路由
     */
    @Watch('$route', {immediate: false})
    public wathRouter(newValue: {[key: string]: any}): void {
        const module = newValue.path.split('/')[1];
        this.title = this.map[module];
    }
}
