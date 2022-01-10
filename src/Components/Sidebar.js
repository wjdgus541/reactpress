import styled from "styled-components";
import { useState } from "react";
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
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  margin-left: 120px;
  cursor: pointer;
`;

const OpenBtn = styled.button`
  background: none;
  border: none;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
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

export default function Sidebar() {
  const [open, setOpen] = useState(false);
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
            <ul>
              <li>asd</li>
            </ul>
          </Sidebox>
        ) : null}
      </AnimatePresence>
      <OpenBtn onClick={onToggle}>
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </OpenBtn>
    </>
  );
}
