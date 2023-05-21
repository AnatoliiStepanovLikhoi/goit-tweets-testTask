import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { TiMessages } from "react-icons/ti";

export const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;

  padding: 40px 0;

  display: flex;
  align-items: center;
  justify-content: space-around;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 8px;
    background: #5736a3;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3;
  }
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;

  &:last-child {
    margin-left: 16px;
  }

  &.active {
    color: #5cd3a8;
  }
`;

export const MessageLogo = styled(TiMessages)`
  width: 40px;
  height: 40px;
`;
