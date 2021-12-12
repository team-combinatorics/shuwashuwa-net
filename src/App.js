// shuwashuwa-net
// App.js
// created by Hirate99 in 2021/12/12
//

import './App.css';
import React from "react";
import UserMainPage from "./UserMainPage";

import {Menu} from "antd";

const { SubMenu } = Menu;

class App extends React.Component {

    state = {
        curr: 'user',
    }

    renderContent(mode) {
        console.log(mode)
        if (mode === 'user') {
            return <UserMainPage />
        }
    }

    handleClick = e => {
        this.setState({
            curr: e.key
        })
        this.renderContent(e.key)
    }

    render() {
        const { current } = this.state
        return (
            <div className="App-wrapper" >
                <style jsx global>{`
                    body {
                      margin: 0px;
                      padding: 0px;
                    }
                `}</style>
                <div className="menu-wrapper" >
                    <Menu defaultSelectedKeys={['user']} onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                        <Menu.Item key="user">
                            用户
                        </Menu.Item>
                        <Menu.Item key="admin">
                            管理员
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="App-body">
                    {this.renderContent(this.state.curr)}
                </div>
            </div>

        )
    }
}

export default App;
