import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Main = () => {
    return (
        <MainWrab>
            <Fade>
                <Cloud1 src="/img/cloud1.png"></Cloud1>
                <Cloud2 src="/img/cloud2.png"></Cloud2>
            </Fade>
            <Fade bottom cascade>
                <div style={{ paddingTop: "28vh" }}>
                    <Mainment>안녕하세요</Mainment>
                    <br />
                    <Mainment>프론트엔드 개발자</Mainment>
                    <br />
                    <Mainment>김예리입니다.</Mainment>
                </div>
            </Fade>
        </MainWrab>
    );
};

const MainWrab = styled.div`
    position: relative;
    top: 0;
    width: 100%;
    height: 110vh;
    text-align: center;
    background: linear-gradient(to top, white 5%, lightblue 20%);
`;

const Mainment = styled.div`
    display: inline-block;
    font-size: 90px;
    margin: 10px;
`;
const Cloud1 = styled.img`
    position: absolute;
    right: 15%;
    top: 430px;
    height: 250px;
`;
const Cloud2 = styled.img`
    position: absolute;
    left: 18%;
    top: 250px;
    height: 200px;
`;
export default Main;
