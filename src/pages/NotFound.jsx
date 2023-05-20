import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Opps, seems nothing found!</p>
      <NavLink to="/">Go Back to Home</NavLink>
    </div>
  );
};

export default NotFoundPage;
