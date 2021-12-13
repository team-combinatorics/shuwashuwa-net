//
// volunteer.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/13
//

import axios from 'axios'
import ApplicationManager from "../Module/ApplicationManager"
import VolunteerDto from "../Module/VolunteerDto"

export const volunteerList = async () => {
    const baseUrl = ApplicationManager.getInstance().baseUrl
    const token = ApplicationManager.getInstance().token
    console.log(token)
    if (baseUrl && token) {
        let res = await axios.get('api/volunteer/list', {
            baseURL: baseUrl,
            headers: {
                'token': token
            }
        })
        if (res?.status === 200) {
            console.log(res.data)
        } else {
            console.log(res)
        }
    }
}