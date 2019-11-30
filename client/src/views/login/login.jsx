// 登陆界面
import React, { Component } from 'react'

import 'styles/login/login.less'
import logo from 'imgs/GM.png'

import { Form, Icon, Input, Button } from 'antd';

import { reqLogin } from '../../api/index.js'

// const Item = Form.Item  必须写在 import 之后

class Login extends Component {
    handleSubmit = (e) => {
        // 阻止表单自动提交
        e.preventDefault()  

        // 点击提交时进行校验
        this.props.form.validateFields(
            (err, values) => {
                if (!err) {
                    // 校验通过 调用登录 API
                    reqLogin (values).then( ( res ) => {
                        console.log('登录成功')
                    }).catch( ( err ) => {
                        throw new Error('登录失败')
                    })

                    // 或则 ：
                    // const { username, password } = values
                    // reqLogin ( username, password )
                } else {
                    // 校验失败
                }
            }
        )

        // const form = this.props.form    // form 对象 

        // 获取 Form 中所有 Item 的 value，获取到一个对象，对象的 key 是给 Item 传入的名称
        // const formValues = form.getFieldsValue()
    }

    // 自定义密码校验
    validatePwd = (rule, value, callback) => {
        if (!value) {
            callback ('请输入密码！') // 验证失败，传入的参数是失败时提示的文本
        } else if (value.length < 7){
            callback ('密码至少七位') 
        }else if (value.length > 16){
            callback ('密码最多十六位') 
        }else if (!/^[a-zA-Z0-9_]+$/.test(value)){
            callback ('密码必须是英文、数字、下划线组成！') 
        } else {
            callback () // 验证通过
        }    
    }

    render () {
        const form = this.props.form    // Form(Login) 向 Form 组件传递的对象
        const { getFieldDecorator } = form

        return <div className="login">
            <header className="hedaer">
                <div className="hedaer-content">
                    <img className="logo" src={logo} alt="logo" />
                    <h1 className="title">Mcould</h1>
                </div>               
            </header>

            <section className="content">
                <h2>用户登陆</h2>               
                <Form className="login-form" onSubmit={ this.handleSubmit }>
                    <Form.Item>
                        {
                            getFieldDecorator ('username', {
                                // 表单校验，声明式验证，直接使用定义好的规则进行验证
                                rules: [ 
                                    { required: true, whitespace: true, message: '请输入用户名！' }, 
                                    { min: 2, message: '用户名最少两位！'},
                                    { max: 10, message: '用户名最多十位！'},
                                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字、下划线组成！'}
                                ],
                                initialValue: 'admin'   // 初始默认值
                            }) (
                                <Input
                                    prefix={<Icon type="user" />}
                                    placeholder="用户名"
                                />
                            )
                        }
                    </Form.Item>

                    <Form.Item>
                        {
                            getFieldDecorator ('password', {
                                rules: [ 
                                    { validator: this.validatePwd }
                                ],
                                initialValue: '178250mei'
                            }) (
                                <Input
                                    prefix={<Icon type="lock" />}
                                    type="password"
                                    placeholder="密码"
                                />
                            )
                        }                       
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登陆
                        </Button>
                    </Form.Item>
                </Form>                
            </section>
        </div>
    }
}

// 包装 Form 组件（内部有 Form 表单的组件），生成一个新组件 Form(Login)
// 新组件会向 Form 组件传递一个对象属性： form
const LoginForm = Form.create()(Login)

export default LoginForm