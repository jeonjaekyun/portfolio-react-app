import React from 'react'
import { Menu } from 'antd';

function NavBar() {
    return (
        <div style={{ width: '100%', margin: '0' }}>
            <div style={{ width: '85%', margin: '1rem auto' }}>
                <Menu mode="horizontal"
                    style={{ fontSize: "24px", fontFamily: 'Roboto' }}>
                    <Menu.Item key="home">
                        <a href="/">HOME</a>
                    </Menu.Item>
                    <Menu.Item key="profile">
                        <a href="/">Profile</a>
                    </Menu.Item>
                    <Menu.Item key="portfolio">
                        <a href="/">Portfolio</a>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )
}

export default NavBar
