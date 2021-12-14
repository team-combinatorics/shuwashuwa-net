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

import {Menu} from 'antd'
import {login} from '../../Api/login'
import ApplicationManager from '../../Module/ApplicationManager'

import {logoutAction, loginActionCreator} from '../../Module/Storage/Reducers'
import {store} from '../../Module/Storage/configureStore'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'

const STATUS_USER = 'user'
const STATUS_ADMIN = 'admin'

const mapStateToProps = (state) => {
    return {
        hasLogin: state.hasLogin
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    loginAct: (token) => dispatch(loginActionCreator(token)),
    logoutAct: () => dispatch(logoutAction),
})

class App extends React.Component {
    state = {
        curr: STATUS_USER,
    }

    constructor(props) {
        super(props)
        if (props.mode !== this.state.curr) {
            this.setState({
                curr: props.mode
            })
        }
    }

    checkLogin() {
        return false
    }

    renderContent(mode) {
        const hasLogin = store.getState()?.hasLogin
        // if (hasLogin) {
        //     const isLogin = this.checkLogin()
        //     if (isLogin === false) {
        //         this.props.logoutAct()
        //     }
        // }

        console.log(store.getState())

        if (mode.curr === STATUS_ADMIN) {
            return (
                <div className={STATUS_ADMIN}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a onClick={() => window.open('https://shuwashuwa.kinami.cc/')}>
                        请前往 https://shuwashuwa.kinami.cc/
                    </a>
                </div>
            )
        } else if (store.getState()?.hasLogin === false) {
            return <UserMainPage loginHandler={(user, password) => this.logInBtnClickedHandler(user, password)}/>
        } else if (store.getState()?.hasLogin === true) {
            return <SuperAdmin/>
        }
    }

    handleClick = e => {
        this.setState({
            curr: e.key
        })
    }

    async logInBtnClickedHandler(user, password) {
        let loginStatus = await login(user, password)
        if (loginStatus) {
            let appManager = ApplicationManager.getInstance()
            appManager.token = loginStatus
            this.props.loginAct(loginStatus)
        }
    }

    render() {
        return (
            <div className="App-wrapper">
                <style jsx global>{`
                  body {
                    margin: 0;
                    padding: 0;
                  }
                `}</style>
                <div className="menu-wrapper">
                    <Menu defaultSelectedKeys={[STATUS_USER]} onClick={this.handleClick} mode="horizontal">
                        <Menu.Item key={STATUS_USER}>
                            用户
                        </Menu.Item>
                        <Menu.Item key={STATUS_ADMIN}>
                            管理员
                        </Menu.Item>
                    </Menu>
                </div>
                {this.renderContent(this.state)}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
