import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const Sidebox = styled(motion.div)`
  height: 100vh;
  width: 150px;
  overflow: auto;
  border-right: #bdc3c7 solid 1px;
  padding: 20px 10px;
  background-color: white;
  z-index: 2;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  margin-left: 100px;
  cursor: pointer;
  z-index: 1;
`;

const OpenBtn = styled.button`
  background: none;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  position: fixed;
  margin-top: 20px;
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  color: black;
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
    <>
      <AnimatePresence>
        {open ? (
          <Sidebox
            variants={sideBoxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          >
            <CloseBtn onClick={onToggle}>
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </CloseBtn>
            {blogList ? (
              <List>
                {Object.keys(blogList).map((item, index) => {
                  return (
                    <Item key={item}>
                      <Link
                        to={{
                          pathname: `/blog/${item}`,
                          state: { blogtitle: item },
                        }}
                      >
                        {item}
                      </Link>
                    </Item>
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
    </>
  );
}
