
<template>
    <div id="content">
        <div class="cinema_menu">
            <div class="city_switch">
                全城 <i class="iconfont icon-lower-triangle"></i>
            </div>
            <div class="brand_swtich">
                品牌 <i class="iconfont icon-lower-triangle"></i>
            </div>
            <div class="feature_switch">
                特色 <i class="iconfont icon-lower-triangle"></i>
            </div>
        </div>
        <loading v-if="isLoading"/>
        <scroller v-else
            :maxDown="40"
            :downFun="getCinemaList"
        >
            <div class="cinema_body">
                <ul>
                    <li v-for="cinema in cinemas" :key="cinema.id">
                        <div>
                            <span>{{cinema.nm}}</span>
                            <span class="q"><span class="price">{{cinema.sellPrice}}</span> 元起</span>
                        </div>
                        <div class="address">
                            <span>{{cinema.addr}}</span>
                            <span>{{cinema.distance}}</span>
                        </div>
                        <div class="card">
                            <template v-for="(value, key) in cinema.tag">
                                <div v-if="value === 1" :key="key" :class="key | setTagStyle">{{map[key]}}</div>
                            </template>
                        </div>
                    </li>
                </ul>
            </div>
        </scroller>
    </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>

