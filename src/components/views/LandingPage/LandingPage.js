import React from 'react';
import {Carousel, Row, Col, Card} from 'antd';
import './LandingPage.css'
import PortfolioPage from '../PortfolioPage/PortfolioPage';

function LandingPage(props) {

    const gridStyle = {
        width:'160px',
        height:'160px',
        backgroundSize:'100% 100%',
        marginRight:'20px'
    }

    return (
        <div style={{ width: '100%', margin: '0' }}>
            <div style={{ width: '85%', margin: '1rem auto' }}>

                <div id="home">
                    <span className="imagetitle">Backend 개발자를 희망하는 신입 개발자 입니다.</span>
                </div>
                    
                <div style={{marginTop:'40px'}}>
                    
                    <h2>Skills</h2>
                    <Card title="Language">
                        <Card.Grid style={gridStyle} id="javascript" />
                        <Card.Grid style={gridStyle} id="java" />
                    </Card>
                    <Card title="Frontend">
                        <Card.Grid style={gridStyle} id="html" />
                        <Card.Grid style={gridStyle} id="css" />
                        <Card.Grid style={gridStyle} id="react" />
                        <Card.Grid style={gridStyle} id="redux" />
                    </Card>
                    <Card title="Backend">
                        <Card.Grid style={gridStyle} id="node" />
                        <Card.Grid style={gridStyle} id="express" />
                        <Card.Grid style={gridStyle} id="spring" />
                    </Card>
                    <Card title="Database">
                        <Card.Grid style={gridStyle} id="mongodb" />
                        <Card.Grid style={gridStyle} id="mysql" />
                    </Card>
                    
                </div>
                <PortfolioPage/>
            </div>
        </div>
    )
}

export default LandingPage
