import { UsersList } from "../components/UsersList/UsersList";
import { BackButton, GoBackWrapper } from "./TweetsPage.styled";

const TweetsPage = () => {
  return (
    <div>
      <GoBackWrapper>
        <BackButton to="/">Go Back</BackButton>
      </GoBackWrapper>
      <UsersList />
    </div>
  );
};

export default TweetsPage;
