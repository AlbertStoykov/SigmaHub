import React from "react";
import "./style.css";


function RepoCard({ result }) {
  const repoNameSplit = result.name.split('_').join(' ');
  return (
    <div className="repoCard">
      <div id="imgContainer">
        <img id="repoPic" src={`${result.owner.avatar_url}`} />
      </div>
      <div id="text">
        <a id="repoName" href={result.html_url} target="_blank">{repoNameSplit}</a>
        <h5 id="repoDesc">{result.description}</h5>
        <div id="repoText">
          {result.has_issues === false ? <p>Not Working on it</p> : <p>Working on it!</p>}
          <p>Stargazers: {result.stargazers_count}</p>
          <p>Forks: {result.forks}</p>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;