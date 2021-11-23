import React, { ReactNode } from "react";
import styled from "styled-components";
import FlexRowBox from "../Layout/FlexRowBox";

const Wrapper = styled.header`
  display: fixed;
  position: absolute;
  width: 100%;
  max-width: 1440px;
  height: 70px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 25px 40px;
  color: white;
  background-color: #1565c0;

  @media only screen and (max-width: 375px) {
    padding: 25px 20px;
  }
`;

const Header: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Wrapper>
      <FlexRowBox style={{ width: "100%", justifyContent: "space-between" }}>
        {children}
      </FlexRowBox>
    </Wrapper>
  );
};

export default Header;
