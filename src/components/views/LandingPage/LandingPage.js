import React from 'react';
import {Carousel} from 'antd';
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
                    <div className="home" onClick={onHomeHandler}>
                        <span>Backend 개발자를 희망하는 신입 개발자 입니다.</span>
                    </div>
                    <div className="profile" onClick={onProfileHandler}>
                        <span>Profile</span>
                    </div>
                    <div className="portfolio" onClick={onPortfolioHandler}>
                        <span>Portfolio</span>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default LandingPage
