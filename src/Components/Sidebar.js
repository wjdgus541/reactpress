import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

const Sidebox = styled.div`
  height: 100vh;
  width: 150px;
  overflow: auto;
  border-right: #bdc3c7 solid 1px;
  padding: 20px 10px;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  margin-left: 110px;
  cursor: pointer;
`;

const OpenBtn = styled.button`
  background: none;
  border: none;
  margin-left: 20px;
  margin-top: 20px;
`;

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const onToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      {open ? (
        <Sidebox>
          <CloseBtn onClick={onToggle}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </CloseBtn>
          <ul>
            <li>asd</li>
          </ul>
        </Sidebox>
      ) : (
        <OpenBtn onClick={onToggle}>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </OpenBtn>
      )}
    </>
  );
}
