<template>
    <footer id="footer">
        <ul>
            <!-- router-link是内置的一个组件，你可能有很多次想要在一个组件的根元素上直接监听一个原生事件。这时，你可以使用 v-on 的 .native 修饰符 -->
            <router-link tag="li" to="/movie" @click.native="$emit('update:title','喵喵电影')">
                <i class="iconfont icon-dianying"></i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema" @click.native="emitTitle('喵喵影院')">
                <i class="iconfont icon-yingyuan"></i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/mine" @click.native="emitTitle('喵喵我的')">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>
        </ul>
	</footer>
</template>
<script lang="ts" src="./app-footer.ts"></script>
<style lang="scss" scoped src="./app-footer.scss"></style>
 