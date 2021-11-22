import React from "react";
import styled from "styled-components";
import Description from "./components/Description";
import Filter from "./components/Filter";
import Header from "./components/Header";
import FlexRowBox from "./components/Layout/FlexRowBox";
import Request from "./components/Request";
import RequestList from "./components/RequestList";
import Select from "./components/Select";

import useRequests from "./hooks/useRequests";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

function App() {
  const { requests } = useRequests();

  return (
    <Wrapper>
      <Header>
        <FlexRowBox style={{ gap: "10px" }}>
          <img alt="logo" src="/images/logo.png" />
        </FlexRowBox>
        <FlexRowBox style={{ gap: "30px", alignItems: "center" }}>
          <FlexRowBox style={{ gap: "8px", alignItems: "center" }}>
            <img alt="icon-building" src="/images/icon-building.png" />
            <div>A 가공 업체</div>
          </FlexRowBox>
          <div>|</div>
          <a href="/">로그아웃</a>
        </FlexRowBox>
      </Header>
      <Description>
        <h1>들어온 요청</h1>
        <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
      </Description>
      <Filter>
        <FlexRowBox style={{ gap: "8px" }}>
          <Select
            name="가공방식"
            options={[
              { value: "", text: "가공방식" },
              { value: "밀링", text: "밀링" },
              { value: "선반", text: "선반" },
            ]}
          />
          <Select
            name="재료"
            options={[
              { value: "", text: "재료" },
              { value: "알루미늄", text: "알루미늄" },
              { value: "탄소강", text: "탄소강" },
              { value: "구리", text: "구리" },
              { value: "합금강", text: "합금강" },
              { value: "강철", text: "강철" },
            ]}
          />
        </FlexRowBox>
        <div>
          <button>toggle</button>
          <span>상담 중인 요청만 보기</span>
        </div>
      </Filter>
      <RequestList>
        {requests?.map((request) => (
          <Request key={request.id} {...request} />
        ))}
      </RequestList>
    </Wrapper>
  );
}

export default App;
