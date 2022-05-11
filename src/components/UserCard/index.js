import React from "react";
import { useNavigate } from 'react-router';
import "./style.css";



function UserCard({ result }) {
  const navigate = useNavigate();

  function repoButton(){
    return navigate (`/search/${result.login}`)
  }

  return (
    <div id="userCard">
      <img id="userPic" src={`${result.avatar_url}`} />
      <div id="text">
        <h2 id="name">{result.login},&nbsp;&nbsp;{result.name},&nbsp;&nbsp;{result.location}</h2>
        <p id="repos">Number of Repos: {result.public_repos}</p>
        <button id="repo-button" onClick={repoButton}>Show Repos</button>
        <div id="followers">
          <p className="follow">Followers: {result.followers}</p>
          <p className="follow">Followings: {result.following}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
