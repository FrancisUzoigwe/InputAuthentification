import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
   <Container>
    <Main>
        <Logo to='/'>Francis .K. Uzoigwe</Logo>
        <NavHolder>
            <Navs to='input'>Input</Navs>
            <Navs to='display'>Display</Navs>
        </NavHolder>
    </Main>
   </Container>
    </div>
  )
}

export default Header

const Logo = styled(Link)`
font-weight: 500;
font-size: 25px;
text-decoration: none;
color: white;
`;

const Navs = styled(Link)`
font-weight: 600;
color: white;
text-decoration: none;
display: flex;
`;

const NavHolder = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 70px;
width: 12%;
`;

const Main = styled.div`
display: flex;
align-items: center;
width: 95%;
height: 60px;
`;

const Container = styled.div`
width: 100%;
height: 60px;
background-color: black;
color: white;
display: flex;
justify-content: center;
align-items: center;
`;