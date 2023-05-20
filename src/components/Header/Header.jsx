import { Link, NavLink } from "react-router-dom";
import { TiMessages } from "react-icons/ti";

export function Header() {
  return (
    <header>
      <Link to="/">
        <TiMessages />
      </Link>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="tweets">Tweets</NavLink>
      </div>
    </header>
  );
}
