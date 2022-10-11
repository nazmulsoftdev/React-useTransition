import React from "react";
import { SiReactos as Logo } from "react-icons/si";
import Search from "./Search";

function Header({ InputValue, HandleInput }) {
  return (
    <div className="header">
      <div className="headerBox">
        <Logo size={35} color="#fff" />
        <Search query={InputValue} HandleInput={HandleInput} />
      </div>
    </div>
  );
}

export default Header;
