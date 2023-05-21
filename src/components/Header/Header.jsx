import { Link, NavLink } from "react-router-dom";
import { TiMessages } from "react-icons/ti";
import { HeaderWrapper } from "./Header.styled";

export function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <TiMessages />
      </Link>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="tweets">Tweets</NavLink>
      </div>
    </HeaderWrapper>
  );
}
