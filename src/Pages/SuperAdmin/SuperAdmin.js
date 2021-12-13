//
// SuperAdmin.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/13
//

import React from "react"
import {volunteerList} from "./Api/volunteer"
import './SuperAdmin.css'

class SuperAdmin extends React.Component {
    componentDidMount() {
        console.log("boluntters?")
        this.getVolunteers().then(r => {
            console.log(r)
        })
    }

    async getVolunteers() {
        return await volunteerList()
    }

    render() {
        return (
            <div className="super-admin">
                您已登录
            </div>
        )
    }
}

export default SuperAdmin