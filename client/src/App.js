// 应用根组件

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './views/login/login'
import Admin from './views/admin/admin'

export default class App extends React.Component {
    render () {
        return (
            <BrowserRouter> {/* 路由器 路由显示方式：没有 # */}
                <Switch>    {/* 一个时刻只匹配一个路由 */}
                    <Route path="/login" component={ Login }></Route>
                    <Route path="/" component={ Admin }></Route>
                </Switch>               
            </BrowserRouter>
        )
    }
}