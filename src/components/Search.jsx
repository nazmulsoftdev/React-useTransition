import React from "react";

function Search({ InputValue, HandleInput }) {
  return (
    <input
      type="text"
      className="TextInput"
      placeholder="Type email"
      value={InputValue}
      onChange={HandleInput}
    />
  );
}

export default Search;
