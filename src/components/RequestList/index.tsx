import React, { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
`;

const RequestList: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default RequestList;
