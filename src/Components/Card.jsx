import React from "react";
import Address from "../../public/assets/icon-location.svg";
import Website from "../../public/assets/icon-website.svg";
import Twitt from "../../public/assets/icon-twitter.svg";
import WorkPlace from "../../public/assets/icon-company.svg";

import {
  CardStyle,
  DesktopAvatar,
  Detailsbox,
  UserBio,
  Avatar,
  UserDetails,
  UserNameBox,
  UserName,
  Company,
  JoinDate,
  Description,
  CommunityBox,
  RepoBox,
  FollowersBox,
  FollowingBox,
  Followers,
  FollowersNumber,
  Repos,
  ReposNumber,
  Following,
  FollowingNumber,
  ContactDetails,
  LocationBox,
  LocationIcon,
  Location,
  BlogBox,
  BlogIcon,
  Blog,
  TwitterBox,
  TwitterIcon,
  Twitter,
  FirmBox,
  FirmIcon,
  Firm,
} from "./Card.styled";

function Card() {
  return (
    <CardStyle>
      <DesktopAvatar></DesktopAvatar>
      <Detailsbox>
        <UserBio>
          <Avatar></Avatar>
          <UserDetails>
            <UserNameBox>
              <UserName>The Octocat</UserName>
              <Company>@octocat</Company>
            </UserNameBox>
            <JoinDate>joined 25 Ian 2011</JoinDate>
          </UserDetails>
        </UserBio>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          expedita.
        </Description>
        <CommunityBox>
          <RepoBox>
            <Repos>Repos</Repos>
            <ReposNumber>5</ReposNumber>
          </RepoBox>
          <FollowersBox>
            <Followers>Followers</Followers>
            <FollowersNumber>1542</FollowersNumber>
          </FollowersBox>
          <FollowingBox>
            <Following>Following</Following>
            <FollowingNumber>155</FollowingNumber>
          </FollowingBox>
        </CommunityBox>
        <ContactDetails>
          <LocationBox>
            <LocationIcon src={Address}></LocationIcon>
            <Location>lorem</Location>
          </LocationBox>
          <BlogBox>
            <BlogIcon src={Website}></BlogIcon>
            <Blog>lorem ipsum</Blog>
          </BlogBox>
          <TwitterBox>
            <TwitterIcon src={Twitt}></TwitterIcon>
            <Twitter>kinomano</Twitter>
          </TwitterBox>
          <FirmBox>
            <FirmIcon src={WorkPlace}></FirmIcon>
            <Firm>giugano</Firm>
          </FirmBox>
        </ContactDetails>
      </Detailsbox>
    </CardStyle>
  );
}

export default Card;
