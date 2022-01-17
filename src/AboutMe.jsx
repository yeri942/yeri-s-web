import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

const AboutMe = () => {
    // const [start, setStart] = useState(false);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setStart(true);
    //     }, 1000);
    //     console.log(start);
    // });
    return (
        <BodyOfAboutMe>
            <h1 className="left_H1">About Me</h1>
            <WrabbedAboutMe>
                <Rotate top left>
                    <Circle />
                </Rotate>
                <Fade bottom cascade>
                    <MeImg src="/img/me.png" />
                    <AboutMeMent>
                        <Title>
                            아름다움을 프로그래밍하는 개발자
                            <br />
                        </Title>
                        <Line />
                        <Contents>
                            저는 늘 시각적인 요소에 매력을 느껴왔습니다.
                            <br />
                            그 시작은 그저 사진을 이쁘게 꾸미는 정도에
                            불과했지만, 애플 웹사이트를 보고 난 후부터 웹이라는
                            세계에 완전히 빠져들게 되었고 이를 계기로 웹
                            프론트엔드 개발 공부를 시작하게 되었습니다.
                            <br />
                            하고 싶은 것도 많고 욕심도 많아서 밤을 새가며 코드를
                            업데이트하기도 했습니다.
                            <br />
                            어제보다 더 나은 사람이 되기위해 1일 1커밋을
                            실천중입니다.
                            <br />
                            사용자에게 아름다운 경험을 선물하는 웹 프론트엔드
                            개발자가 되고싶습니다.
                            <br />
                        </Contents>
                    </AboutMeMent>
                </Fade>
            </WrabbedAboutMe>
        </BodyOfAboutMe>
    );
};

const BodyOfAboutMe = styled.div`
    position: relative;
    margin: 200px 0 0 50px;
`;
const WrabbedAboutMe = styled.div`
    display: flex;
    height: 410px;
    align-items: center;
`;
const MeImg = styled.img`
    width: 300px;
    margin: 0 0 0 90px;
`;
const Title = styled.span`
    font-weight: 900;
    font-size: 25px;
`;

const Line = styled.div`
    width: 53%;
    height: 1px;
    background-color: black;
    margin: 20px 0;
`;
const Contents = styled.span`
    margin-top: 10px;
    font-size: 20px;
`;

const AboutMeMent = styled.div`
    width: 800px;
    margin-left: 50px;
`;

const Circle = styled.div`
    position: absolute;
    left: -180px;
    top: -400px;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background-color: rgb(204, 232, 241);
    z-index: -100;
`;
export default AboutMe;
