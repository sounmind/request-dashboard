import styled from "styled-components";
import FlexColumnBox from "../Layout/FlexColumnBox";
import FlexRowBox from "../Layout/FlexRowBox";

const Background = styled.div`
  position: absolute;
  display: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.5;
`;

const Wrapper = styled(FlexColumnBox)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  align-items: start;
  height: 100vh;
  width: 340px;
  z-index: 9999;

  padding-top: 50px;
  padding: 10px;

  img {
    height: 20px;
  }
`;

const MobileMenu: React.FC<{ handleClose: () => void }> = ({ handleClose }) => {
  const handleClickOutside = (event: any) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      <Background onClick={handleClickOutside} />
      <Wrapper>
        <img alt="logo" src="/images/logo-mobile.png" />

        <hr />

        <FlexRowBox style={{ gap: "8px", alignItems: "center" }}>
          <img alt="icon-building" src="/images/icon-building-mobile.png" />
          <div>A 가공 업체</div>
        </FlexRowBox>

        <a href="/">로그아웃</a>
      </Wrapper>
    </>
  );
};

export default MobileMenu;
