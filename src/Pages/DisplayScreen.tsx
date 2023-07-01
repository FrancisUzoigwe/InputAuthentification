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
  width: 40%;
  height: 150px;
  border: 1px solid black;
`;

const Line = styled.div`
width: 10px;
height: 170px;
background-color: green;
margin-left: 20px;
position: absolute;
margin-left: 10px;
`;

const Dot = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: green;
  position: absolute;
  margin-top: -10px;

`;

const LineHold = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 70px;
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
