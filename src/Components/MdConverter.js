import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function MdConverter() {
  const [md, setMd] = useState("");

  const testmd = import(`../MDs/testmd.md`).then((r) => r.default);
  useEffect(() => {
    testmd.then((data) => {
      fetch(data)
        .then((d) => d.text())
        .then((text) => {
          setMd(text);
        });
    });
  });

  return (
    <Wrapper>
      <ReactMarkdown children={md} remarkPlugins={[remarkGfm]}></ReactMarkdown>
    </Wrapper>
  );
}
