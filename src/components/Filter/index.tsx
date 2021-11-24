import React, { ReactNode } from "react";
import styled from "styled-components";

import FlexRowBox from "../Layout/FlexRowBox";

const Wrapper = styled(FlexRowBox)`
  justify-content: space-between;

  @media only screen and (max-width: 375px) {
    flex-direction: column;
    align-items: start;
  }
`;

const Filter: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Filter;
