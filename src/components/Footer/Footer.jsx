import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <span style={{ color: "#fff" }}>made by </span>
      <span
        onClick={() => {
          window.open("https://github.com/lolaaskerova");
        }}
        className="owner"
      >
        lolaaskerova
      </span>
    </footer>
  );
};

export default Footer;
