import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

const Stacks = () => {
    const [ScrollY, setScrollY] = useState(0); // 스크롤값을 저장하기 위한 상태
    const [start, setStart] = useState(false);
    const handleFollow = () => {
        setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
    };

    useEffect(() => {
        if (ScrollY > 1400) {
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
    //------------스크롤 이벤트------------
    const [currentTab, setCurrentTab] = useState(0);

    const menuArr = [
        { name: "Front", content: ["HTML", "CSS", "JS", "react"] },
        { name: "Back", content: ["Node_js"] },
        { name: "Git", content: ["gitLab", "git"] },
        { name: "Design", content: ["ps", "ai"] },
    ];

    const selectMenuHandler = (index) => {
        setCurrentTab(index);
    };
    //------------Tab메뉴 만들기------------
    return (
        <div className="right_content">
            <h1 className="right_H1">Skills</h1>
            <div>
                <Rotate top right>
                    <div className="right_circle" />
                </Rotate>
                {start ? (
                    <Fade>
                        <StacksContainer>
                            <TabMenu>
                                {menuArr.map((ele, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={
                                                currentTab === index
                                                    ? "submenu focused"
                                                    : "submenu"
                                            }
                                            onClick={() =>
                                                selectMenuHandler(index)
                                            }
                                        >
                                            {ele.name}
                                        </li>
                                    );
                                })}
                            </TabMenu>
                            {menuArr[currentTab].content.map((ele) => {
                                return (
                                    <>
                                        <StackImg src={`./img/${ele}.png`} />
                                        <br />
                                    </>
                                );
                            })}
                        </StacksContainer>
                    </Fade>
                ) : null}
            </div>
        </div>
    );
};

const StacksContainer = styled.div`
    text-align: center;
    display: inline-block;
    margin: 15vh 60px 0 0;
    width: 50%;
    height: 400px;
    padding: 50px 70px;
    // border: 3px solid black;
`;
const TabMenu = styled.ul`
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    list-style: none;

    .submenu {
        width: 100% auto;
        padding: 15px 15px;
        margin-left: 5px;
        cursor: pointer;
        background-color: rgba(146, 199, 216, 0.5);
    }
`;
const StackImg = styled.img`
    height: 100px;
    margin: 5px 20px;
`;
export default Stacks;
