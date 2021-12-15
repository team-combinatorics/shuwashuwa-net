
import React, {useEffect, useState} from 'react'
import VolunteerDto from '../VolunteerDto'
import {Card, Avatar} from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { Row, Col } from 'antd'
import './UserCard.css'

const { Meta } = Card;

export default function UserCard(props) {

    const [userInfo: VolunteerDto, setUserInfo] = useState(props.userInfo)

    useEffect(() => {
        console.log(userInfo)
    })

    return (
        <Card hoverable='true'
              size='small'
              actions={[
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
              ]}
              title={userInfo.identity}
              avatar={<Avatar> {userInfo.identity[0]} </Avatar>}
              bodyStyle={{'text-align': 'left'}}
              className='userCard'
        >

            <Row>
                <Col span='24'> {userInfo.userid} </Col>
            </Row>
            <Row>
                <Col span='24'> {userInfo.email} </Col>
            </Row>
            <Row>
                <Col span='24'> {userInfo.studentId} </Col>
            </Row>
        </Card>

    )
}