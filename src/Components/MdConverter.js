import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useLocation } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

export default function MdConverter() {
  const [md, setMd] = useState("");
  const { state } = useLocation();

  function selectTitle(title) {
    const testmd = import(`../MDs/${title}.md`).then((r) => r.default);
    testmd.then((data) => {
      fetch(data)
        .then((d) => d.text())
        .then((text) => {
          setMd(text);
        });
    });
  }
  state ? selectTitle(state.blogtitle) : selectTitle("main");

  return (
    <Wrapper>
      {md ? (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          children={md}
        ></ReactMarkdown>
      ) : null}
    </Wrapper>
  );
}
