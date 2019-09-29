<template>
<!-- 添加一个div，将其他组件包起来，Vue只允许模板里存在一个根节点 -->
  <div>
    <!-- 也可以写成app-header-component形式，最后都会变成下面这种 -->
    <AppHeaderComponent :title="title"/>
    <div id="mian">
        <keep-alive>
          <router-view/>
        </keep-alive>
    </div>
    <!-- <AppFooterComponent @update:title="changeTitle($event)"/> -->
    <!-- 简写，双引号中title是子组件发射过来的值-->
    <AppFooterComponent :title.sync="title"/>
  </div> 
</template>
<script lang="ts" src="./app.ts"></script>
<style lang="scss" scoped src="./app.scss"></style