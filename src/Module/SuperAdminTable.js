import {Button, Tag} from 'antd';
import VolunteerDto from './VolunteerDto';
import React from 'react';

export const superAdminColumns = (editVolunteerClicked) => ([
    {
        title: 'ID',
        dataIndex: 'userid',
        key: 'userid',
        fixed: 'left',
        align: 'center',
        render: text => <a>{text}</a>
    },
    {
        title: '姓名',
        dataIndex: 'userName',
        key: 'userName',
        render: (text, record) => {
            console.log(record)
            let name = text? text: record.identity
            return (
                <div>
                    {name}
                </div>
            )
        }
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: '身份',
        key: 'identity',
        dataIndex: 'identity',
        render: tags => (
            <Tag key={tags}> {tags.toUpperCase()} </Tag>
        )
    },
    {
        title: '电话',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
    },
    {
        title: '学院',
        dataIndex: 'department',
        key: 'department',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        render: (_: any, record: VolunteerDto) => (
            <Button onClick={() => editVolunteerClicked(record)}> 编辑 </Button>
        ),
        fixed: 'right',
    }
])