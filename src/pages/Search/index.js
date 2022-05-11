import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchForm, Result } from "../../components";
import { getResult } from "../../actions";
import "./style.css";

function Search() {
  const result = useSelector((state) => state.result);
  const location = useSelector((state) => state.location);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();
   
  const search = searchTerm => dispatch(getResult(searchTerm));
  console.log(search)

  const renderResult = () =>
    loading ? <p>Loading . . .</p> : <Result result={result} />;

  return (
    <div id="search">
      Which gitHub Repository do you want to search?
      <SearchForm getResult={search} />
      <h1>{location}</h1>
      {error ? (
        <p role="alert">Oops there's been an error! {error}</p>
      ) : (
        renderResult()
      )}
    </div>
  );
}

export default Search;
