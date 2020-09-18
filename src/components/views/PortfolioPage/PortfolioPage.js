import React from 'react'
import { List } from 'antd';
// import SMLI from '../../../commons/images/Shoppingapp/LandingPage.png';
// import SCBLI from '../../../commons/images/SCBooking/LandingPage.png';
// import CJMI from '../../../commons/images/CheckJum/main.jpg';
// import PSLI from '../../../commons/images/Portfoliosite/LandingPage.png';
import './PortfolioPage.css';

function PortfolioPage() {
    const listData = [];

    listData.push({
        href: 'https://github.com/jeonjaekyun/portfolio-react-app',
        title: `Portfolio Site - github`,
        description:
            'React AntDesign Netlify',
        content:
            `Netlify를 통해 호스팅한 개인 포트폴리오 사이트입니다.`,
        id:'portfolioimg',
    });

    listData.push({
        href: 'https://github.com/jeonjaekyun/shoppingmall-app',
        title: `Shopping Mall App - github`,
        description:
            'Javascript Nodejs Express React Redux MongoDB Antdesign',
        content:
            `Backend는 Nodejs로 Frontend는 React를 활용하여 만든 프로젝트입니다.
            web용 Shopping Mall을 만들었습니다. 회원가입/로그인, 상품 등록,
            장바구니, 상품 상세정보 등의 기능이 있습니다.`,
        id:'shopmallimg',
    });
    
    listData.push({
        href: 'https://github.com/jeonjaekyun/SCBooking',
        title: `SCBooking - github`,
        description:
            'JAVA JSP SpringFramework MySQL MyBatis ApachTomcat',
        content:
            `Spring Framework를 활용하여 만든 스터디 카페 예약사이트입니다.
            기본적인 회원가입/로그인, 스터디룸 예약, Q&A, 마이페이지(개인정보, 예약내역, 내가 작성한 Q&A)
            등의 기능이 있습니다.`,
        id:'scbookingimg',
    });

    listData.push({
        href: 'https://github.com/jeonjaekyun/CheckJum',
        title: `CheckJum - github`,
        description:
            'Android Java PHP MySQL OpenAPI ApachTomcat',
        content:
            `알라딘 Open API를 활용하여 만든 베스트셀러 제공 및 공공도서관 정보 제공 Android App입니다.
            베스트셀러 제공, 도서 상제 정보 페이지, 사용자 위치 기반 공공도서관 정보제공, 사용자의 
            관심도서/ 한줄평/ 개인별점 등록 및 수정 등의 기능이 있습니다.
            `,
        id:'checkjumimg',
    });

    return (
        <div style={{ width: '100%', margin: '0' }}>
            {/* <div style={{ width: '85%', margin: '1rem auto' }}> */}
            <div style={{ marginTop: '40px' }}>
                <div style={{ width: '100px' }}>
                    <h2>Portfolio</h2>
                    <hr style={{ border: '1.5px solid lightgreen' }} />
                </div>
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            extra={
                                <div id={item.id}>
                                </div>
                            }
                            style={{fontSize:'20px'}}
                        >
                            <List.Item.Meta
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />,
            </div>
        </div>
    )
}

export default PortfolioPage
