//
// App.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/12
//

import './App.css'
import React from "react"
import UserMainPage from '../UserMain/UserMainPage'
import SuperAdmin from '../SuperAdmin/SuperAdmin'

import {superVolunteerList} from '../../Api/volunteer'

import {Menu, PageHeader, Avatar, Breadcrumb, Layout, Row, Col} from 'antd'

import {UserOutlined, ToolOutlined} from '@ant-design/icons'
import {login} from '../../Api/login'

import {loginActionCreator, logoutAction} from '../../Module/Storage/Reducers'
import {store} from '../../Module/Storage/configureStore'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import VolunteerDto from '../../Module/VolunteerDto'

const { Header, Content, Footer } = Layout

const STATUS_USER = 'user'
const STATUS_ADMIN = 'admin'

const mapStateToProps = (state) => {
    return {
        hasLogin: state.hasLogin,
        token: state.token,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    loginAct: (token) => dispatch(loginActionCreator(token)),
    logoutAct: () => dispatch(logoutAction),
})

const ShuwaMenu = (props) => (
    <Menu defaultSelectedKeys={[STATUS_USER]} onClick={props.handleClick} mode="horizontal" className='menu-wrapper'>
        <Menu.Item key={STATUS_USER} itemIcon={<ToolOutlined />}>
            超级管理员
        </Menu.Item>
        <Menu.Item key={STATUS_ADMIN} itemIcon={<UserOutlined />}>
            用户
        </Menu.Item>
    </Menu>
)

class App extends React.Component {
    state = {
        curr: STATUS_USER,
        volunteers: '',
    }

    setVolunteers = (r: any) => {
        if (r instanceof Array) {
            let volunteerArray = []
            for (let v of r) {
                volunteerArray.push(new VolunteerDto(v))
            }
            this.setState({
                volunteers: volunteerArray
            })
            console.log('state: ' + this.state.volunteers)
        }
    }

    componentDidMount() {
        this.checkLogin().then((r: any) => {
            this.setVolunteers(r)
        })
    }

    constructor(props) {
        super(props)
        if (props.mode !== this.state.curr) {
            this.setState({
                curr: props.mode
            })
        }
    }

    async checkLogin() {
        return await superVolunteerList()
    }

    renderContent(mode) {
        if (mode.curr === STATUS_ADMIN) {
            return (
                <div className={STATUS_ADMIN}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>
                        请前往微信小程序
                    </a>
                </div>
            )
        } else if (store.getState()?.hasLogin === false) {
            return <UserMainPage loginHandler={(user, password) => this.logInBtnClickedHandler(user, password)}/>
        } else if (store.getState()?.hasLogin === true) {
            return <SuperAdmin volunteers={this.state.volunteers} />
        }
    }

    handleClick = e => {
        this.setState({
            curr: e.key
        })
    }

    async logInBtnClickedHandler(user, password) {
        await login(user, password)
        await superVolunteerList().then((r) => {
            this.setVolunteers(r)
        })
    }

    render() {
        return (
            <Layout className="App-wrapper" style={{minHeight: document.documentElement.clientHeight}}>
                <style jsx global>{`
                  body {
                    margin: 0;
                    padding: 0;
                  }
                `}</style>
                <PageHeader title='ShuwaShuwa'>
                    <Row>
                        <Col span={24}> <ShuwaMenu handleClick={(e) => this.handleClick(e)} /> </Col>
                    </Row>
                </PageHeader>
                <Content className='clear-fix'>
                    {this.renderContent(this.state)}
                </Content>
                <Footer> Shuwashuwa Admin ©2021 Created by team-combinatorics </Footer>
            </Layout>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
