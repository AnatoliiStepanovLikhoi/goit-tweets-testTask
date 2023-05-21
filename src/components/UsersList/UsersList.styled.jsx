import styled from "styled-components";

export const UsersListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  column-gap: 14px;
  row-gap: 14px;
  align-items: center;
  justify-items: center;
`;
