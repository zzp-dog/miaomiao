<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" v-model="keyword" :placeholder="placeholder">
            </div>					
        </div>
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li v-for="movie in movies" :key="movie.id">
                    <div class="img"><img :src="movie.img | setImgSize('128.180')"></div>
                    <div class="info">
                        <p><span>{{movie.nm}}</span><span>{{movie.sc}}</span></p>
                        <p>{{movie.enm}}</p>
                        <p>{{movie.cat}}</p>
                        <p>{{movie.rt}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" src="./search.ts"></script>
<style lang="scss" scoped src="./search.scss"></style>