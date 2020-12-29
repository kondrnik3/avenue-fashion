import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import styled from "styled-components";
import headerIntro from "../../assets/img/header-intro01.jpg";

const Intro = styled.div`
  padding-top: 35px;
  padding-bottom: 98px;
  background-image: url(${headerIntro});
  background-repeat: repeat;
  min-height: 450px;
  margin-bottom:65px;
  

    `;
const Wrapper = styled.div`
   padding-top: 35px;
    padding-bottom: 50px;
`


let Header = () => {
    return (
        <header className="header">
            <HeaderTop/>
            <Wrapper>
                <div className="wrapper">
                    <HeaderBottom/>
                </div>
            </Wrapper>
            <Intro>
                <div className="intro_title">
                    <span>The  Brand</span>
                    <div>Company slogan goes here</div>
                </div>
            </Intro>
        </header>
    );
}

export default Header