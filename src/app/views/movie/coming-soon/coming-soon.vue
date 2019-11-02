<template>
    <div class="movie_body">
        <loading v-if="loading"/>
        <scroller
            :maxDown="40"
            :downFun="getMovieComingList"
            v-else
        >
            <ul>
                <li v-for="movie in movies" :key="movie.id">
                    <div class="pic_show"><img :src="movie.img | setImgSize('128.180')"></div>
                    <div class="info_list">
                        <h2>{{movie.nm}} <img v-if="movie.version" src="@/assets/images/max.png"/></h2>
                        <p><span class="person">{{movie.wish}}</span> 人想看</p>
                        <p>主演:{{movie.star}}</p>
                        <p>{{movie.rt}}上映</p>
                    </div>
                    <div class="btn_pre">
                        预售
                    </div>
                </li>
            </ul>
        </scroller>
    </div>
</template>
<script lang="ts" src="./coming-soon.ts"></script>
<style lang="scss" scoped src="./coming-soon.scss"></style>