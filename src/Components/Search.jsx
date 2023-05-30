import React from "react";
import Card from "./Card";
import { useState } from "react";
import SearchImg from "../../public/assets/icon-search.svg";
import axios from "axios";
import {
  SearchStyle,
  LeftBox,
  SearchIcon,
  InputField,
  RightBox,
  ErrorMessage,
  SearchButton,
  ErrorMobile,
} from "./Search.styled";

function Search({ active, toggleTheme }) {
  const [find, setFind] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const empty = "";
    setFind(empty);
    // console.log(find);
    try {
      const response = await axios.get(`https://api.github.com/users/${find}`);

      const user = response.data;
      setData(user);
      setError(empty);
      // console.log("eriha");
      // console.log(user);
    } catch (error) {
      const redText = "No result";
      setError(redText);
      // console.log("vaime");
    }
  };

  const apiDate = data.created_at;
  console.log(apiDate);
  const changedDate = new Date(apiDate);
  const formattedDate = changedDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <SearchStyle active={active} onSubmit={handleSubmit}>
        <LeftBox>
          <SearchIcon src={SearchImg}></SearchIcon>
          <InputField
            active={active}
            type="text"
            value={find}
            onChange={(e) => setFind(e.target.value)}
            placeholder="Search GitHub username..."
          ></InputField>
        </LeftBox>
        <RightBox>
          <ErrorMessage>{error}</ErrorMessage>
          <SearchButton>Search</SearchButton>
        </RightBox>
      </SearchStyle>
      <ErrorMobile>{error}</ErrorMobile>
      <Card data={data} formattedDate={formattedDate} active={active} />
    </>
  );
}

export default Search;
