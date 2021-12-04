import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      {/* <figure className="header__background"> */}
      {/* <div className="header__subcontainer--tablet"> */}
      {/* <img className="header__logo" alt="InStock-Logo_1x" src={logo} /> */}
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
        {/* <Link to="/support"> */}
        {/* <li className="header__link-two">Support</li> */}
        {/* </Link> */}
      </ul>
      {/* </div> */}
      {/* </figure> */}
    </div>
  );
}
