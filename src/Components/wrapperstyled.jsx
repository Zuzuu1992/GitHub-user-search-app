import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => (props.active ? "#FFFFFF" : "#000000")};
`;
