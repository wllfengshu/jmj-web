<!-- 基础布局组件，包含导航栏、内容区和页脚 -->
<template>
  <div class="basic-layout">
    <!-- 导航栏组件 -->
    <nav-bar />
    <!-- 内容区域，router-view 显示当前路由对应的组件 -->
    <div class="main-container">
      <router-view />
    </div>
    <!-- 页脚组件 -->
    <footer-bar />
  </div>
</template>

<script setup lang="ts">
// setup 是 Vue3 的组合式 API 入口
// lang="ts" 表示使用 TypeScript
import NavBar from './NavBar.vue'
import FooterBar from './FooterBar.vue'
</script>

<style scoped lang="scss">
// lang="scss" 表示使用 SCSS 预处理器
.basic-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main-container {
    flex: 1;
    padding: 20px;
    margin-bottom: 60px; // 为固定定位的页脚留出空间
  }
}
</style>
