import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Card from "./Components/Card";
import GlobalStyles from "./Components/Global";
import ContainerStyle from "./Components/Container.styled";
import { Wrapper } from "./Components/wrapperstyled";

const themeDark = {
  primary: "#141D2F",
  secondary: "#1E2A47",
  text: "#FFFFFF",
};

const themeLight = {
  primary: "#F6F8FF",
  secondary: "#FEFEFE",
  text: "#4B6A9B",
  textBold: "#2B3442",
};

function App() {
  const [active, setActive] = useState(true);
  return (
    <ThemeProvider theme={active ? themeDark : themeLight}>
      <Wrapper active={active}>
        <ContainerStyle>
          <GlobalStyles />
          <Header active={active} setActive={setActive} />
          {/* <Search active={active} /> */}
        </ContainerStyle>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
