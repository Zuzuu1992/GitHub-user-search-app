import styled from "styled-components";

const ContainerStyle = styled.div`
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 31px;
  padding-bottom: 79px;

  @media (min-width: 768px) {
    padding-right: 98px;
    padding-left: 98px;
    padding-top: 60px;
    padding-bottom: 236px;
  }

  @media (min-width: 1440px) {
    padding-right: 355px;
    padding-left: 355px;
    padding-top: 60px;
    padding-bottom: 236px;
  }
`;

export default ContainerStyle;
