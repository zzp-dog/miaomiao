import Vue from 'vue';
import Component from 'vue-class-component';
import { Emit, Watch } from 'vue-property-decorator';

@Component
export default class AppFooterComponent extends Vue {
    constructor() {
        super();
    }

    /**
     * 相当于this.emit('update:title', title);
     * @param title 标题
     */
    @Emit('update:title')
    public emitTitle(title: string): string {
        return title;
    }
    // @Watch('$route', {immediate: false})
    // public wathRouter(oldValue: any, newValue: any): void {
    //     this.emitTitle('wocao');
    // }

}
