// 定义接口函数

import Request from './request'

// 登录接口函数
export const reqLogin = ( username, password ) => Request( '/login', { username, password }, 'post' )
// () => 'xxx' 等同于 () => { return 'xxx' }

// 注册接口函数
export const register = ( user ) => Request( './register', user, 'post' )