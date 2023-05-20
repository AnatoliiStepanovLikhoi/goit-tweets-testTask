/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import { fetchUsers } from "../../services/fetchUsers";

export function UsersList() {
  const [isLoading, setIsloading] = useState(false);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(false);
  const [page, setPage] = useState(1);
  const [alreadyFollow, setAlreadyFollow] = useState("");
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

    receiveUsers({ page: page, limit: limit, filter: alreadyFollow });
  }, [page, alreadyFollow]);

  return (
    <>
      <ul>
        {users?.length > 0 &&
          users.map((user) => (
            <li key={user.id}>
              <p>{user.name}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
