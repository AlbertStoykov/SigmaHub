import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchForm, Result, UserCard } from "../../components";
import { getResult } from "../../actions";
import "./style.css";

function Search() {
  const result = useSelector((state) => state.result);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  
  const dispatch = useDispatch();
//   on load the page gets Eluented
  useEffect(() => {
    dispatch(getResult('Eluented'));
  }, [])

  const search = searchTerm => dispatch(getResult(searchTerm));
  
  const renderResult = () =>
    loading ? <p>Loading . . .</p> : <UserCard result={result} />;
    
  return (
    <div id="search">
      Which gitHub User do you want to search?
      <SearchForm getResult={search} />
      {error ? (
        <p role="alert">Oops there's been an error! {error}</p>
      ) : (
        renderResult()
      )}
    </div>
  );
}

export default Search;
