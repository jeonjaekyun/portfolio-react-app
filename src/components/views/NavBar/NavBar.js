import React from 'react'
import { Menu, Row, Col } from 'antd';
import {BarsOutlined} from '@ant-design/icons';
import './NavBar.css';
const { SubMenu } = Menu;

function NavBar() {
    return (
        <div style={{ width: '100%', margin: '0' }}>
            <div style={{ width: '85%', margin: '1rem auto' }}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Menu mode="horizontal" style={{ borderBottom: 'none' }}>
                            <SubMenu icon={<BarsOutlined style={{ fontSize: "24px" }} />}>
                                <Menu.Item key="home">
                                    <a href="/">HOME</a>
                                </Menu.Item>
                                <Menu.Item key="profile">
                                    <a href="/">Profile</a>
                                </Menu.Item>
                                <Menu.Item key="portfolio">
                                    <a href="/">Portfolio</a>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                    <Col span={8} style={{textAlign:'center'}}>
                        <div className="title">JJK Portfolio Site</div>
                    </Col>
                    <Col span={8}>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default NavBar
