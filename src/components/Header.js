import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1 className="title">Animals Web-App</h1>
      <input
        className="animalSearch"
        type="text"
        placeholder="Search animal by name"
      ></input>
    </header>
  );
};

export default Header;
