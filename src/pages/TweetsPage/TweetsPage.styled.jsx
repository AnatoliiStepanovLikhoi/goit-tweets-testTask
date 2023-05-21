import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BackButton = styled(NavLink)`
  background: #efefef;
  background-image: linear-gradient(white, #ccc);
  border: none;
  border-radius: 0 0.5rem 0.5rem 0;
  color: #5736a3;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  padding: 1rem 2rem 1rem 1rem;
  position: relative;
  text-shadow: 0 1px 0 white;
  box-shadow: inset 0 2px 0 0 rgba(black, 0.3),
    inset -2px 0 0 0 rgba(black, 0.3), inset 0 -2px 0 0 rgba(black, 0.3),
    inset 0 3px 0 0 white, 0 3px 3px -3px rgba(black, 0.24),
    0 6px 6px -6px rgba(black, 0.12);

  &:before {
    background: #5736a3;
    background-image: linear-gradient(135deg, white, #ccc);
    border-radius: 0.5rem;
    bottom: 7px;
    content: "";
    height: 50px;
    left: -24px;
    position: absolute;
    transform: rotate(45deg);
    width: 50px;
    z-index: -1;
    box-shadow: inset 2px 0 0 0 rgba(black, 0.3),
      inset 0 -2px 0 0 rgba(black, 0.3), inset 3px 0 0 0 white,
      0 3px 3px -3px rgba(black, 0.24), 0 6px 6px -6px rgba(black, 0.12);
  }

  &:hover,
  &:focus {
    outline: none;
    background-image: linear-gradient(white, #ddd);
    box-shadow: inset 0 2px 0 0 dodgerblue, inset -2px 0 0 0 dodgerblue,
      inset 0 -2px 0 0 dodgerblue, inset 0 3px 0 0 white,
      0 6px 6px -6px rgba(black, 0.12), 0 9px 9px -9px rgba(black, 0.06);

    &:before {
      background-image: linear-gradient(135deg, white, #ddd);
      box-shadow: inset 2px 0 0 0 dodgerblue, inset 0 -2px 0 0 dodgerblue,
        inset 3px 0 0 0 white, 0 6px 6px -6px rgba(black, 0.12),
        0 9px 9px -9px rgba(black, 0.06);
    }
  }

  &:active {
    background-image: linear-gradient(#ccc, #eee);
    box-shadow: inset 0 2px 0 0 dodgerblue, inset -2px 0 0 0 dodgerblue,
      inset 0 -2px 0 0 dodgerblue, inset 0 3px 3px -3px rgba(black, 0.3);

    &:before {
      background-image: linear-gradient(135deg, #ccc, #eee);
      box-shadow: inset 2px 0 0 0 dodgerblue, inset 0 -2px 0 0 dodgerblue,
        inset 3px 0 3px -3px rgba(black, 0.3);
    }
  }
`;

export const GoBackWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  margin-left: 50px;
`;
