import { NavLink } from "react-router-dom";
import { UsersList } from "../components/UsersList/UsersList";

const TweetsPage = () => {
  return (
    <div>
      <NavLink to="/">Go Back</NavLink>
      <UsersList />
    </div>
  );
};

export default TweetsPage;
