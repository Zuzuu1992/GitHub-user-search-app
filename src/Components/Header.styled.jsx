import styled, { css } from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 35px;
`;

export const LogoStyle = styled.h1`
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: ${(props) => (props.active ? "#222731" : "#FFFFFF")};
`;

export const ModeBoxStyle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

export const ModeWord = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 19px;
  text-align: right;
  letter-spacing: 2.5px;
  color: ${(props) => (props.active ? "#4b6a9b" : "#FFFFFF")};
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => (props.active ? "#222731" : "#90A4D4")};
  }
`;

export const ModeIcon1 = styled.svg`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 2s;

  g:hover {
    fill: #90a4d4;
  }
`;

export const ModeIcon2 = styled.svg`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 3s;

  g:hover {
    fill: #222731;
  }
`;
