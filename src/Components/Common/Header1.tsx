import React from 'react'
import styled from 'styled-components'
import ButtonProps from '../../reUse/ButtonProps'
import { NavLink } from 'react-router-dom'

const Header1 = () => {
  return (
    <div>
      <Container>
        <Main>
            <Logo to='/'>Francis.K.Uzoigwe</Logo>
            <ButHold>
                <ButtonProps text='Signup' col='white' bcol='orange' hcol='white' color='black' to='/auth/signin'/>
                <ButtonProps text='Signin' col='white' bcol='orange' hcol='white' color='red' to='/auth/signup'/>
            </ButHold>
        </Main>
      </Container>
    </div>
  )
}

export default Header1

const ButHold = styled.div`
display: flex;
width: 17%;
align-items: center;
justify-content: space-between;
height: 60px;
`;

const Logo = styled(NavLink)`
font-size: 30px;
transition:  all 350ms;
text-decoration: none;
color: white;

:hover{
    color: #696969;
    cursor: pointer;
}
`;

const Main = styled.div`
width: 95%;
color: white;
display: flex;
align-items: center;
justify-content: space-between;
`
    

const Container = styled.div`
width: 100%;
height: 70px;
background: black;
display: flex;
justify-content: center;
align-items: center;
`