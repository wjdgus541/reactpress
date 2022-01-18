import styled from "styled-components";
import Profile from "../Components/HomeComp/Profile";
import Skills from "../Components/HomeComp/Skills";
import Contact from "../Components/HomeComp/Contact";
import { useMediaQuery } from "react-responsive";

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
  let device = "";
  const isTablet = useMediaQuery({
    query: "(min-width:480px) and (max-width:767px)",
  });
  const isPc = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isBigPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  if (isTablet) device = "tablet";
  else if (isPc) device = "pc";
  else if (isBigPc) device = "bigPc";
  else device = "mobile";

  return (
    <>
      <Wrapper>
        <Profile maxWidth={device} />
        <Skills maxWidth={device} />
        <Contact maxWidth={device} />
        <Footer>
          <FooterText>
            해당 웹사이트는 개인 공부 및 포트폴리오의 목적으로 만들어졌습니다.
          </FooterText>
        </Footer>
      </Wrapper>
    </>
  );
}
