import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { blogListAtom } from "../recoil";
import { useRecoilValue } from "recoil";
import { Link, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchForm = styled(motion.form)`
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.accentColor};
  padding: 5px 5px;
  display: flex;
  align-items: center;
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
  width: 150px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  &:focus {
    outline: none;
  }
`;

const SearchList = styled.ul`
  position: fixed;
  width: 196px;
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

export default function Search() {
  const [filterList, setfilterList] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputFocus = useRef();
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
    setfilterList([]);
    setSearchValue("");
    setSearchOpen(false);
  };
  const resetfilter = (e) => {
    // console.log("search : ", e);
    setfilterList([]);
    setSearchValue("");
  };

  useEffect(() => {
    if (searchOpen === true) inputFocus.current.focus();
  }, [searchOpen]);

  return (
    <>
      <AnimatePresence>
        {searchOpen ? (
          <>
            <SearchForm
              variants={formVariants}
              initial="initial"
              animate="visible"
              exit="leaving"
            >
              <IconBox layoutId="icon">
                <SearchIcon onClick={searchBoxToggle} />
              </IconBox>
              <SearchInput
                value={searchValue}
                onChange={onChange}
                onKeyPress={onEnter}
                // onBlur={outFocus}
                ref={inputFocus}
                type="text"
              />
            </SearchForm>
            {filterList.length > 0 ? (
              <SearchList>
                {filterList.map((item) => (
                  <SearchLink
                    to={{
                      pathname: `/blog/${item}`,
                      state: { blogtitle: item },
                    }}
                    onClick={resetfilter}
                  >
                    <SearchItem key={item}>{item}</SearchItem>
                  </SearchLink>
                ))}
              </SearchList>
            ) : null}
          </>
        ) : null}
      </AnimatePresence>
      {searchOpen ? null : (
        <IconBox layoutId="icon">
          <SearchIcon onClick={searchBoxToggle} />
        </IconBox>
      )}
    </>
  );
}
