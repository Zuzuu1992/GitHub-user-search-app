import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  flex-direction:column
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  padding-top: 33px;
  padding-bottom: 49px;
  padding-right: 24px;
  padding-left: 24px;
  background-color: ${(props) => (props.active ? "#fefefe" : "#1E2A47")};
`;

export const DesktopAvatar = styled.img`
  display: none;
`;

export const Detailsbox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserBio = styled.div`
  display: flex;
  align-items: center;
  column-gap: 19.5px;
`;

export const Avatar = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const UserNameBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => (props.active ? "#2B3442" : "#FFFFFF")};
`;

export const Company = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: #0079ff;
`;

export const JoinDate = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: ${(props) => (props.active ? "#697C9A" : "#FFFFFF")};
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 25px;
  color: ${(props) => (props.active ? "#4B6A9B" : "#FFFFFF")};
  padding-top: 34px;
  padding-bottom: 23px;
`;

export const CommunityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => (props.active ? "#F6F8FF" : "#141D2F")};
  border-radius: 10px;
  padding: 18px 14px;
`;

export const RepoBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Repos = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: ${(props) => (props.active ? "#4B6A9B" : "#FFFFFF")};
`;
export const ReposNumber = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => (props.active ? "#2B3442" : "#FFFFFF")};
`;

export const FollowersBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Followers = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: ${(props) => (props.active ? "#4B6A9B" : "#FFFFFF")};
`;
export const FollowersNumber = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => (props.active ? "#2B3442" : "#FFFFFF")};
`;

export const FollowingBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Following = styled.p`
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-align: center;
  color: ${(props) => (props.active ? "#4B6A9B" : "#FFFFFF")};
`;
export const FollowingNumber = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => (props.active ? "#2B3442" : "#FFFFFF")};
`;

export const ContactDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 17px;
  margin-top: 24px;
  justify-items: flex-start;
`;
export const LocationBox = styled.div`
  display: flex;
  column-gap: 25.25px;
`;
export const LocationIcon = styled.img``;

export const Location = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: ${(props) => (props.active ? "#4B6A9B" : "#FFFFFF")};
`;

export const BlogBox = styled.div`
  display: flex;
  column-gap: 19.25px;
`;
export const BlogIcon = styled.img``;

export const Blog = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: ${(props) => (props.active ? "#4B6A9B" : "#FFFFFF")};
`;

export const TwitterBox = styled.div`
  display: flex;
  column-gap: 19.25px;
`;

export const TwitterIcon = styled.img``;

export const Twitter = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: ${(props) => (props.active ? "#4B6A9B" : "#FFFFFF")};
`;

export const FirmBox = styled.div`
  display: flex;
  column-gap: 19.25px;
`;

export const FirmIcon = styled.img``;

export const Firm = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: ${(props) => (props.active ? "#4B6A9B" : "#FFFFFF")};
`;
