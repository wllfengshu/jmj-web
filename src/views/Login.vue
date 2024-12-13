<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2>用户登录</h2>
      <el-form :model="loginForm" @submit.prevent="handleLogin">
        <el-form-item>
          <el-input v-model="loginForm.username" placeholder="用户名" prefix-icon="el-icon-user" />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="密码"
            prefix-icon="el-icon-lock"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin" style="width: 100%">登录</el-button>
          <el-button style="width: 100%; margin-top: 10px">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const loginForm = ref({
  username: '',
  password: '',
})

const handleLogin = async () => {
  if (loginForm.value.username === 'admin' && loginForm.value.password === '123456') {
    // 保存登录状态
    localStorage.setItem('token', 'ttt1111liang')
    ElMessage.success('登录成功')
    router.push('/')
  } else {
    ElMessage.error('登录失败')
  }

  // try {
  //   const response = await axios.post('/api/login', loginForm.value)
  //   if (response.data.success) {
  //     // 保存登录状态（token）
  //     localStorage.setItem('token', response.data.token)
  //     ElMessage.success('登录成功')
  //     router.push('/home')
  //   } else {
  //     ElMessage.error(response.data.message || '登录失败')
  //   }
  // } catch (error) {
  //   ElMessage.error('登录失败，请稍后重试')
  // }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.login-card {
  width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
