//
// UserMainPage.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/12
//

import '../App/App.css'
import React from 'react'
import Login from '../Login/Login'
import logo from '../../Assets/shuwashuwa-logo.png'
import {Row, Col} from "antd";

class UserMainPage extends React.Component {
    render() {
        return (
            <Row style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: '30vw',
                height: '100%',
            }}>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={24}>
                                    <img className="App-logo" src={logo} alt="logo"/>
                                </Col>
                                <Col span={24} style={{
                                    fontFamily: '华文中宋, serif',
                                    fontSize: 'x-large',
                                    marginTop: '20px',
                                    color: 'darkgray',
                                }}>
                                    修哇修哇
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Login loginHandler={(user, password) => this.props.loginHandler(user, password)} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

        )
    }
}

export default UserMainPage