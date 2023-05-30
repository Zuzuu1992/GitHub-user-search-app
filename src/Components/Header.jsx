import React from "react";
import { useState } from "react";
import Moon from "../../public/assets/icon-moon.svg";
import Sun from "../../public/assets/icon-sun.svg";
import {
  HeaderStyle,
  LogoStyle,
  ModeBoxStyle,
  ModeWord,
  ModeIcon,
} from "./Header.styled";
import Search from "./Search";

function Header() {
  const [active, setActive] = useState(true);

  function toggleTheme() {
    setActive(!active);
  }

  return (
    <>
      <HeaderStyle>
        <LogoStyle active={active}>devfinder</LogoStyle>
        <ModeBoxStyle>
          <ModeWord active={active}>{active ? "Dark" : "Light"}</ModeWord>
          <ModeIcon onClick={toggleTheme} src={active ? Moon : Sun}></ModeIcon>
        </ModeBoxStyle>
      </HeaderStyle>
      <Search active={active} />
    </>
  );
}

export default Header;
