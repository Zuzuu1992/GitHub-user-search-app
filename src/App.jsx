import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Card from "./Components/Card";
import GlobalStyles from "./Components/Global";
import ContainerStyle from "./Components/Container.styled";

const theme = {
  dark: {
    primary: "#141D2F",
    secondary: "#1E2A47",
    text: "#FFFFFF",
  },
  light: {
    primary: "#F6F8FF",
    secondary: "#FEFEFE",
    text: "#4B6A9B",
    textBold: "#2B3442",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContainerStyle>
        <GlobalStyles />
        <Header />
        <Search />
        <Card />
      </ContainerStyle>
    </ThemeProvider>
  );
}

export default App;
