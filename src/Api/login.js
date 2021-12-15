//
// login.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/13
//

import axios from 'axios'
import ApplicationManager from '../Module/ApplicationManager'
import {store} from '../Module/Storage/configureStore'
import {loginActionCreator} from '../Module/Storage/Reducers'

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
        window.alert("您已登录")
        store.dispatch(loginActionCreator(res.data.data))
        return res.data.data
    } else {
        window.alert(res.data.message)
    }
}
