import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

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
  const [searchOpen, setSearchOpen] = useState(false);
  const inputFocus = useRef();
  const onSearch = () => {
    setSearchOpen((prev) => !prev);
  };
  useEffect(() => {
    if (searchOpen === true) inputFocus.current.focus();
  }, [searchOpen]);
  return (
    <>
      <AnimatePresence>
        {searchOpen ? (
          <SearchForm
            variants={formVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          >
            <IconBox layoutId="icon">
              <SearchIcon onClick={onSearch} />
            </IconBox>
            <SearchInput ref={inputFocus} type="text" />
          </SearchForm>
        ) : null}
      </AnimatePresence>
      {searchOpen ? null : (
        <IconBox layoutId="icon">
          <SearchIcon onClick={onSearch} />
        </IconBox>
      )}
    </>
  );
}
