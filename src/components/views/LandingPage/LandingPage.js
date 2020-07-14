import React from 'react';
import {Carousel, Row, Col} from 'antd';
import './LandingPage.css'

function LandingPage(props) {

    const onHomeHandler = () => {
        props.history.push('/');
    }

    const onProfileHandler = () => {
        props.history.push('/profile');
    }

    const onPortfolioHandler = () => {
        props.history.push('/portfolio');
    }

    return (
        <div style={{ width: '100%', margin: '0' }}>
            <div style={{ width: '85%', margin: '1rem auto' }}>
                <Carousel autoplay>
                    <div id="home" onClick={onHomeHandler}>
                        <span>Backend 개발자를 희망하는 신입 개발자 입니다.</span>
                    </div>
                    <div id="profile" onClick={onProfileHandler}>
                        <span>Profile</span>
                    </div>
                    <div id="portfolio" onClick={onPortfolioHandler}>
                        <span>Portfolio</span>
                    </div>
                </Carousel>
                <div style={{marginTop:'40px'}}>
                    <span className="title">사용가능 언어 및 기술</span><br/><br/>
                    <Row gutter={[16,16]}>
                        <Col span={4}>
                            <div className="itskillimg" id="javascript"/>
                        </Col>
                        <Col span={4}>
                            <div className="itskillimg" id="html"/>
                        </Col>
                        <Col span={4}>
                            <div className="itskillimg" id="css"/>
                        </Col>
                        <Col span={4}>
                            <div className="itskillimg" id="java"/>
                        </Col>
                        <Col span={4}>
                            <div className="itskillimg" id="mysql"/>
                        </Col>
                        <Col span={4}>
                            <div className="itskillimg" id="mongodb"/>
                        </Col>
                    </Row>
                    <Row gutter={[16,16]}>
                        <Col span={4}>
                            <div className="itskillimg" id="node"/>
                        </Col>
                        <Col span={4}>
                            <div className="itskillimg" id="express"/>
                        </Col>
                        <Col span={4}>
                            <div className="itskillimg" id="react"/>
                        </Col>
                        <Col span={4}>
                            <div className="itskillimg" id="redux"/>
                        </Col>
                        <Col span={4}>
                            <div className="itskillimg" id="spring"/>
                        </Col>
                        <Col span={4}>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
