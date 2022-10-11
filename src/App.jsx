import React, { useState, useEffect, useTransition } from "react";

import "./App.css";
import CardList from "./components/CardList";
import Eye from "./components/Eye";
import Header from "./components/Header";

function App() {
  const [InputValue, setInputValue] = useState("");
  const [query, setQuery] = useState("");
  const [user, setUser] = useState([]);
  const [isPending, setTransition] = useTransition();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  // filter by email for specific user

  const filterEmail = user.filter((email) => {
    return email.email.toLowerCase().includes(query.toLowerCase());
  });

  // Input handler
  const HandleInput = (evn) => {
    setInputValue(evn.target.value);
    setTransition(() => setQuery(evn.target.value));
  };

  return (
    <>
      <Header InputValue={InputValue} HandleInput={HandleInput} />
      {isPending && <Eye>Updating</Eye>}
      {user.length > 0 ? (
        <div className="Card_Box">
          {filterEmail.map((item) => (
            <CardList Item={item} />
          ))}
        </div>
      ) : (
        <Eye>Loading</Eye>
      )}
    </>
  );
}

export default App;
