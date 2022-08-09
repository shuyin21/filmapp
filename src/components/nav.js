import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'




const Nav = () => {

    const [scrolled, setScrolled] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [open, setOpen] = useState(null);


    const clickHandler = () => {
        // if (clicked == 1) {
        //     setClicked(0)
        // } else {
        //     setClicked(1)
        // }
        console.log(clicked);
        setClicked(!clicked)
    }

    return (
        <MainDiv>
            <Left>
                <Logo>LOGO</Logo>
                <Title>Video Production Agency</Title>
            </Left>
            <Right>
                <ContactWrapper>
                    <Contact>
                        <span>Email: info@film.com</span>
                        <span>Phone: +4400454540056</span>
                    </Contact>
                    <CButton>Contact</CButton>
                </ContactWrapper>

                <StyledBurger onClick={() => setOpen(prev => !prev)} open={open}>
                    <div />
                    <div />
                    <div />
                </StyledBurger>
            </Right>

        </MainDiv>
    )
}

export default Nav

const MainDiv = styled.div`
width:100%;
height:10vh;
background-color:#333 ;
display:flex;
align-items:center;
justify-content:space-between;

`;

const Left = styled.div`
width:400px;

height:60%;

display:flex;
align-items:center;
justify-content:center;
`;
const Logo = styled.span`
margin:30px;
color:#fff;
`;
const Title = styled.span`
color:#fff;
border-left:0.1px solid #999;
font-size:.8rem ;
text-transform:uppercase;
padding:2px 10px;

`;

const Right = styled.div`
display:flex;
margin-right:50px;
`;
const ContactWrapper = styled.div`
display:flex;
padding:0 20px;
`;
const Contact = styled.div`
display:flex;
color:#fff;
flex-direction:column;
margin:0 50px;

span{
    font-size:.8rem ;
}
`;
const CButton = styled.div`
display:flex;
width:100px;
justify-content:center;
align-items:center;
font-weight:900 ;
border:0.5px solid white;
cursor:pointer;
color:#fff;
font-family: 'Roboto Condensed', sans-serif;
letter-spacing:2px ;
font-size: 0.8rem;
text-transform:uppercase;
&:hover{
    transition: ease-in 0.3s ;
    background-color:#fff;
    color:#000;
}
`;

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 0;
  background-color: transparent;
  border-radius: 2.7px;
  cursor: pointer;
  height: 30px;
  div {
    width: 27px;
    height: 3px;
    margin: 1.5px;
    transition: all 0.2s linear;
    border-radius: 1.4px;
    background-color: white;
    :first-child {
      ${({ open }) =>
        open !== null && (open ? firstOpenAnimation : firstCloseAnimation)}
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    :nth-child(3) {
      ${({ open }) =>
        open !== null && (open ? seconOpenAnimation : secondCloseAnimation)}
    }
  }
`;

const firstOpenKeyframe = keyframes`
  50% {
    transform: translateY(6px) rotate(0);
  }
  100% {
    transform: translateY(6px) rotate(45deg);
  }
`;

const secondOpenKeyframe = keyframes`
  50% {
    transform: translateY(-6px) rotate(0);
  }
  100% {
    transform: translateY(-6px) rotate(-45deg);
  }
`;

const firstCloseKeyFrame = keyframes`
  50% {
    transform:translateY(0) rotate(-45deg);
  }
  100% {
    transform:translateY(0) rotate(0)  ;
  }
`;
const secondCloseKeyFrame = keyframes`
  50% {
    transform:translateY(0) rotate(-45deg);
  }
  100% {
    transform:translateY(0) rotate(0)  ;
  }
`;

const firstOpenAnimation = css`
  animation: 0.3s linear ${firstOpenKeyframe} forwards;
`;

const seconOpenAnimation = css`
  animation: 0.3s linear ${secondOpenKeyframe} forwards;
`;
const secondCloseAnimation = css`
  animation: 0.3s linear ${secondCloseKeyFrame} forwards;
`;

const firstCloseAnimation = css`
  animation: 0.3s linear ${firstCloseKeyFrame} forwards;
`;