import { CloseOutlined } from '@ant-design/icons'
import { Button, Col, Drawer, Row, Space, Tag, Typography } from 'antd'
import React from 'react'
import { LowBatteryBigIcon } from '../Icons/Battery'
import {
    history,
} from '@umijs/max';
type Props = {
    type: string,
    open: boolean,
    setOpen: (val: any) => void
}

export const DrawerNotifications: React.FC<Props> = ({
    type, open, setOpen
}) => {
    const onClose = () => {
        setOpen(false);
    };

    return (
        <Drawer title="Basic Drawer" closable={false} placement="right" onClose={onClose} open={open} style={{
            borderWidth: 0,
            borderBottom: 0
        }}
            width={475}
            extra={
                <Button icon={<CloseOutlined />} type={'text'} onClick={onClose} />
            }>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Typography.Link style={{
                        float: 'right'
                    }} onClick={() => history.push('/dashboard/notifications')}>View All Category</Typography.Link>
                </Col>
                {[...Array(8)].map((e) => {
                    return (
                        <Col span={24} key={e} style={{
                            border: '1px solid #FFA39E',
                            borderRadius: '8px',
                        }}>
                            <Space align='start' style={{
                                padding: '20px 10px'
                            }}>
                                <LowBatteryBigIcon />
                                <Row gutter={[16, 4]}>
                                    <Col span={24} style={{
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Typography>Water Level</Typography>
                                        <Typography style={{
                                            color: 'rgba(0, 0, 0, 0.45)'
                                        }}>07-12-2022</Typography>
                                    </Col>
                                    <Col span={24}>
                                        <Typography.Title level={5} style={{
                                            margin: '0px 0px'
                                        }}>Low Battery 15%</Typography.Title>
                                    </Col>
                                    <Col span={8}>
                                        <Typography style={{
                                            fontSize: 10
                                        }}>Tenant Name</Typography>
                                    </Col>
                                    <Col span={16}>
                                        <Typography style={{
                                            fontSize: 10
                                        }}>: Reilly, Fahey and Mayer</Typography>
                                    </Col>
                                    <Col span={8}>
                                        <Typography style={{
                                            fontSize: 10
                                        }}>Dev Eui</Typography>
                                    </Col>
                                    <Col span={16}>
                                        <Typography style={{
                                            fontSize: 10
                                        }}>: 397293972939729</Typography>
                                    </Col>
                                    <Col span={8}>
                                        <Typography style={{
                                            fontSize: 10
                                        }}>Last Update</Typography>
                                    </Col>
                                    <Col span={16}>
                                        <Typography style={{
                                            fontSize: 10
                                        }}>: Nov 07 2022 17:52:06</Typography>
                                    </Col>
                                    <Col span={8}>
                                        <Typography style={{
                                            fontSize: 10
                                        }}>Status Valve</Typography>
                                    </Col>
                                    <Col span={16}>
                                        <Tag
                                            style={{
                                                backgroundColor: '#52C41A',
                                                color: '#fff',
                                                borderRadius: 100,
                                                padding: '0px 6px',
                                                fontSize: 9,
                                                border: '1px solid #52C41A'
                                            }}
                                        >
                                            Open
                                        </Tag>
                                    </Col>
                                </Row>
                            </Space>
                        </Col>
                    )
                })}
            </Row>
        </Drawer>
    )
}
