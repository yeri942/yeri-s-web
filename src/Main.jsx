import React, { useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Main = () => {
    const [ment, setMent] = useState("기본");

    const mentList = ["성장하는", "도전적인", "섬세한"];
    let n = 0;
    const changeMent = () => {
        setInterval(() => {
            n = parseInt(Math.random() * mentList.length);
            setMent(mentList[n]);
        }, 3000);
    };
    changeMent();
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
                    <Mainment>{ment} 개발자</Mainment>
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
