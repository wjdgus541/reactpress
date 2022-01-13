import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
body {
	margin:0;
	height: 100vh;
	width: 100vw;
	overflow:hidden;
}
a {
	text-decoration:none;
	color: inherit;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
