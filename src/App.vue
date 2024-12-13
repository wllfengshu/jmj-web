<!-- App.vue 是整个 Vue 应用的根组件，所有其他组件都在它之下 -->
<template>
  <!-- router-view 是路由视图组件，根据当前 URL 显示对应的页面组件 -->
  <router-view></router-view>
</template>

<style scoped>
/* scoped 表示这些样式只应用于当前组件 */
.app-container {
  min-height: 100vh;
}
</style>
