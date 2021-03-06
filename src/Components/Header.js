import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";
import DarkBtn from "./DarkmodeBtn";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useState } from "react";

const Navbox = styled.div`
  top: 0;
  left: 0;
  min-height: 50px;
  border-bottom: ${(props) => props.theme.accentColor} solid 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: ${(props) => props.theme.bgColor};
`;

const Home = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-left: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Blog = styled.h2`
  font-size: 15px;
  font-weight: 400;
  margin: 0 20px;
  padding-bottom: 4px;
  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.accentColor};
  }
`;

const BlodLine = styled(Blog)`
  border-bottom: 2px solid ${(props) => props.theme.accentColor};
`;

const GithubA = styled.a`
  display: flex;
  align-items: center;
  margin-right: 20px;
  & > span {
    font-size: 15px;
  }
`;

const IconLink = styled(HiOutlineExternalLink)`
  color: gray;
`;

export default function Navbar() {
  const history = useHistory();
  const [isBlog, setIsBlog] = useState(false);
  history.listen((location, action) => {
    if (location.pathname === "/blog") setIsBlog(true);
    else setIsBlog(false);
  });
  return (
    <Navbox>
      <Link to="/">
        <Home>HOME</Home>
      </Link>
      <Wrapper>
        <Search />
        <DarkBtn />
        <Link to="/blog">
          {isBlog ? <BlodLine>Blog</BlodLine> : <Blog>Blog</Blog>}
        </Link>
        <GithubA
          href="https://github.com/wjdgus541/reactpress"
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub</span>
          <IconLink />
        </GithubA>
      </Wrapper>
    </Navbox>
  );
}
