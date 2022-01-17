import mainImg from "../../img/main.jpg";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Img = styled.img`
  width: 65%;
  height: 400px;
  border-radius: 10px;
  opacity: 0.9;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 65%;
  height: 300px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 20px;
`;

const TextBox = styled.div`
  margin: auto 0;
`;

const Intro = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
`;

export default function Progile() {
  return (
    <Wrapper>
      <h2>Profile</h2>
      <Img src={mainImg} alt="주인장 사진" />
      <ProfileBox>
        <TextBox>
          <Intro>
            안녕하세요.
            <br />
            신입 프론트엔드 개발자
            <br />
            김정현입니다.
          </Intro>
          <p>느려도 포기하지 않고 꾸준히 나아가는 중입니다!</p>
        </TextBox>
      </ProfileBox>
    </Wrapper>
  );
}
