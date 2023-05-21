/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { fetchUsers } from "../../services/usersApi";
import { Loader } from "../Loader/Loader";
import { UserCard } from "../UserCard/UserCard";
import {
  UsersListWrapper,
  LoadMoreButton,
  LoadMoreWrapper,
} from "../UsersList/UsersList.styled";

export function UsersList() {
  const [isLoading, setIsloading] = useState(false);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 6;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const receiveUsers = async ({ page, limit, filter }) => {
      try {
        setIsloading(true);

        return await fetchUsers(page, limit, filter).then((data) => {
          if (data?.length < limit) {
            setShowLoadMoreButton(false);
          } else {
            setShowLoadMoreButton(true);
          }

          setUsers([...users, ...data]);
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    };

    receiveUsers({ page: page, limit: limit });
  }, [page]);

  const handlePagination = () => {
    setPage(page + 1);
  };

  return (
    <>
      <UsersListWrapper>
        {isLoading && <Loader />}
        {users?.length > 0 &&
          users.map((user) => <UserCard key={user.id} user={user} />)}
      </UsersListWrapper>
      <LoadMoreWrapper>
        {showLoadMoreButton && (
          <LoadMoreButton onClick={handlePagination}>Load More</LoadMoreButton>
        )}
      </LoadMoreWrapper>
    </>
  );
}
