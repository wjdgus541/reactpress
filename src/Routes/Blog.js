import styled from "styled-components";
import Sidebar from "../Components/Sidebar";
import { blogListAtom } from "../recoil";
import { useRecoilValue } from "recoil";

const Wrapper = styled.div`
  display: flex;
`;

export default function Blog() {
  const blogList = useRecoilValue(blogListAtom);

  return (
    <Wrapper>
      {blogList ? (
        <>
          <Sidebar blogList={blogList} />
        </>
      ) : null}
    </Wrapper>
  );
}
