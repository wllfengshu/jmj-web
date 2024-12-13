<template>
  <el-menu class="nav-menu" mode="horizontal" router :default-active="currentRoute">
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/about">关于</el-menu-item>

    <div class="nav-right">
      <el-button type="primary" @click="handleLogout">退出登录</el-button>
    </div>
  </el-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const route = useRoute()

const currentRoute = computed(() => route.path)

const handleLogout = () => {
  localStorage.removeItem('token')
  ElMessage.success('退出成功')
  router.push('/login')
}
</script>

<style scoped lang="scss">
.nav-menu {
  padding: 0 20px;
  border-bottom: 1px solid #eee;
}

.nav-right {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
