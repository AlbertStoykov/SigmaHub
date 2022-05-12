import React from "react";
import "./style.css";

function RepoCard({ result }) {
  return (
    <div id="repoCard">
      <img id="repoPic" src="\images\sigmaUser.png" />
      <div id="text">
        <h2 id="repoName">Repository Name</h2>
        <div id="repoText">
          <p>Issue Count:</p>
          <p>Stargazers:</p>
          <p>Forks:</p>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;