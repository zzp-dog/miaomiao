
<template>
    <div id="content">
        <div class="movie_menu">
            <router-link tag="div" to="/movie/city" tappable class="city_name">
                <span>{{$store.state.city.nm}}</span><i class="iconfont icon-lower-triangle"></i>
            </router-link>
            <div class="hot_swtich">
                <router-link tag="div" to="/movie/now-playing" class="hot_item">正在热映</router-link>
                <router-link tag="div" to="/movie/coming-soon" class="hot_item active">即将上映</router-link>
            </div>
            <router-link tag="div" to="/movie/search" class="search_entry">
                <i class="iconfont icon-sousuo"></i>
            </router-link>
        </div>
        <!-- 电影二级路由 -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>

