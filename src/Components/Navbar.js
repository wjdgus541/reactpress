import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";
import DarkBtn from "./DarkmodeBtn";

const Navbox = styled.div`
  top: 0;
  left: 0;
  min-height: 50px;
  border-bottom: #bdc3c7 solid 1px;
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
`;

export default function Navbar() {
  return (
    <Navbox>
      <Link to="/">
        <Home>HOME</Home>
      </Link>
      <Wrapper>
        <Search />
        <DarkBtn />
        <Link to="/blog">
          <Blog>Blog</Blog>
        </Link>
      </Wrapper>
    </Navbox>
  );
}
