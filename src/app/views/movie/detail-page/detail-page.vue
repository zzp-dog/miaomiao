<template>
	<div>
		<loading v-if="isLoading"/>
		<div v-else id="detail-page">
			<AppHeaderComponent id="header">
				<i class="iconfont icon-right" tappable @click="back"></i><h1>影片详情</h1>
			</AppHeaderComponent>
			<div id="content" class="contentDetail">
				<div class="detail_list">
					<div class="detail_list_bg" v-bind:style="{
						backgroundImage: 'url('+ detailMovie.albumImg +')'}"></div>
					<div class="detail_list_filter"></div>
					<div class="detail_list_content">
						<div class="detail_list_img">
							<img :src="detailMovie.img | setImgSize('128.180')" alt="电影海报">
						</div>
						<div class="detail_list_info">
							<h2>{{detailMovie.nm}}</h2>
							<p>{{detailMovie.enm}}</p>
							<p>{{detailMovie.sc}}</p>
							<p>{{detailMovie.cat}}</p>
							<p>{{detailMovie.fra}}/{{detailMovie.dur}}分钟</p>
							<p>{{detailMovie.pubDesc}}</p>
						</div>
					</div>
				</div>
				<div class="detail_intro">
					<p>{{detailMovie.dra}}</p>
				</div>
				<div class="detail_player swiper-container">
					<ul class="swiper-wrapper">
						<li v-for="(item, index) in detailMovie.photos" :key="index" class="swiper-slide">
							<div>
								<img :src="item | setImgSize('140.200')" alt="剧照">
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" src="./detail-page.ts"></script>
<style scoped lang="scss" src="./detail-page.scss"></style>