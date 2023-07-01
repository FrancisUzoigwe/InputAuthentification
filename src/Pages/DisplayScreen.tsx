import React from "react";
import styled from "styled-components";

const DisplayScreen = () => {
  return (
    <div>
      <Container>
        <Main>
          <Holder>
            <Card></Card>
            <LineHold>
              <Line></Line>
              <Dot></Dot>
            </LineHold>
          </Holder>
          <Holder>
            <Card></Card>
            <LineHold>
              <Line></Line>
              <Dot></Dot>
            </LineHold>
          </Holder>
          <Holder>
            <Card></Card>
            <LineHold>
              <Line></Line>
              <Dot></Dot>
            </LineHold>
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default DisplayScreen;

const Card = styled.div`
  width: 45%;
  height: 200px;
  border: 1px solid black;
`;

const Line = styled.div`
width: 15px;
height: 230px;
background-color: green;
margin-left: 20px;
position: absolute;
margin-left: 13px;
`;

const Dot = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: green;
  position: absolute;
  margin-top: -10px;

`;

const LineHold = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 80px;
  /* flex-direction: column; */
  position: relative;
  ;
`;

const Holder = styled.div`
  display: flex;
  margin-top: 15px;
`;

const Main = styled.div`
  width: 70%;
  height: auto;
  background-color: white;

`;

const Container = styled.div`
  width: 100%;
  /* height: calc(auto - 60px); */
  height: 170vh;
  background-color: white;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
