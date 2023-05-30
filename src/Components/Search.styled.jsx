import styled from "styled-components";

export const SearchStyle = styled.form`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.active ? "#FFFFFF" : "#1E2A47")};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 7px;
  padding-top: 7px;
  padding-bottom: 7px;
  column-gap: 2px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 10px;
    padding-top: 9.5px;
    padding-bottom: 9.5px;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 11px;
  flex-grow: 1;
`;

export const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const InputField = styled.input`
  outline: none;
  border: none;
  flex-grow: 1;
  font-family: "Space Mono";
  font-weight: 400;
  font-size: 13px;
  line-height: 25px;
  color: ${(props) => (props.active ? "#4B6A9B" : "#FFFFFF")};
  background-color: ${(props) => (props.active ? "#FFFFFF" : "#1E2A47")};

  &::placeholder {
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    color: ${(props) => (props.active ? "#4B6A9B" : "#FFFFFF")};
  }

  @media (min-width: 768px) {
    font-size: 18px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const RightBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
`;

export const ErrorMobile = styled.p`
  font-weight: 700;
  font-size: 11px;
  line-height: 17px;
  color: #f74646;
  margin-top: -8px;
  margin-bottom: 8px;
`;

export const ErrorMessage = styled.p`
  display: none;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #f74646;
`;

export const SearchButton = styled.button`
  background-color: #0079ff;
  border: none;
  border-radius: 10px;
  font-family: "Space Mono";
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  padding: 12px 18px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
