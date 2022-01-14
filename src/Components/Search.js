import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { blogListAtom } from "../recoil";
import { useRecoilValue } from "recoil";
import { Link, useHistory } from "react-router-dom";

const SearchForm = styled(motion.form)`
  border-radius: 20px;
  border: 1px solid gray;
  padding: 5px 5px;
  display: flex;
  align-items: center;
`;

const IconBox = styled(motion.div)`
  cursor: pointer;
  border-radius: 20px;
`;

const SearchIcon = styled(FontAwesomeIcon).attrs({ icon: faSearch })`
  color: gray;
`;

const SearchInput = styled.input`
  border: none;
  margin-left: 5px;
  width: 150px;
  &:focus {
    outline: none;
  }
`;

const SearchList = styled.ul`
  position: fixed;
  width: 160px;
  top: 30px;
  background-color: white;
  border: solid 1px gray;
  list-style: none;
`;

const SearchItem = styled.li`
  width: 100%;
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
  const outFocus = () => {
    setfilterList([]);
    setSearchValue("");
    setSearchOpen(false);
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
  const resetfilter = () => {
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
                onBlur={outFocus}
                ref={inputFocus}
                type="text"
              />
            </SearchForm>
            {filterList.length > 0 ? (
              <SearchList>
                {filterList.map((item) => (
                  <SearchItem key={item}>
                    <Link
                      to={{
                        pathname: `/blog/${item}`,
                        state: { blogtitle: item },
                      }}
                      onClick={resetfilter}
                    >
                      {item}
                    </Link>
                  </SearchItem>
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
