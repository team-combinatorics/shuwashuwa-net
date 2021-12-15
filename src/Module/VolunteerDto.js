//
// VolunteerDto.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/13
//

export default class VolunteerDto extends Object {
    constructor(user) {
        console.log(user)
        super()
        this.department = user.department
        this.email = user.email
        this.identity = user.identity
        this.orderCount = user.orderCount
        this.phoneNumber = user.phoneNumber
        this.studentId = user.studentId
        this.userid = user.userid
        this.userName = user.userName
    }
}