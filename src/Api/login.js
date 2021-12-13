//
// login.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/13
//

import axios from 'axios'
import ApplicationManager from "../Module/ApplicationManager"

export const login = async (userName, password) => {
    const baseUrl = ApplicationManager.getInstance().baseUrl
    let res = await axios.get('/api/super/login', {
        baseURL: baseUrl,
        params: {
            userName: userName,
            password: password,
        }
    })
    console.log(res.data)
    if (res?.data.code === 200) {
        return res.data.data
    } else {
        window.alert(res.data.message)
    }
}
