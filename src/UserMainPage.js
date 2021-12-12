// shuwashuwa-net
// UserMainPage.js
// created by kevin in 2021/12/12
//

import './App.css';
import React from "react";
import Login from "./Login"
import logo from './Assets/shuwashuwa-logo.png'

class UserMainPage extends React.Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <img className="App-logo" src={logo} alt="logo"/>
                    <div className="App-title">
                        修哇修哇
                    </div>
                </div>
                <div className="App">
                    <Login />
                </div>
            </div>
        )
    }
}

export default UserMainPage