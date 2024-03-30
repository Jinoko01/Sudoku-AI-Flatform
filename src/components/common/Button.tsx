import React from "react";
import styled from "styled-components";

const ButtonDiv = styled.div`
  width: 100%;
  margin: 10px;
  padding: 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    #84fab0 0%,
    #8fd3f4 51%,
    #84fab0 100%
  );
`;

const Button: React.ElementType = (props): JSX.Element => {
  return <ButtonDiv {...props} />;
};

export default Button;
