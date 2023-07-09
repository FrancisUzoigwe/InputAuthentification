import React from 'react'
import styled from 'styled-components'

interface Iinput {
  mt?: string
  place?: string,
  icol?: string,
  name?: string,
  type?: string,
  icon?: any
}
const InputProps: React.FC<Iinput> = ({mt, icol, place, name, type, icon}) => {
  return (
    <div>
     <Container mt={mt!}>
      <Main>
        <Name>{name}</Name>
        <Input placeholder={place} type={type}/>
        <Icon icol={icol!}>{icon}</Icon>
      </Main>
     </Container>
    </div>
  )
}

export default InputProps
const Name = styled.div`
position: absolute;
font-size: 12px;
background-color: white;
margin-top: -17px;
margin-left: 3px;

`;

const Input = styled.input`
width: 300px;
border: none;
outline: none;
  padding-left: 5px;
::placeholder{
  padding-left: 5px;
  padding-top: 5px;
  font-size: 13px;
}
`;

const Icon = styled.div<{icol: string}>`
width: 20px;
height: 20px;
position: absolute;
color: ${({icol}) => icol};
/* background: red; */
margin-top: -17px;
margin-left: 285px;
display: flex;
justify-content: center;
align-items: center;
`;

const Main = styled.div`
position: relative;
width: 310px;
height: 25px;
border: 1px solid grey;
margin-top: 9px;
border-radius: 5px;

`;

const Container = styled.div<{mt: string}>`
width: 310px;
height: 35px;
position: relative;
margin-top: ${({mt}) => mt};
`;