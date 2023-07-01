import React from "react";
import styled from "styled-components";

const InputScreen = () => {
  return (
    <div>
      <Container>
        <Main>
          <Holder>
            <Wrapper>
              <Box>
                <Name>Task</Name>
                <InputHolder>
                  <Input placeholder="Add Task" />
                </InputHolder>
              </Box>
              <Box>
                <Name>Avatar</Name>
                <InputHolder>
                  <Input placeholder="Add Avatar" />
                </InputHolder>
              </Box>
              <Box>
                <Name>Priority</Name>
                <InputHolder>
                  <Input placeholder="Add Priority" />
                </InputHolder>
              </Box>
              <Button>Hello</Button>
            </Wrapper>
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default InputScreen;

const Name = styled.div`
  background-color: white;
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  margin-top: -11px;
  margin-left: 10px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 28px;
  font-size: 15px;
  font-weight: 500;
  padding-left: 10px;

  ::placeholder {
    padding-left: 2px;
    font-size: 13px;
    font-weight: 600;
    color: silver;
  }
`;

const InputHolder = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 95%;
  height: 40px;
  border: 1px solid silver;
  position: relative;
  border-radius: 2px;
  margin-top: 12px;
`;

const Button = styled.button`
  width: 95%;
  height: 35px;
  border-radius: 3px;
  border: none;
  color: white;
  font-size: 17px;
  margin-top: 15px;
  background-color: blue;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 450ms;

  :hover {
    transform: translate(0px, -3px);
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  border: 1px solid silver;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Holder = styled.div`
  width: 50%;
  height: auto;
`;

const Main = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 15px;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
