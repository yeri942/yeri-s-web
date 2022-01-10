import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const AboutMe = () => {
    return (
        <div>
            <h1>About Me</h1>
            <Fade bottom cascade>
                <MeImg src="/img/fgfgg.jpg" />
                <AboutMeMent>
                    <span style={{ fontSize: 25 }}>
                        접니다! 귀엽죠?
                        <br />
                    </span>
                    <span style={{ fontSize: 20 }}>
                        저는 어렸을적부터 만들기와 디자인을 좋아했습니다. <br />
                        초등학교때 주전자 닷컴이라는 사이트에서 플래시게임을
                        하다가 문득 직접 만들어보고 싶다는 생각이 들어
                        플래시툴로 작은 미니게임을 만든게 제 개발 인생의
                        시작이였던것같습니다.
                        <br />그 후 성인이 되어 웹개발이 관심이 가 공부를
                        시작했고, 어느새 여기까지 왔네요. 야호!
                    </span>
                </AboutMeMent>
            </Fade>
        </div>
    );
};

const MeImg = styled.img`
    display: inline-block;
`;

const AboutMeMent = styled.div`
    display: inline-block;
    width: 800px;
`;
export default AboutMe;
