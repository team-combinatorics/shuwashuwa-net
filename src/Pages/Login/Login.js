//
// Login.js
// shuwashuwa-net
//
// created by kevin on 2021/12/12
//

import './Login.css'
import React from "react"
import { Input, Space, Button } from "antd"
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, UserAddOutlined } from '@ant-design/icons';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.setState({
            account: '',
            password: '',
            hasLogin: false,
        })
    }

    textInputChangedHandler(e) {
        if (e && e.target && e.target.value) {
            if (e.target.id === 'account') {
                this.setState({
                    account: e.target.value
                })
            } else if (e.target.id === 'password') {
                this.setState({
                    password: e.target.value
                })
            }
        }
    }

    async loginBtnClicked(e) {
        if (this.state.password && this.state.account) {
            await this.props.loginHandler(this.state.account, this.state.password)
        }
    }

    render() {
        return (
            <Space direction="vertical" className="input-area">
                <Input size="large" placeholder="输入您的账号" prefix={<UserOutlined />} onChange={(e) => this.textInputChangedHandler(e)} id='account' />
                <Input.Password size="large" placeholder="输入您的密码" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} onChange={(e) => this.textInputChangedHandler(e)} id='password'  />
                <div className="login-btns">
                    <div className="btn-sign-up">
                        <Button size="large" shape="round" icon={<UserAddOutlined />}> 注册 </Button>
                    </div>
                    <div className="btn-sign-in">
                        <Button type="primary" size="large" shape="round" icon={<UserOutlined />} onClick={(e) => this.loginBtnClicked(e)}> 登录 </Button>
                    </div>
                </div>

            </Space>
        )
    }
}

export default Login