import React from "react";
import SearchImg from "../../public/assets/icon-search.svg";
import {
  SearchStyle,
  LeftBox,
  SearchIcon,
  InputField,
  RightBox,
  ErrorMessage,
  SearchButton,
} from "./Search.styled";

function Search() {
  return (
    <SearchStyle>
      <LeftBox>
        <SearchIcon src={SearchImg}></SearchIcon>
        <InputField placeholder="Search GitHub username..."></InputField>
      </LeftBox>
      <RightBox>
        <ErrorMessage>No results</ErrorMessage>
        <SearchButton>Search</SearchButton>
      </RightBox>
    </SearchStyle>
  );
}

export default Search;
