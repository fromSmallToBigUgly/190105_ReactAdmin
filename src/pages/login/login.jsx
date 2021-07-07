import React, {Component} from 'react';
import {
    Form,
    Input,
    Button,
    Icon
} from 'antd';
import './login.less'
import logo from './images/logo.png'
/*
登录的路由组件
 */
class Login extends Component {
    handleSubmit=(event)=>{
        //阻止事件的默认行为
        event.preventDefault()
        const form = this.props.form
        const values = form.getFieldsValue()
        console.log(values)

    }
    render() {
        //得到具体的强大功能form数据对象
        const form = this.props.form
        const {getFieldDecorator} = form
        return (
            <div className="login">
                 <header className="login-header">
                     <img src={logo} alt="logo"></img>
                     <h1>トップソフト株式会社：管理系统</h1>
                 </header>
                 <section className="login-content">
                     <h2>ユーザー登录</h2>
                     <Form
                         onSubmit={this.handleSubmit}
                         className="login-form"
                     >
                         <Form.Item>
                             {getFieldDecorator('username', {
                                 rules: [{ required: true, message: 'Please input your username!' }],
                             })(
                                 <Input
                                     prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                     placeholder="Username"
                                 />,
                             )}
                         </Form.Item>
                         <Form.Item>
                             {getFieldDecorator('password', {
                                 rules: [{ required: true, message: 'Please input your Password!' }],
                             })(
                                 <Input
                                     prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                     type="password"
                                     placeholder="Password"
                                 />,
                             )}
                         </Form.Item>

                         <Form.Item>
                             <Button type="primary" htmlType="submit" className="login-form-button">
                                 登录
                             </Button>
                         </Form.Item>
                     </Form>
                 </section>
            </div>
        );
    }
}
const WrapLogin = Form.create()(Login)
export default WrapLogin;