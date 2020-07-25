import React from 'react'
import { Menu, Row, Col } from 'antd';
import {BarsOutlined} from '@ant-design/icons';
import './NavBar.css';
const { SubMenu } = Menu;

function NavBar() {
    return (
        <div style={{ width: '100%', margin: '0' }}>
            <div style={{ width: '85%', margin: '1rem auto', textAlign:"center" }}>
                <div className="title">JJK Portfolio Site</div>
            </div>
        </div>
    )
}

export default NavBar
