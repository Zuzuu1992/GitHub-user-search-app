import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Card from "./Components/Card";
import GlobalStyles from "./Components/Global";
import ContainerStyle from "./Components/Container.styled";

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

function App(active) {
  return (
    <ThemeProvider theme={active ? themeDark : themeLight}>
      <ContainerStyle>
        <GlobalStyles />
        <Header active={active} />
        {/* <Search active={active} /> */}
      </ContainerStyle>
    </ThemeProvider>
  );
}

export default App;
