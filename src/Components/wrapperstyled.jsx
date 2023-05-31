import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  transition: all 1s;
  background-color: ${(props) => (props.active ? "#FFFFFF" : "#141D2F")};
`;
