import styled from "styled-components";
import Profile from "../Components/HomeComp/Profile";
import Skills from "../Components/HomeComp/Skills";
import Contact from "../Components/HomeComp/Contact";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 150px 0;
  width: 100%;
  margin-bottom: 20px;
  position: relative;
`;

const Footer = styled.footer`
  width: 100%;
  height: 90px;
  bottom: 0;
  left: 0;
  position: absolute;
  margin-top: 50px;
  border-top: 1px solid ${(props) => props.theme.accentColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  font-size: 12px;
`;

export default function Home() {
  return (
    <>
      <Wrapper>
        <Profile />
        <Skills />
        <Contact />
        <Footer>
          <FooterText>
            해당 웹사이트는 개인 공부 및 포트폴리오의 목적으로 만들어졌습니다.
          </FooterText>
        </Footer>
      </Wrapper>
    </>
  );
}
