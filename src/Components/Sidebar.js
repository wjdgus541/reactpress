import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled.div`
  margin-top: 50px;
  z-index: 1;
`;

const Sidebox = styled(motion.div)`
  background-color: ${(props) => props.theme.bgColor};
  height: 88vh;
  width: 150px;
  border-right: #bdc3c7 solid 1px;
  padding: 20px;
  z-index: 11;
  overflow: auto;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  z-index: 10;
`;

const OpenBtn = styled.button`
  background: none;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  position: fixed;
  margin-top: 20px;
  color: ${(props) => props.theme.textColor};
`;

const List = styled.ul`
  list-style: none;
`;

const Item = styled.li`
  width: 100%;
`;

const ItemLink = styled(Link)`
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
`;

const sideBoxVariants = {
  initial: {
    x: -150,
  },
  visible: {
    x: 0,
    transition: { type: "tween" },
  },
  leaving: {
    x: -150,
    transition: { type: "tween" },
  },
};

export default function Sidebar({ blogList }) {
  const [open, setOpen] = useState(true);
  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <AnimatePresence>
        {open ? (
          <Sidebox
            variants={sideBoxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          >
            <BtnWrapper>
              <CloseBtn onClick={onToggle}>
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
              </CloseBtn>
            </BtnWrapper>
            {blogList ? (
              <List>
                {Object.keys(blogList).map((item, index) => {
                  return (
                    <ItemLink
                      to={{
                        pathname: `/blog/${item}`,
                        state: { blogtitle: item },
                      }}
                    >
                      <Item key={item}>{item}</Item>
                    </ItemLink>
                  );
                })}
              </List>
            ) : null}
          </Sidebox>
        ) : null}
      </AnimatePresence>
      <OpenBtn onClick={onToggle}>
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </OpenBtn>
    </Wrapper>
  );
}
