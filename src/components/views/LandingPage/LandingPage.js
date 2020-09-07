import React from 'react';
import { Card } from 'antd';
import './LandingPage.css'
import PortfolioPage from '../PortfolioPage/PortfolioPage';

function LandingPage(props) {

    const gridStyle = {
        width: '160px',
        height: '160px',
        backgroundSize: '100% 100%',
        marginRight: '20px'
    }

    return (
        <div style={{ width: '100%', margin: '0' }}>
            <div style={{ width: '85%', margin: '1rem auto' }}>

                <div id="home">
                    <span className="imagetitle">Backend 개발자를 희망하는 신입 개발자 입니다.</span>
                </div>

                <div style={{ marginTop: '40px' }}>
                    <div style={{width:'100px'}}>
                        <h2>About Me</h2>
                        <hr style={{ border: '1.5px solid orange' }} />
                    </div>
                    <p className="aboutme">
                    Javascript를 통해 Nodejs와 React를 개발하는 신입 개발자입니다. 
                    웹 개발은 Java를 활용한 Spring Framework로 시작하였지만 Frontend를 공부하기 위해 React를 접하게 되었고 
                    나아가 Nodejs를 접하게 되었습니다. 이러한 과정을 통해 Javascript를 사용하면 Back, Front 심지어 
                    MongoDB 같은 DB도 다룰 수 있다는 편리함과 확장성이 있다는 것에 재미를 느끼며 학습하고 있습니다.
                    </p>
                </div>
                <div style={{ marginTop: '40px' }}>
                    <div style={{width:'100px'}}>
                        <h2>Skills</h2>
                        <hr style={{ border: '1.5px solid red' }} />
                    </div>
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
                <PortfolioPage />
            </div>
        </div>
    )
}

export default LandingPage
