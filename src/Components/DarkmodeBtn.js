import styled from "styled-components";
import Switch from "react-switch";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../recoil";

const Wrapper = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
`;

export default function DarkmodeBtn() {
  const setTheme = useSetRecoilState(isDarkAtom);
  const [checked, setchecked] = useState(false);
  function onChangeHandler() {
    setchecked(!checked);
    setTheme((prev) => !prev);
  }
  return (
    <Wrapper>
      <Switch
        onChange={onChangeHandler}
        checked={checked}
        onColor="#171B20"
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        height={20}
        width={50}
      />
    </Wrapper>
  );
}
