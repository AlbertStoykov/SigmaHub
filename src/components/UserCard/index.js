import React from "react";
import "./style.css";

function UserCard({ result }) {
  return (
    <div id="userCard">
      <img id="userPic" src="\images\sigmaUser.png" />
      <div id="text">
        <h2 id="name">Name, Region</h2>
        <p id="repos">Number of Repos: 12</p>
        <button id="repo-button">Show Repos</button>
        <div id="followers">
          <p className="follow">Followers: 10</p>
          <p className="follow">Followings: 22</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
