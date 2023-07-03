import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
        <Holder>
          <But to="input">Get Started</But>
          <But to="display">View Tasks</But>
        </Holder>
      </Container>
    </div>
  );
};

export default LandingPage;

const Holder = styled.div`
width: 22%;
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const But = styled(NavLink)`
  padding: 15px 25px;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  background-color: darkorange;
  border: none;
  font-weight: 500;
  font-family: Nova Oval;
  margin-top: 40px;
  transition: all 400ms;

  :hover {
    cursor: pointer;
    transform: translate(0px, -6px);
  }
`;

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
  flex-direction: column;
  align-items: center;
`;
