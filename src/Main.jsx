<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Fade from "react-reveal/Fade";

const Main = () => {
    const [ment, setMent] = useState("열정적인");

    const mentList = ["성장하는", "도전적인", "섬세한", "욕심쟁이", "열정적인"];
    let n = 0;
    useEffect(() => {
        setInterval(() => {
            setMent(mentList[n]);
            if (n === mentList.length - 1) {
                n = 0;
            } else {
                n += 1;
            }
        }, 3000);
    }, []);
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
                    <Mainment>
                        <ChangeMent>{ment}</ChangeMent> 개발자
                    </Mainment>
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

const MentFade = keyframes`
    0% {
        opacity: 0;
    }
    20%{
        opacity: 1;
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;
const ChangeMent = styled.span`
    animation: ${MentFade} 3s linear 0s infinite;
`;
const Mainment = styled.div`
    display: inline-block;
    font-size: 90px;
    margin: 10px;
    color: white;
    text-shadow: 0px 0px 10px rgba(25, 107, 134, 0.8);
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
