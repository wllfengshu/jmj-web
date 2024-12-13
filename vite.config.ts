// Vite 是一个现代前端构建工具，它提供了极快的开发服务器和优化的生产构建

import { defineConfig } from 'vite' // defineConfig 帮助提供类型提示
import vue from '@vitejs/plugin-vue' // Vue 3 单文件组件支持
import path from 'path' // Node.js 的路径处理模块
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(), // 启用 Vue 3 单文件组件支持
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      // 配置路径别名，使得 @/ 指向 src 目录
      // 这样可以使用 @/components 代替 ../components 这样的相对路径
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 其他 Vite 配置选项：
  // server: 开发服务器配置
  // build: 生产构建配置
  // css: CSS 相关配置
  // optimizeDeps: 依赖优化配置
})
