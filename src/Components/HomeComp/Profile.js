import React from "react";
import mainImg from "../../img/main.jpg";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
`;

const ProfileWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const ProfileWrapperBig = styled(ProfileWrapper)`
  width: 960px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  opacity: 0.9;
  height: 230px;
`;

const ImgPc = styled(Img)`
  margin-right: 15px;
`;

const ImgBigPc = styled(Img)`
  margin-right: 15px;
  width: 40%;
  height: 300px;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
  height: 220px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 20px;
`;

const ProfileBoxPc = styled(ProfileBox)`
  height: 230px;
  margin: 0;
`;

const TextBox = styled.div`
  margin: auto 0;
  width: 100%;
`;

const Intro1 = styled.p`
  font-size: 17px;
  margin-bottom: 40px;
  font-weight: 600;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

const Intro1Tablet = styled(Intro1)`
  width: 70%;
`;

const Intro2 = styled.p`
  margin-bottom: 40px;
  width: 80%;
  font-size: 13px;
  margin: 0 auto;
`;

const Intro2Tablet = styled(Intro2)`
  width: 70%;
`;

function Profile({ maxWidth }) {
  console.log(maxWidth);
  return (
    <>
      {maxWidth === "mobile" && (
        <Wrapper>
          <h2>Profile</h2>
          <Img src={mainImg} alt="주인장 사진" />
          <ProfileBox>
            <TextBox>
              <Intro1>
                안녕하세요.
                <br />
                신입 프론트엔드 개발자
                <br />
                김정현입니다.
              </Intro1>
              <Intro2>느려도 포기하지 않고 꾸준히 나아가는 중입니다!</Intro2>
            </TextBox>
          </ProfileBox>
        </Wrapper>
      )}
      {maxWidth === "tablet" && (
        <Wrapper>
          <h2>Profile</h2>
          <Img src={mainImg} alt="주인장 사진" style={{ height: 350 }} />
          <ProfileBox>
            <TextBox>
              <Intro1Tablet>
                안녕하세요.
                <br />
                신입 프론트엔드 개발자
                <br />
                김정현입니다.
              </Intro1Tablet>
              <Intro2Tablet>
                느려도 포기하지 않고 꾸준히 나아가는 중입니다!
              </Intro2Tablet>
            </TextBox>
          </ProfileBox>
        </Wrapper>
      )}
      {maxWidth === "pc" && (
        <Wrapper>
          <h2>Profile</h2>
          <ProfileWrapper>
            <ImgPc src={mainImg} alt="주인장 사진" />
            <ProfileBoxPc>
              <TextBox>
                <Intro1>
                  안녕하세요.
                  <br />
                  신입 프론트엔드 개발자
                  <br />
                  김정현입니다.
                </Intro1>
                <Intro2>느려도 포기하지 않고 꾸준히 나아가는 중입니다!</Intro2>
              </TextBox>
            </ProfileBoxPc>
          </ProfileWrapper>
        </Wrapper>
      )}
      {maxWidth === "bigPc" && (
        <Wrapper>
          <h2>Profile</h2>
          <ProfileWrapperBig>
            <ImgBigPc src={mainImg} alt="주인장 사진" />
            <ProfileBoxPc style={{ height: 300 }}>
              <TextBox>
                <Intro1>
                  안녕하세요.
                  <br />
                  신입 프론트엔드 개발자
                  <br />
                  김정현입니다.
                </Intro1>
                <Intro2>느려도 포기하지 않고 꾸준히 나아가는 중입니다!</Intro2>
              </TextBox>
            </ProfileBoxPc>
          </ProfileWrapperBig>
        </Wrapper>
      )}
    </>
  );
}
export default React.memo(Profile);
