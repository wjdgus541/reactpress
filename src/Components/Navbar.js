import { Link, Switch } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";

const Navbox = styled.div`
  min-height: 50px;
  border-bottom: #bdc3c7 solid 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

const Home = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Blog = styled.h2`
  font-size: 15px;
  font-weight: 400;
  margin-left: 20px;
`;

export default function Navbar() {
  return (
    <Navbox>
      <Link to="/">
        <Home>HOME</Home>
      </Link>
      <Wrapper>
        <Search />
        <Link to="/blog">
          <Blog>Blog</Blog>
        </Link>
      </Wrapper>
    </Navbox>
  );
}
