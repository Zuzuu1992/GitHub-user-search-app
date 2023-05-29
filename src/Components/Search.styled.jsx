import styled from "styled-components";

export const SearchStyle = styled.form`
  display: flex;
  align-items: center;
  background-color: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 7px;
  padding-top: 7px;
  padding-bottom: 7px;
  column-gap: 2px;
  margin-bottom: 16px;
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
  &::placeholder {
    font-family: "Space Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
    color: #4b6a9b;
  }
`;

export const RightBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
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
`;
