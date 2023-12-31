import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { iData } from "../Utils/Interfaces";
import { readTask } from "../Utils/APIs";
import moment from "moment";
import { MdDangerous } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const DisplayScreen = () => {
  const [state, setState] = useState<iData[]>([]);

  useEffect(() => {
    readTask().then((res: iData[]) => {
      return setState(res);
    });
  }, []);

  return (
    <div>
      <Container>
        <Main>
          {state?.map((props: iData, i: number) => (
            <Holder>
              <Card>
                <Text>
                  {props.task}
                  <Time>{moment(props.time).fromNow()}</Time>
                </Text>
                <SecondPart>
                  <ID>{props.id?.slice(0, 5)}</ID>
                  <Hold>
                    <Reaction>{props.reaction}</Reaction>
                    <Priority>
                      {props.priority === "Urgent" ? (
                        <MdDangerous color="red" size={25}/>
                      ) : props.priority === "Low" ? (
                        <IoIosArrowDown  color="green" size={20}/>
                      ) : props.priority === "High" ? (
                        <FiMenu color="orange" size={20}/>
                      ) : (
                        <IoIosArrowDown color="green" size={20}/>
                      )}
                    </Priority>
                    <Avatar src={props.avatar} />
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

const Time = styled.div`
  color: grey;
  font-size: 12px;
  position: absolute;
  margin-top: 60px;
`;

const Text = styled.div`
  width: 95%;
  height: 80px;
  margin-top: 5px;
  position: relative;
`;

const ID = styled.div`
  width: 70px;
  height: 30px;
  color: blue;
  font-size: 15px;
`;

const Reaction = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  /* margin-top: 10px; */
  /* background: #e6e6e6; */
  display: flex;
  justify-content: center;
  align-items: center;
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
