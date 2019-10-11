<template>
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                     <li v-for="city in hotCityList" v-bind:key="city.id">
                        {{city.nm}}
                    </li>
                </ul>
            </div>
            <div class="city_sort">
                <div v-for="letter in Object.keys(map)" :key="letter">
                    <h2 :id="letter">{{letter}}</h2>
                    <ul>
                        <li v-for="city in map[letter]" :key="city.id">{{city.nm}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="city_index">
            <ul>
                <li v-for="letter in letters" :key="letter"><a :href="'#' + letter">{{letter}}</a></li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts" src="./city.ts"></script>
<style lang="scss" scoped src="./city.scss"></style>