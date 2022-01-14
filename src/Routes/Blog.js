import styled from "styled-components";
import { useEffect } from "react";
import MdConverter from "../Components/MdConverter";
import Sidebar from "../Components/Sidebar";
import { blogListAtom } from "../recoil";
import { useRecoilState } from "recoil";

const Wrapper = styled.div`
  display: flex;
`;

const ContentsBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  width: 100%;
`;

export default function Blog() {
  const [blogList, setBlogList] = useRecoilState(blogListAtom);

  useEffect(() => {
    const list = function importAll() {
      const result = require.context(`../MDs`);
      let files = {};
      result.keys().map((item, index) => {
        files[item.slice(2, -3)] = result(item);
      });
      return files;
    };
    setBlogList(list);
  }, []);

  return (
    <Wrapper>
      {blogList ? (
        <>
          <Sidebar blogList={blogList} />
          <ContentsBox>
            <MdConverter />
          </ContentsBox>
        </>
      ) : null}
    </Wrapper>
  );
}
