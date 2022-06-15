import React from "react";
import "./Item.css";
const Item = ({ user, handleUserNameClick }) => {

  return (
    <div className="itemCard">
      <p className="userName" onClick={handleUserNameClick}>
        {user.login}
      </p>
      <img className="userImage" src={user.avatar_url} />

      <a href={user.html_url} target="_blank">
        Check out my github profile
      </a>
    </div>
  );
};
export default Item;
