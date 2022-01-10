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
        </MainWrab>
    );
};

const MainWrab = styled.div`
    top: 0;
    background-image: url("/img/pinksky.jpg");
    min-width: 100%;
    min-height: 100vh;
    background-size: cover;
    text-align: center;
`;
const Mainment = styled.div`
    color: white;
    font-size: 90px;
`;

export default Main;
