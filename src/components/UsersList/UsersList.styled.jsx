import styled from "styled-components";

export const UsersListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  column-gap: 14px;
  row-gap: 14px;
  align-items: center;
  justify-items: center;
`;

export const LoadMoreButton = styled.button`
  display: block;
  width: 196px;
  height: 50px;
  margin: 0 auto;

  background-color: #5736a3;
  color: #fbf8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;

  font-weight: 600;
  font-family: inherit;
  font-size: 18px;
  font-size: 100%;
  line-height: 1.22;
  text-transform: uppercase;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
    background-color: #5cd3a8;
  }
`;

export const LoadMoreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;
