//
// Login.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/12
//

import './Login.css'
import React from 'react'
import {Input, Space, Button, Row, Col} from 'antd'
import {UserOutlined, EyeInvisibleOutlined, EyeTwoTone, UserAddOutlined} from '@ant-design/icons'
import {store} from "../../Module/Storage/configureStore";
import {logoutAction} from "../../Module/Storage/Reducers";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.setState({
            account: '',
            password: '',
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
            <Row style={{
                marginTop: '20px',
            }}>
                <Col span={9} />
                <Col span={6}>
                    <Row>
                        <Col span={24} style={{
                            minWidth: '200px',
                        }}>
                            <Input size="large" placeholder="输入您的账号" prefix={<UserOutlined/>}
                                   onChange={(e) => this.textInputChangedHandler(e)} id='account'/>
                            <Input.Password size="large" placeholder="输入您的密码"
                                            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                            onChange={(e) => this.textInputChangedHandler(e)} id='password'/>
                        </Col>
                    </Row>
                    <Row style={{
                        marginTop: '10px',
                        minWidth: '200px',
                    }}>
                        <Col span={12}>
                            <Button size="large" shape="round" icon={<UserAddOutlined/>} style={{
                                width: '90%',
                            }}> 注册 </Button>
                        </Col>
                        <Col span={12}>
                            <Button type="primary" size="large" shape="round" icon={<UserOutlined/>}
                                    onClick={(e) => this.loginBtnClicked(e)} style={{
                                width: '90%',
                            }}> 登录 </Button>
                        </Col>
                    </Row>
                </Col>
                <Col span={9} />
            </Row>

        )
    }
}

export default Login

export const LogoutBtn = (props) => {

    const handleLogout = () => {
        store.dispatch(logoutAction)
    }

    return (
        <Row style={props.style}>
            <Col span={24}>
                <Button danger onClick={() => {handleLogout()}}>
                    登出
                </Button>
            </Col>
        </Row>
    )
}