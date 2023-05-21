import { useState } from "react";
import { PropTypes } from "prop-types";
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

export function UserCard({ user }) {
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

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.bool.isRequired,
    tweets: PropTypes.number.isRequired,
  }),
};
