import { NavLink } from "react-router-dom";
import { LoaderText } from "../../components/Loader/Loader.styled";

const NotFoundPage = () => {
  return (
    <div>
      <LoaderText>Opps, seems nothing found!</LoaderText>
      <NavLink to="/">Go Back to Home</NavLink>
    </div>
  );
};

export default NotFoundPage;
