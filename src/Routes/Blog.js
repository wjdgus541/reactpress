import styled from "styled-components";
import { useEffect, useState } from "react";
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
  const [mdList, setMdList] = useState({});

  useEffect(() => {
    const list = function importAll() {
      const result = require.context(`../MDs`);
      let files = {};
      result.keys().map((item, index) => {
        files[item.slice(2, -3)] = result(item);
      });
      return files;
    };
    setMdList(list);
  }, []);

  return (
    <Wrapper>
      <Sidebar mdList={mdList} />
      <ContentsBox>
        <MdConverter />
      </ContentsBox>
    </Wrapper>
  );
}
