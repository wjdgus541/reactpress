import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import { FiMail } from "react-icons/fi";

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactBox = styled(ColumnBox)`
  width: 65%;
  height: 250px;
  margin-top: 20px;
  margin-bottom: 50px;
  background-color: ${(props) => props.theme.boxColor};
  border-radius: 20px;
`;

const ContactTitle = styled.h2`
  margin-bottom: 30px;
`;

const CopyMailBtn = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.textColor};
  &:hover {
    cursor: pointer;
    & > FiMail {
    }
  }
`;

const ContactWrapper = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const ContactsWrapper = styled(ColumnBox)``;

const IconsTitle = styled.span`
  margin-bottom: 8px;
  color: ${(props) => props.theme.accentColor};
  font-weight: 600;
`;

const IconMail = styled(FiMail)`
  font-size: 30px;
  margin-bottom: 5px;
  transform-origin: center center;
  color: ${(props) => props.theme.accentColor};
  :hover {
    transform: scale(1.3);
  }
`;

const IconNotion = styled(SiNotion)`
  font-size: 30px;
  :hover {
    transform: scale(1.3);
    color: ${(props) => props.theme.accentColor};
  }
`;

const IconGithub = styled(FaGithubSquare)`
  font-size: 30px;
  :hover {
    transform: scale(1.3);
    color: ${(props) => props.theme.accentColor};
  }
`;

export default function Contact() {
  const copyMail = () => {
    const email = "nnn5425@naver.com";
    try {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.top = 0;
      textarea.style.left = 0;
      textarea.style.position = "fixed";

      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      alert("메일 주소가 클립보드에 복사되었습니다.");
    } catch {
      alert("클립보드 복사에 실패했습니다.");
    }
  };
  return (
    <ContactBox>
      <ContactTitle>Contact</ContactTitle>
      <CopyMailBtn onClick={copyMail}>
        <ContactsWrapper>
          <IconMail />
          <span>nnn5425@naver.com</span>
        </ContactsWrapper>
      </CopyMailBtn>
      <ContactWrapper>
        <ContactsWrapper>
          <IconsTitle>Notion</IconsTitle>
          <a
            href="https://www.notion.so/Pin-s-TIL-5a5a5d8b2a644d92b1d37812026eb21c"
            target="_blank"
            rel="noreferrer"
          >
            <IconNotion />
          </a>
        </ContactsWrapper>
        <ContactsWrapper>
          <IconsTitle>GitHub</IconsTitle>
          <a
            href="https://github.com/wjdgus541"
            target="_blank"
            rel="noreferrer"
          >
            <IconGithub />
          </a>
        </ContactsWrapper>
      </ContactWrapper>
    </ContactBox>
  );
}
