import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { iData } from "../Utils/Interfaces";
import { readTask } from "../Utils/APIs";
import moment from "moment";

const DisplayScreen = () => {
  const [state, setState] = useState<iData[]>([]);
  useEffect(() => {
    readTask().then((res: iData[]) => {
      return setState(res);
    });
  });

  return (
    <div>
      <Container>
        <Main>
          {state?.map((props: iData, i: number) => (
            <Holder>
              <Card>
                <Text>
                  {props.task}: {moment(props.time).fromNow()}
                </Text>
                <SecondPart>
                  <ID>{props.id?.slice(0,5)}</ID>
                  <Hold>
                    <Reaction>{props.reaction}</Reaction>
                    <Priority>{props.priority}</Priority>
                    <Avatar src={props.avatar}/>
                  </Hold>
                </SecondPart>
              </Card>
              <LineHold>
                <Line></Line>
                <Dot></Dot>
              </LineHold>
            </Holder>
          ))}
        </Main>
      </Container>
    </div>
  );
};

export default DisplayScreen;

const Text = styled.div`
  width: 95%;
  height: 80px;
  margin-top: 5px;
`;

const ID = styled.div`
  width: 70px;
  height: 30px;
`;

const Reaction = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Priority = styled.div`
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
`;

const Hold = styled.div`
  width: 40%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SecondPart = styled.div`
  width: 95%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.div`
  width: 40%;
  height: 150px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.div`
  width: 10px;
  height: 170px;
  margin-left: 20px;
  position: absolute;
  background-color: green;
  margin-left: 10px;
`;

const Dot = styled.div`
  width: 30px;
  background-color: green;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  margin-top: -10px;
`;

const LineHold = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 70px;
  /* flex-direction: column; */
  position: relative;
`;

const Holder = styled.div`
  display: flex;
  margin-top: 15px;
`;

const Main = styled.div`
  width: 70%;
  height: auto;
`;

const Container = styled.div`
  width: 100%;
  /* height: calc(auto - 60px); */
  height: auto;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
