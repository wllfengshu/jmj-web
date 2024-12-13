// 用户信息接口定义
export interface UserInfo {
  username: string // 用户名
  token: string // 登录令牌
  roles: string[] // 用户角色数组
}

// 登录表单接口定义
export interface LoginForm {
  username: string // 登录用户名
  password: string // 登录密码
}
