import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

@Component({
    /**
     * 如果使用vue-devtools调试工具，则可以发现：
     * 实际上的组件名称以这个为准
     * 1.如果全中文，则组建名还是中文
     * 2.如果是xx-yy，会变成XxYy
     * 3.如果是xx-中文，会变成Xx-中文
     * 如果不指定name，则以组件类名为准，但要注意的是：
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
