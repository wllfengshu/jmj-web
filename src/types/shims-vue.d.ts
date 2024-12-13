// 文件作用：声明 Vue 组件，使 TypeScript 编译器能够正确处理 .vue 文件
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
