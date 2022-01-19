import React from "react";
import styled from "styled-components";
import Sidebar from "../Components/Sidebar";
import { blogListAtom } from "../recoil";
import { useRecoilValue } from "recoil";

const Wrapper = styled.div`
  display: flex;
`;

function Blog() {
  const blogList = useRecoilValue(blogListAtom);

  return (
    <Wrapper>
      <Sidebar blogList={blogList} />
    </Wrapper>
  );
}

export default React.memo(Blog);
