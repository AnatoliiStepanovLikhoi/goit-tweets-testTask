import { useState } from "react";

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
      <li key={user.id}>
        <div>
          <div>
            <img src={user.avatar} alt="user avatar" />
          </div>
          <div>
            <p>{user.name}</p>
            <p>{user.tweets}</p>
            <p>{user.followers}</p>

            <button onClick={() => handleChange(user.id)}>
              {followStatus ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
