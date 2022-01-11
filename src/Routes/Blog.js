import styled from "styled-components";
import MdConverter from "../Components/MdConverter";
import Sidebar from "../Components/Sidebar";

const Wrapper = styled.div`
  display: flex;
`;

const ContentsBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
`;

export default function Blog() {
  return (
    <Wrapper>
      <Sidebar />
      <ContentsBox>
        <MdConverter />
      </ContentsBox>
    </Wrapper>
  );
}
