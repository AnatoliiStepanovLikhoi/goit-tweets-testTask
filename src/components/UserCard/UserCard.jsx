import { useState } from "react";
import {
  UserCardItem,
  ImageWrapper,
  CardHeroPicture,
  ImageLogo,
  AvatarCircle,
  AvatarImage,
  InfoWrapper,
  InfoTweets,
  InfoFollowers,
  ButtonFollow,
} from "./UserCard.styled";

import { updateUserInfo } from "../../services/usersApi";

import logo from "../../assets/logoGoit.png";
import topImage from "../../assets/topCardImage.png";

// import { fetchUsers } from "../../services/usersApi";
// import { Loader } from "../Loader/Loader";

export function UserCard({ user }) {
  // const { id, avatar, followers, following, tweets } = user;

  const [followStatus, setfollowStatus] = useState(user.following);
  const [followQty, setFollowQty] = useState(user.followers);

  const handleChange = () => {
    setfollowStatus(!followStatus);

    if (followStatus) {
      updateUserInfo(user.id, {
        following: !followStatus,
        followers: followQty - 1,
      });
      setFollowQty(followQty - 1);
    }
    if (!followStatus) {
      updateUserInfo(user.id, {
        following: !followStatus,
        followers: followQty + 1,
      });
      setFollowQty(followQty + 1);
    }
  };

  return (
    <>
      <UserCardItem key={user.id}>
        <ImageWrapper>
          <ImageLogo src={logo} alt="" />
          <CardHeroPicture src={topImage} alt="" />
          <AvatarCircle>
            <AvatarImage src={user.avatar} alt="user avatar" />
          </AvatarCircle>
        </ImageWrapper>
        <InfoWrapper>
          <InfoTweets>{user.tweets.toLocaleString("en-US")} tweets</InfoTweets>
          <InfoFollowers>
            {followQty.toLocaleString("en-US")} followers
          </InfoFollowers>

          <ButtonFollow
            type="button"
            onClick={() => handleChange(user.id)}
            style={{ background: followStatus ? "#5CD3A8" : "#EBD8FF" }}
          >
            {followStatus ? "Following" : "Follow"}
          </ButtonFollow>
        </InfoWrapper>
      </UserCardItem>
    </>
  );
}
