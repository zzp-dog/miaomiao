<template>
    <div class="movie_body">
        <loading v-if="loading"/>
        <scroller 
            :maxDown="40"
            :downFun="getMovieOnInfoList"
            v-else
        >
            <ul>
                <li v-for="movie in movies" :key="movie.id">
                    <div class="pic_show" tappable @click="toDetailPage(movie.id)"><img :src="movie.img | setImgSize('128.180')"></div>
                    <div class="info_list" tappable @click="toDetailPage(movie.id)">
                        <h2>{{movie.nm}} <img v-if="movie.version" src="@/assets/images/max.png"/></h2>
                        <p>观众评 <span class="grade">{{movie.sc}}</span></p>
                        <p>主演: {{movie.star}}</p>
                        <p>{{movie.showInfo}}</p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>
            </ul>
        </scroller>
    </div>
</template>
<script lang="ts" src="./now-playing.ts"></script>
<style lang="scss" scoped src="./now-playing.scss"></style>