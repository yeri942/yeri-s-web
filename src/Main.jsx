import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Main = () => {
    return (
        <MainWrab>
            <Fade bottom cascade>
                <div style={{ paddingTop: "28vh" }}>
                    <Mainment>안녕하세요</Mainment>
                    <Mainment>멋쟁이 개발자</Mainment>
                    <Mainment>김예리입니다.</Mainment>
                </div>
            </Fade>
            <Cloud1 src="/img/cloud1.png"></Cloud1>
            <Cloud2 src="/img/cloud2.png"></Cloud2>
        </MainWrab>
    );
};

const MainWrab = styled.div`
    top: 0;
    background-color: lightblue;
    min-width: 100%;
    min-height: 100vh;
    background-size: cover;
    text-align: center;
`;
const Mainment = styled.div`
    color: white;
    font-size: 90px;
`;
const Cloud1 = styled.img`
    position: absolute;
    right: 280px;
    top: 430px;
    height: 200px;
    z-index: 200;
`;
const Cloud2 = styled.img`
    position: absolute;
    left: 280px;
    top: 250px;
    height: 200px;
    z-index: 200;
`;
export default Main;
