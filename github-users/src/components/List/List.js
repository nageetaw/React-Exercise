import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import apiRequest from "../apiCalls/apiCallHandler";
import "./List.css";
import UserDetailModal from "../modal/UserDetailModal";

//-------------------redux
import { useSelector, useDispatch } from "react-redux";
import { loadAllUsers, selectAllUsers } from "../../redux/slice/UserSlice";
import { selectSearchTerm } from "../../redux/slice/SerachSlice";

//--------List components
const List = ({ filteredUsers }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    //--------fetch users one time when component mounts
    dispatch(loadAllUsers());
  }, [dispatch]);

  let users = useSelector(selectAllUsers);
  let searchTerm = useSelector(selectSearchTerm);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  //--------handler
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleUserNameClick = async (userName) => {
    const response = await apiRequest(
      `https://api.github.com/users/${userName}`,
      null,
      "GET",
      "JSON"
    );
    if (response) {
      setSelectedUser(response);
      openModal();
    } else console.log("error");
  };
  return (
    <div className="listDiv">
      {searchTerm.length > 0
        ? filteredUsers.map((user) => (
            <Item
              key={user.login}
              user={user}
              handleUserNameClick={() => handleUserNameClick(user.login)}
            />
          ))
        : users.map((user) => (
            <Item
              key={user.login}
              user={user}
              handleUserNameClick={() => handleUserNameClick(user.login)}
            />
          ))}

      <UserDetailModal
        openModal={openModal}
        closeModal={closeModal}
        userDetail={selectedUser}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
};
export default List;
