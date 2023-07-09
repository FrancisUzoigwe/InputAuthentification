import styled from "styled-components";
import SignProps from "../../reUse/SignProps";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import InputProps from "../../reUse/InputProps";
import { FiMail } from "react-icons/fi";
import { FiKey } from "react-icons/fi";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <Container>
        <Main>
          <LogoHold>
            <Logo>
              <BsFillRocketTakeoffFill size={30} color="white" />
            </Logo>
            <LogoText>Sign Up!</LogoText>
          </LogoHold>
          <SignHold>
            <SignProps icon={<FcGoogle size={20} />} text="Use Google" />
            <SignProps icon={<BsGithub size={20} />} text="Use GitHub" />
          </SignHold>
          <OR>
            <hr style={{ width: "145px" }} />
            OR
            <hr style={{ width: "145px" }} />
          </OR>
          <Holder>
            <InputProps
              place="text@gmail.com"
              icon={<FiMail />}
              icol="blue"
              name="Email:"
              type="text"
              mt="15px"
            />
            <InputProps
              place="Your New Password"
              icon={<FiKey />}
              name="Password:"
              mt="15px"
            />
            <InputProps
              place="Repeat Your New Password"
              icon={<FiKey />}
              name="Reapeat Password:"
              mt="15px"
            />
          </Holder>
          <Button>Sign-In</Button>
          <Txt>
            By registering you agree to our <span>Terms</span> and{" "}
            <span>Privacy</span>
          </Txt>

          <Take to="/auth/signup">Sign-Up</Take>
        </Main>
      </Container>
    </div>
  );
};

export default Signup;

const Take = styled(NavLink)`
  font-size: 14px;
  margin-top: 10px;
  font-weight: bolder;
  color: blue;
  transition: all 350ms;

  :hover {
    cursor: pointer;
  }
`;

const Txt = styled.div`
  font-size: 13px;
  margin-top: 10px;

  span {
    font-weight: bolder;
    text-decoration: underline;
    cursor: pointer;
    transition: all 350ms;
    color: black;
    transition: all 450ms;

    :hover {
      color: #626262;
    }
  }
`;

const Button = styled.button`
  font-family: Nova Oval;
  width: 95%;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: blue;
  color: white;
  margin-top: 10px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: translate(0px, -3px);
  }
`;

const OR = styled.div`
  display: flex;
  position: relative;
  margin-top: 8px;
  font-size: 15px;
  background-color: white;
`;

const Holder = styled.div``;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: #1885d3;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoText = styled.div`
  letter-spacing: 1px;
  font-weight: 900;
  margin-top: 3px;
  font-size: 20px;
`;

const LogoHold = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SignHold = styled.div`
  height: 35px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.div`
  width: 330px;
  height: 430px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;
