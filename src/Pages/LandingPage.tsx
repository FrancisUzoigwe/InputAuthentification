import React from "react";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <div>
      <Container>
        <TextHolder>
          <BigText>
            {" "}
            Welcome to Francis Uzoigwe's To-Do Web Application{" "}
          </BigText>
          <SmallText>
            An Interface where you get to write down your schedules as we help
            you get em done
          </SmallText>
        </TextHolder>
      </Container>
    </div>
  );
};

export default LandingPage;

const SmallText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #9d9d9d;
  margin-top: 10px;
`;

const BigText = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

const TextHolder = styled.div`
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
