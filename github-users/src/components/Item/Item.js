import React from "react";
import "./Item.css";
const Item = () => {
  return (
    <div className="itemCard">
      <img
        className="userImage"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
      />
      <p>
        Nageeta <a href="">Github</a>
      </p>
    </div>
  );
};
export default Item;
