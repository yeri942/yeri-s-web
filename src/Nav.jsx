import React from "react";
import styled from "styled-components";

const Nav = () => {
    return (
        <WrabNav>
            <NavUl>
                <NavLi>
                    <NavATag href="">MAIN</NavATag>
                </NavLi>
                <NavLi>
                    <NavATag href="">ABOUT ME</NavATag>
                </NavLi>
                <NavLi>
                    <NavATag href="">SKILLS</NavATag>
                </NavLi>
                <NavLi>
                    <NavATag href="">PORTFOLIO</NavATag>
                </NavLi>
                <NavLi>
                    <NavATag href="">CONTACT</NavATag>
                </NavLi>
            </NavUl>
        </WrabNav>
    );
};

const WrabNav = styled.nav`
    position: fixed;
    // background: black;
    width: 100%;
    padding: 15px;
    text-align: center;
    z-index: 990;
`;
const NavUl = styled.ul`
    margin: 0;
    padding: 0;
`;
const NavLi = styled.li`
    display: inline-block;

    :not(:first-of-type) {
        margin-left: 55px;
    }
    font-size: 25px;
`;
const NavATag = styled.a`
    text-decoration: none;
    color: white;
`;
export default Nav;
