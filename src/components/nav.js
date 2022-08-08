import React, { useState } from 'react'
import styled from 'styled-components'




const Nav = () => {

    const [scrolled, setScrolled] = useState(false)



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

                <Burger>
                    <div></div>
                    <div></div>
                </Burger>
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

const Burger = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
cursor:pointer;
div{
    width:25px;
    height:2px;
    background: #fff;
    margin:4px;

}
`;