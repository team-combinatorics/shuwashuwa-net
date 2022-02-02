//
// volunteer.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/13
//

import axios from 'axios'
import ApplicationManager from "../Module/ApplicationManager"
import {store} from '../Module/Storage/configureStore'
import {logoutAction} from '../Module/Storage/Reducers'

export const superVolunteerList = async () => {
    const baseUrl = ApplicationManager.getInstance().baseUrl
    const token = store.getState()?.token
    if (baseUrl && token) {
        let res = await axios.get('api/volunteer/list', {
            baseURL: baseUrl,
            headers: {
                'token': token
            }
        })

        if (res?.status === 200 && res.data.code === 200) {
            console.log(res.data)
            return res.data.data
        }
    }
    store.dispatch(logoutAction)
}

export const getVolunteerDetails = async (volunteerId) => {

}