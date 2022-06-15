import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./modal.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const UserDetailModal = ({
  openModal,
  modalIsOpen,
  closeModal,
  userDetail,
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="User Detail"
      >
        <button className="closeButton" onClick={closeModal}>
          close
        </button>
        <h1>{userDetail.name}</h1>
        <img src={userDetail.avatar_url} width={"300px"} height={"300px"} />
        <p>Followers : {userDetail.followers}</p>
        <p>Followers : {userDetail.following}</p>
        <p>Location : {userDetail.location}</p>
      </Modal>
    </div>
  );
};
export default UserDetailModal;
