//
// AdminDrawer.js
// shuwashuwa-net
//
// created by Hirate99 on 2021/12/17
//

import React, {useEffect, useState} from 'react'
import {Drawer} from 'antd'

export default function AdminDrawer(props) {
    const [title, setTitle] = useState(props.title)
    const [placement, setPlacement] = useState(props.placement)
    const [visible, setVisible] = useState(props.visible)
    const [user, setUser] = useState(props.user)

    useEffect((e) => {

    })

    const drawerOnClose = () => {
        setVisible(false)
    }

    return (
        <Drawer title={title}
                placement={placement}
                visible={visible}
                onClose={drawerOnClose}
                height={512}
                closable={false}
        >

        </Drawer>
    )
}
