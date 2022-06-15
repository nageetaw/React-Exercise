import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchField from "../components/Input/SearchField";
import List from "../components/List/List";
import { selectSearchTerm } from "../redux/slice/SerachSlice";
import { selectAllUsers } from "../redux/slice/UserSlice";

const Home = () => {
  let timeout = undefined;
  const allUsers = useSelector(selectAllUsers);
  const searchTerm = useSelector(selectSearchTerm);
  const [filteredUsers, setFilteredUsers] = useState([]);
  function resetTimerForSearchInput() {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      setFilteredUsers(
        allUsers.filter((user) =>
          user.login.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, 1000);
  }

  return (
    <div>
      <h1>Github Users</h1>
      <SearchField resetTimerForSearchInput={resetTimerForSearchInput} />
      <List filteredUsers={filteredUsers} />
    </div>
  );
};

export default Home;
