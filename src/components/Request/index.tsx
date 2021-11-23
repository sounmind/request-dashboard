import React from "react";
import styled from "styled-components";
import { IProductionRequest } from "../../types";
import Button from "../Button";
import FlexColumnBox from "../Layout/FlexColumnBox";
import FlexRowBox from "../Layout/FlexRowBox";

const Wrapper = styled(FlexColumnBox)`
  min-width: 320px;
  max-width: 366px;
  min-height: 344px;
  max-height: 356px;
  padding: 24px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;

  @media only screen and (max-width: 375px) {
    padding: 20px 16px 16px 16px;
    justify-content: space-between;
    width: 330px;
  }
`;

const Status = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 24px;
  border-radius: 12px;
  padding: 2px 8px;
  color: #ffa000;
  font-size: 12px;
  border: 1px solid #ffa000;
  background-color: white;
`;

const Request: React.FC<IProductionRequest> = ({
  id,
  title,
  client,
  due,
  count,
  amount,
  method,
  material,
  status,
}) => {
  const contents = {
    "도면 개수": count,
    "총 수량": amount,
    "가공 방식": method.join(", "),
    재료: material.join(", "),
  };

  return (
    <Wrapper>
      <FlexColumnBox style={{ gap: "4px" }}>
        <FlexRowBox style={{ justifyContent: "space-between" }}>
          <h2 style={{ fontSize: "16px" }}>{title}</h2>
          {status === "상담중" && <Status>{status}</Status>}
        </FlexRowBox>
        <p style={{ fontSize: "14px", height: "20px", lineHeight: "20px" }}>
          {client}
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "#939FA5",
            margin: "20px 0 10px 0",
          }}>
          {due}까지 납기
        </p>
      </FlexColumnBox>
      <hr style={{ backgroundColor: "#E5E5E5" }} />
      <FlexColumnBox style={{ gap: "8px", margin: "32px 0" }}>
        {Object.entries(contents).map(([key, value]) => (
          <FlexRowBox key={key} style={{ gap: "32px" }}>
            <span style={{ width: "70px" }}>{key}</span>
            <span style={{ fontWeight: 700 }}>{value}</span>
          </FlexRowBox>
        ))}
      </FlexColumnBox>
      <FlexRowBox style={{ gap: "8px" }}>
        <Button blueBackground>요청 내역 보기</Button>
        <Button>채팅하기</Button>
      </FlexRowBox>
    </Wrapper>
  );
};

export default Request;
