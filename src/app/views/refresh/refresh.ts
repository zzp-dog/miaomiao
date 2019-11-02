import Vue from 'vue';
import Component from 'vue-class-component';
import { Route } from 'vue-router';

/**
 * vue-router 3.1以后无法push当前路由
 * 使用该组件进行跳转，实现间接导航到当前路由
 */
@Component({
    name: 'refresh'
})
export default class RefreshComponent extends Vue {
    constructor() {
        super();
    }

    public beforeRouteEnter(to: Route, from: Route, next: Function) {
        next((vm: Vue) => {
            // 使用replace 不然点后退会回到refresh
            vm.$router.replace({
                path: from.path,
                query: {
                    timeStamp: Date.now().toString()
                }
            })
        })
    }
}
