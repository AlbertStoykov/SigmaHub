import React from "react";
import "./style.css";

function UserCard({ result }) {
  return (
    <div id="userCard">
      <img src={`${result.avatar_url}`} />
      <h2>{result.login}&nbsp;&nbsp;&nbsp;{result.name}&nbsp;&nbsp;&nbsp;{result.location}</h2>
      <p>Number of Repos: {result.public_repos}</p>
      <button>Show Repos</button>
      <p>Followers: {result.followers}</p>
      <p>Following: {result.following}</p>
    </div>
  );
}

export default UserCard;
