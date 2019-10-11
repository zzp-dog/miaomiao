# 尝试使用ts+sass开发，并将单文件转为.vue,.scss,.ts这3个文件

1.使用vue-cli3 脚手架初始化一个项目，选择使用ts和dart-sass
2.分别建立.vue,.scss,.ts这3个文件，并在.vue中这样写：

```(vue)
<template>
<!-- 添加一个div，将其他组件包起来，Vue只允许模板里存在一个根节点 -->
    <div>
        <!-- 也可以写成app-header-component形式，最后都会变成下面这种 -->
        <AppHeaderComponent/>
        <keep-alive>
            <router-view/>
        </keep-alive>
        <AppFooterComponent/>
    </div>
</template>
<script lang="ts" src="./app.ts"></script>
<style lang="scss" scoped src="./app.scss"></style>
```

3.其他内容

- 3.1 git
    -- git remote 查看远程仓库
    -- git remote add origin https:xx或者ssh:xxx 本地添加origin仓库源
    -- git push origin master推送到远程仓库的主分支上
    -- git branch mybranch   创建分支
    -- git checkout mybranch 切换分支
    -- git checkout -b dev 创建一个dev分支并切换到该分支
    -- git push origin dev 推送到远程仓库的开发分支上
    -- git status 查看当前分支状态
    -- git add .  将当前目录的所有修改放入暂存区
    -- git commit -m "xxx" 提交并附带注释
    -- git checkout dev 切换到dev分支上
    -- git merge createComponents --on-ff 合并createComponents到当前分支上并开启编辑器添加注释，
    按住esc，连续按两次Z退出
    -- git log 看日志
    -- git push origin dev 推送到远程dev分支上
    -- git branch 查看所有分支
    -- git branch -d  createComponents 删除createComponents分支
- 3.2 npm与require
    -- npm i 安装会下载与nodejs最为匹配的包，卸载只能用npm uninstall i 来卸载
    -- npm install xxx 本地安装，安装到当前目录的node_modules下
    -- npm install -g xxx 全局安装，默认安装到C:/Users/xxx/appData/Roaming/npm/node_modules下
    -- 全局安装路径可以使用npm config set prefix *修改和npm config ls查看
    -- --save 安装的包会在生产环境用到，--save-dev 安装的包只用于开发环境或打包（如编译等）
    -- require不加./,../,/时，其默认引入文件的路径可以使用
    console.log(module.paths);查看
4..ts组件的name，例子：

```(typescript)
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({
    /**
     * 如果使用vue-devtools调试工具，则可以发现：
     * 实际上的组件名称以这个name为准
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
    constructor() {
        super();
    }
}

```

5.如何使用axios

- 5.1 在vue包中添加模块声明文件（其实这些声明文件是没有任何作用的，只是为了使编辑器有提示和类型更安全）

    ```ts
    import axios, { AxiosInstance } from 'axios'
    declare module 'Vue/types/vue' {
        interface Vue {
            $axios: AxiosInstance
        }
    }
    ```

    将上述代码追加到一个类型定义文件中
- 5.2使用vue-axios帮助我们将axios挂到Vue上，同时他还将$http挂载到了Vue挂到了Vue中，要额外安装vue-axios ：npm install vue-axios --save 。
    在main.ts中加入：

    ```ts
    import Axios from 'axios';                   // 使用axios
    import VueAxios from 'vue-axios';            // 使用插件vue-axios将axios挂载到Vue上
    // 启用Axios和$http
    Vue.use(VueAxios, Axios);
    ```
