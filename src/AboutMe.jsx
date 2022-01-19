import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

const AboutMe = () => {
    const [ScrollY, setScrollY] = useState(0); // 스크롤값을 저장하기 위한 상태
    const [start, setStart] = useState(false);
    const handleFollow = () => {
        setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
    };

    useEffect(() => {
        console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
        if (ScrollY > 600) {
            setTimeout(() => {
                setStart(true);
            }, 200);
        }
    }, [ScrollY]);

    useEffect(() => {
        const watch = () => {
            window.addEventListener("scroll", handleFollow);
        };
        watch(); // addEventListener 함수를 실행
        return () => {
            window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
        };
    });
    return (
        <div className="left_content">
            <h1 className="left_H1">About Me</h1>
            <WrabbedAboutMe>
                <Rotate top left>
                    <Circle className="left_circle" />
                </Rotate>
                {start ? (
                    <Fade>
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
                                불과했지만, 애플 웹사이트를 보고 난 후부터
                                웹이라는 세계에 완전히 빠져들게 되었고 이를
                                계기로 웹 프론트엔드 개발 공부를 시작하게
                                되었습니다.
                                <br />
                                하고 싶은 것도 많고 욕심도 많아서 밤을 새가며
                                코드를 업데이트하기도 했습니다.
                                <br />
                                어제보다 더 나은 사람이 되기위해 1일 1커밋을
                                실천중입니다.
                                <br />
                                사용자에게 아름다운 경험을 선물하는 웹
                                프론트엔드 개발자가 되고싶습니다.
                                <br />
                            </Contents>
                        </AboutMeMent>
                    </Fade>
                ) : null}
            </WrabbedAboutMe>
        </div>
    );
};

const WrabbedAboutMe = styled.div`
    display: flex;
    height: 410px;
    align-items: center;
`;
const MeImg = styled.img`
    width: 300px;
    margin: 0 0 0 90px;
    border-radius: 0px 100px / 120px;
    // box-shadow: 5px 5px rgb(139, 179, 194);
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
    margin-left: 60px;
`;

const Circle = styled.div`
    top: -400px;
`;
export default AboutMe;
