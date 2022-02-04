import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { blogListAtom } from "../recoil";
import { useRecoilValue } from "recoil";
import { Link, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const SearchForm = styled(motion.form)`
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.accentColor};
  padding: 5px 5px;
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
`;

const IconBox = styled(motion.div)`
  cursor: pointer;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled(FaSearch)`
  color: ${(props) => props.theme.textColor};
`;

const SearchInput = styled.input`
  border: none;
  margin-left: 5px;
  width: ${(props) => props.width};
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  &:focus {
    outline: none;
  }
`;

const SearchList = styled.ul`
  position: fixed;
  width: ${(props) => props.width};
  top: 30px;
  background-color: white;
  border: solid 1px gray;
  list-style: none;
  border-color: ${(props) => props.theme.accentColor};
  background-color: ${(props) => props.theme.bgColor};
`;

const SearchItem = styled.li`
  padding: 0 5px;
  width: 186px;
  &:hover {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

const SearchItemMobile = styled(SearchItem)`
  width: 90px;
`;

const SearchLink = styled(Link)`
  width: 100px;
`;

const formVariants = {
  initial: {
    width: 0,
  },
  visible: {
    width: 187,
    transition: { type: "tween" },
  },
  leaving: {
    width: 0,
    opacity: 0,
    transition: { duration: 0.1, type: "tween" },
  },
};

const formVariantsMobile = {
  initial: {
    width: 0,
  },
  visible: {
    width: 100,
    transition: { type: "tween" },
  },
  leaving: {
    width: 0,
    opacity: 0,
    transition: { duration: 0.1, type: "tween" },
  },
};

export default function Search() {
  const [filterList, setfilterList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const inputFocus = useRef();
  const listFocus = useRef();
  const history = useHistory();
  const listKeys = Object.keys(useRecoilValue(blogListAtom));

  const onChange = (e) => {
    setSearchValue(e.target.value);
    const text = e.target.value;
    if (text === "") setfilterList([]);
    else {
      const regex = new RegExp(text, "gi");
      const filterArr = listKeys.filter((item) => item.match(regex));
      setfilterList(filterArr);
    }
  };
  const searchBoxToggle = () => {
    setSearchOpen((prev) => !prev);
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      if (filterList[0]) {
        history.push(`/blog/${filterList[0]}`);
        setfilterList([]);
        setSearchValue("");
      }
    }
  };
  const outFocus = (e) => {
    // console.log("blur : ", e);
    // if (listFocus.current) {
    //   console.log("list Click");
    // } else {
    setfilterList(() => []);
    setSearchValue(() => "");
    setSearchOpen(() => false);
  };
  const resetfilter = (e) => {
    // console.log("search : ", e);
    setfilterList(() => []);
    setSearchValue(() => "");
  };

  useEffect(() => {
    if (searchOpen === true) inputFocus.current.focus();
    else outFocus();
  }, [searchOpen]);

  const isMobile = useMediaQuery({
    query: "(max-width:480px)",
  });

  return (
    <>
      <AnimatePresence>
        {searchOpen &&
          (isMobile ? (
            <>
              <SearchForm
                width={"100px"}
                variants={formVariantsMobile}
                initial="initial"
                animate="visible"
                exit="leaving"
              >
                <IconBox layoutId="icon">
                  <SearchIcon onClick={searchBoxToggle} />
                </IconBox>
                <SearchInput
                  width={"79px"}
                  value={searchValue}
                  onChange={onChange}
                  onKeyPress={onEnter}
                  onBlur={outFocus}
                  ref={inputFocus}
                  type="text"
                />
              </SearchForm>
              {filterList.length > 0 ? (
                <SearchList width={"100px"}>
                  {filterList.map((item) => (
                    <SearchLink
                      to={{
                        pathname: `/blog/${item}`,
                        state: { blogtitle: item },
                      }}
                      onClick={resetfilter}
                    >
                      <SearchItemMobile key={item}>{item}</SearchItemMobile>
                    </SearchLink>
                  ))}
                </SearchList>
              ) : null}
            </>
          ) : (
            <>
              <SearchForm
                width={"198px"}
                variants={formVariants}
                initial="initial"
                animate="visible"
                exit="leaving"
              >
                <IconBox layoutId="icon">
                  <SearchIcon onClick={searchBoxToggle} />
                </IconBox>
                <SearchInput
                  width={"150px"}
                  value={searchValue}
                  onChange={onChange}
                  onKeyPress={onEnter}
                  onBlur={outFocus}
                  ref={inputFocus}
                  type="text"
                />
              </SearchForm>
              {filterList.length > 0 ? (
                <SearchList width={"196px"}>
                  {filterList.map((item) => (
                    <SearchLink
                      to={{
                        pathname: `/blog/${item}`,
                        state: { blogtitle: item },
                      }}
                      onClick={resetfilter}
                    >
                      <SearchItem key={item.id}>{item}</SearchItem>
                    </SearchLink>
                  ))}
                </SearchList>
              ) : null}
            </>
          ))}
      </AnimatePresence>
      {searchOpen ? null : (
        <IconBox layoutId="icon">
          <SearchIcon onClick={searchBoxToggle} />
        </IconBox>
      )}
    </>
  );
}
