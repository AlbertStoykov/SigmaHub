import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RepoCard } from "../../components/index";
import { useParams } from 'react-router';
import { getRepos } from "../../actions";
import "./style.css";

function RepoPage() {
  const { username } = useParams();

  const result = useSelector((state) => state.result);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  console.log(username)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getRepos(username));
  }, [])

  // made it into an array so it maps
  const renderResult = () =>
  loading ? <p>Loading . . .</p> : Array.from(result).map((repoObject, i) => <RepoCard result={repoObject}/>)

  return (
    <div id="search">
      {username}'s Repositories! 
      {error ? (
        <p role="alert">Oops there's been an error! {error}</p>
      ) : (
        renderResult()
      )}
    </div>
  );
}

export default RepoPage;