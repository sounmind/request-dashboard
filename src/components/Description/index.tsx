import React, { ReactNode } from "react";
import styled from "styled-components";

import FlexColumnBox from "../Layout/FlexColumnBox";

const Wrapper = styled(FlexColumnBox)`
  gap: 5px;
  min-width: 300px;
`;

const Description: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Description;
