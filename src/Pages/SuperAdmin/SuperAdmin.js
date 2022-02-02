//
// SuperAdmin.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/13
//

import React from 'react'
import './SuperAdmin.css'
import {Row, Col, Table, Drawer} from 'antd'
import Title from 'antd/es/typography/Title'
import {superAdminColumns} from '../../Module/SuperAdminTable'
import AdminDrawer from './AdminDrawer'
import {LogoutBtn} from "../Login/Login";


class SuperAdmin extends React.Component {
    state = {
        visible: false,
        placement: 'bottom',
    }

    showDrawer = (volunteer) => {
        this.setState({
            visible: true,
        })
    }

    drawerOnClose = () => {
        this.setState({
            visible: false,
        })
    }

    editVolunteerClicked = (volunteer) => {
        this.showDrawer(volunteer)
    }

    render() {
        const { visible, placement } = this.state;
        return (
            <>
                <Row justify='space-around'>
                    <Col span={16}>
                        <Title ellipsis='true' style={{'text-align': 'right'}}> 超级管理员 <br/>管理所有的 <br/>管理员. </Title>
                    </Col>
                </Row>
                <Row justify='space-around'>
                    <Col span={16} className='super-admin'>
                        <Table columns={superAdminColumns(this.editVolunteerClicked)}
                               dataSource={this.props.volunteers}
                               scroll={{x: 500}}
                               size='small'
                               pagination={{pageSize: 4}}
                        />
                    </Col>
                </Row>
                <LogoutBtn style={{
                    marginTop: '20px',
                }} />
                <Drawer title="管理管理员"
                        placement={placement}
                        closable={false}
                        visible={visible}
                        onClose={this.drawerOnClose}
                        height={512}
                >
                </Drawer>
            </>
        )
    }
}

export default SuperAdmin