import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface iButton {
  text?: string;
  col?: string;
  bcol?: string;
  hcol?: string;
  color?: string;
  to?: string;
}

const ButtonProps: React.FC<iButton> = ({
  text,
  col,
  bcol,
  hcol,
  color,
  to,
}) => {
  return (
    <div>
      <Button to={to!} col={col!} bcol={bcol!} hcol={hcol!} color={color!}>
        {text}
      </Button>
    </div>
  );
};

export default ButtonProps;
const Button = styled(NavLink)<{
  col: string;
  bcol: string;
  hcol: string;
  color: string;
}>`
  padding: 10px 20px;
  border-radius: 3px;
  border: none;
  color: ${({ col }) => col};
  background-color: ${({ bcol }) => bcol};
  font-family: Nova Oval;
  transition: all 350ms;
  font-weight: bolder;
  text-decoration: none;

  :hover {
    cursor: pointer;
    transform: translate(0px, -4px);
    background-color: ${({ hcol }) => hcol};
    color: ${({ color }) => color};
  }
`;
