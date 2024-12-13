# jmj-web

VUE3+TS+VITE+ELEMENT-PLUS

# 王亮亮

## Recommended IDE Setup

src/
├── assets/ # 静态资源
├── components/ # 公共组件
│ ├── layout/ # 布局相关组件
│ │ ├── NavBar.vue
│ │ └── FooterBar.vue
│ └── common/ # 通用组件
├── router/ # 路由配置
├── store/ # Pinia 状态管理
├── styles/ # 全局样式
├── types/ # TypeScript 类型定义
├── utils/ # 工具函数
└── views/ # 页面组件

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
