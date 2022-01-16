import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Stacks = () => {
    return (
        <WrabbedStack>
            <h1
                style={{
                    display: "inline",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
            >
                Stacks
            </h1>
            <div>
                <Circle />
                <StacksContainer>
                    <StackImg src="./img/HTML_CSS.png" />
                    <StackImg src="./img/JS.png" />
                    <StackImg src="./img/Node_js.png" />
                    <StackImg src="./img/GitLab.png" />
                </StacksContainer>
            </div>
        </WrabbedStack>
    );
};
const WrabbedStack = styled.div`
    text-align: right;
    margin: 300px 50px 0 0;
`;
const Circle = styled.div`
    position: absolute;
    width: 700px;
    height: 700px;
    right: -180px;
    top: 1550px;
    border-radius: 50%;
    background-color: rgb(204, 232, 241);
    z-index: -100;
`;
const StacksContainer = styled.div`
    width: 40%;
    height: 200px;
    padding: 50px 70px;
    border: 3px solid black;
`;

const StackImg = styled.img`
    height: 100px;
`;
export default Stacks;
