// Vue Router 是 Vue.js 的官方路由管理器
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { ElMessage } from 'element-plus'

// 路由配置数组，定义了 URL 路径与组件的对应关系
const routes: RouteRecordRaw[] = [
  {
    path: '/', // 根路径
    // 动态导入基础布局组件，这种方式可以实现代码分割，提高性能
    component: () => import('@/components/layout/BasicLayout.vue'),
    // children 定义子路由，这些路由会在 BasicLayout 的 router-view 中显示
    children: [
      {
        path: '', // 空路径表示父路由的默认子路由
        name: 'home', // 路由名称，可用于编程式导航
        component: () => import('@/views/HomeView.vue'),
        meta: {
          // meta 存储路由的元信息
          requiresAuth: true, // 表示这个路由需要登录才能访问
          title: '首页',
        },
      },
      // 其他子路由...
    ],
  },
  // 登录页面路由
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      requiresAuth: false, // 登录页不需要登录就能访问
      title: '登录',
    },
  },
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 历史模式
  routes,
})

// 全局前置守卫，在路由跳转前执行
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = `${to.meta.title} - JMJ Web`

  // 从 localStorage 获取登录状态
  const isAuthenticated = localStorage.getItem('token')

  // 路由守卫逻辑：
  // 1. 如果页面需要认证且用户未登录，跳转到登录页
  // 2. 如果用户已登录还想访问登录页，跳转到首页
  // 3. 其他情况正常访问
  if (to.meta.requiresAuth && !isAuthenticated) {
    ElMessage.warning('请先登录')
    next('/login')
  } else if (to.path === '/login' && isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
