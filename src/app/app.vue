<template>
<!-- 添加一个div，将其他组件包起来，Vue只允许模板里存在一个根节点 -->
  <div id="main">
    <!-- 也可以写成app-header-component形式，最后都会变成下面这种 -->
    <AppHeaderComponent/>
    <keep-alive>
      <router-view ref="main"/>
    </keep-alive>
    <AppFooterComponent />
  </div> 
</template>
<script lang="ts" src="./app.ts"></script>
<style lang="scss" scoped src="./app.scss"></style>