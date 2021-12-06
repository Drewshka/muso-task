import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="header__title">Muso-task</h1>
      </Link>

      <ul className="header__link">
        <Link to="/users" style={{ textDecoration: "none" }}>
          <li className="header__link-one">Users</li>
        </Link>
        <Link to="/gigs" style={{ textDecoration: "none" }}>
          <li className="header__link-two">Gigs</li>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <li className="header__link-three">Contact Us</li>
        </Link>
      </ul>
    </div>
  );
}
