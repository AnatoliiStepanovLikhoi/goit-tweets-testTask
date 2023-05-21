import { Link } from "react-router-dom";
import { HeaderWrapper, HeaderLink, MessageLogo } from "./Header.styled";

export function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <MessageLogo />
      </Link>

      <div>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/tweets">Tweets</HeaderLink>
      </div>
    </HeaderWrapper>
  );
}
