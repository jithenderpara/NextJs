import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/users";
import Card from "./CardComponent";

const Users = () => {
  debugger;
  const dispatch = useDispatch();

  const users = useSelector((state) => {
    console.log(state.users);
    return state.users.users;
  });
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {users.length === 0 && !loading && <p>No users available!</p>}
      {error && !loading && <p>{error}</p>}
      {users.loading && <p>Loading...</p>}
      <ul>
        {users.length > 0 &&
          users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>

      {/* {users.loading && <p>Loading...</p>}
        {users.length === 0 && !loading && <p>No users available!</p>}
        {error && !loading && <p>{error}</p>}
        {users.length > 0 && users.map((user) => (
          <li key={user.id}>{user.id}</li>
        ))} */}
    </>
  );
};

export default Users;
