import { useState } from "react";
import {
  UserCardItem,
  ImageWrapper,
  CardHeroPicture,
  ImageLogo,
  AvatarCircle,
  AvatarImage,
} from "./UserCard.styled";

import logo from "../../assets/logoGoit.png";
import topImage from "../../assets/topCardImage.png";

// import { fetchUsers } from "../../services/usersApi";
import { Loader } from "../Loader/Loader";

export function UserCard({ user }) {
  const [followStatus, setfollowStatus] = useState(user.following);
  const [followQty, setFollowQty] = useState(user.followers);

  const handleChange = () => {
    setfollowStatus(!followStatus);
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
        <div>
          <p>{user.name}</p>
          <p>{user.tweets}</p>
          <p>{user.followers}</p>

          <button onClick={() => handleChange(user.id)}>
            {followStatus ? "Following" : "Follow"}
          </button>
        </div>
      </UserCardItem>
    </>
  );
}
