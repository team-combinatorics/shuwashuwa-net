//
// ApplicationManager.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/13
//

const RELEASE_URL = 'https://shuwashuwa.kinami.cc'
const DEV_URL = 'http://shuwashuwa.kinami.cc:8848'

class AppManager extends Object {
    constructor() {
        super()
        this.baseUrl = DEV_URL
        this.token = ''
    }
}

let ApplicationManager = (function() {
    function Singleton() {
        return new AppManager()
    }
    let instance
    return {
        getInstance: function() {
            if (instance == null) {
                instance = new Singleton()
                instance.constructor = null
            }
            return instance
        }
    }
})()

export default ApplicationManager