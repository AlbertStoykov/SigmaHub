import React, { useState } from "react";

function SearchForm({ getResult }) {
  const [location, setLocation] = useState("");

  function updateInput(e) {
    const input = e.target.value;
    setLocation(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getResult(location);
    setLocation("");
  }

  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <input
        aria-label="Location"
        type="text"
        onChange={updateInput}
        value={location}
      />
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchForm;
