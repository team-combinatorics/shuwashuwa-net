//
// SuperAdmin.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/13
//

import React from 'react'
import './SuperAdmin.css'
import {Row, Col, Table, Drawer, Card} from 'antd'
import Title from 'antd/es/typography/Title'
import {superAdminColumns} from '../../Module/SuperAdminTable'
const { Meta } = Card

class SuperAdmin extends React.Component {
    state = {
        visible: false,
        placement: 'bottom',
    }

    showDrawer = () => {
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
        this.showDrawer()
    }

    render() {
        const { visible, placement } = this.state;
        return (
            <div>
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
                               pagination={{pageSize: 6}}
                        />
                    </Col>
                </Row>
                <Drawer title="管理管理员"
                        placement={placement}
                        closable={false}
                        visible={visible}
                        onClose={this.drawerOnClose}
                        headerStyle={{'font-size': 'large', 'font-weight': 'bold'}}
                        height={512}
                >

                </Drawer>
            </div>
        )
    }
}

export default SuperAdmin