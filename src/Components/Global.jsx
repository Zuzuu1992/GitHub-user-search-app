import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family: 'Space Mono', monospace;
  background-color:${(props) => (props.active ? "#F6F8FF" : "#141D2F")};

}

`;

export default GlobalStyles;
