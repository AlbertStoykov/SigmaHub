import React from "react";
import "./style.css";

function UserCard({}) {
  return (
    <div id="userCard">
      <img src="\images\sigmaUser.png" />
      <h2>Name, Region</h2>
      <p>Number of Repos: 12</p>
      <button>Show Repos</button>
      <p>Followers: 10</p>
      <p>Followings: 22</p>
    </div>
  );
}

export default UserCard;
