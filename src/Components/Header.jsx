import React from "react";
import Moon from "../../public/assets/icon-moon.svg";
import {
  HeaderStyle,
  LogoStyle,
  ModeBoxStyle,
  ModeWord,
  ModeIcon,
} from "./Header.styled";

function Header() {
  return (
    <HeaderStyle>
      <LogoStyle>devfinder</LogoStyle>
      <ModeBoxStyle>
        <ModeWord>Dark</ModeWord>
        <ModeIcon src={Moon}></ModeIcon>
      </ModeBoxStyle>
    </HeaderStyle>
  );
}

export default Header;
