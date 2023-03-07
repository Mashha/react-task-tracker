import React from "react";
import propTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onAdd}
        color={showAdd ? "red" : "green"}
        text={showAdd ? "close" : "add"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};

Header.propTypes = {
  title: propTypes.string,
};

//  css in js
//  const headingStyle = {
//  color: "red",
//  backgroudColor: "black",
//}

export default Header;
