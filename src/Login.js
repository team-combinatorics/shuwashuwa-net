// shuwashuwa-net
// Login.js
// created by kevin in 2021/12/12
//

import './Login.css'
import React from "react"
import { Input, Space } from "antd"
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

class Login extends React.Component {

    render() {
        return (
            <Space direction="vertical" className="input-area">
                <Input size="large" placeholder="输入您的账号" prefix={<UserOutlined />} />
                <Input.Password size="large" placeholder="输入您的密码" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
            </Space>
        )
    }
}

export default Login