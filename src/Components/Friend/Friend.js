import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./friend.css";
const Friend = (props) => {
  const history = useHistory();
  const { id, name, email, phone, website } = props.friend;

  const friendStyle = {
    textAlign: "center",
    width: "50%",
    border: "1px solid purple",
    margin: "20px",
    padding: "20px",
    borderRadius: "20px",
  };
  const handleBtn = (friendId) => {
    history.push(`/friend/${friendId}`);
  };

  return (
    <div style={friendStyle}>
      <h2>{name}</h2>
      <h4>email: {email}</h4>
      <h4>phone: {phone}</h4>
      <h4>Website: {website}</h4>
      <p>
        <span>
          Friends Id:
          <Link to={`friend/${id}`}>Show Details of {id} Friend </Link>
        </span>
        <button onClick={() => handleBtn(id)}>Details</button>
      </p>
    </div>
  );
};

export default Friend;
