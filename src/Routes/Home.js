import styled from "styled-components";
import mainImg from "../img/main.jpg";
import Skills from "../Components/HomeComp/Skills";
import Contact from "../Components/HomeComp/Contact";

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled(ColumnBox)`
  padding: 50px 0;
  height: 100vh;
`;

const ProfileWrapper = styled(ColumnBox)`
  width: 100%;
`;

const Img = styled.img`
  width: 65%;
  height: 400px;
  border-radius: 10px;
  opacity: 0.9;
`;

const ProfileBox = styled(ColumnBox)`
  display: flex;
  justify-content: space-between;
  width: 65%;
  height: 300px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 20px;
`;

const Intro = styled.p`
  font-size: 20px;
`;

export default function Hone() {
  return (
    <Wrapper>
      <ProfileWrapper>
        <h2>Profile</h2>
        <Img src={mainImg} alt="주인장 사진" />
        <ProfileBox>
          <Intro>
            안녕하세요
            <br />
            프론트엔드 개발자를 꿈꾸는
            <br />
            김정현입니다.
          </Intro>
          <div>
            <p></p>
          </div>
        </ProfileBox>
        <Skills />
        <Contact />
      </ProfileWrapper>
    </Wrapper>
  );
}
