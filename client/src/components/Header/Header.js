import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import guitar from "../../assets/icons/guitar.svg";

export default function Header() {
  return (
    <div className="header">
      {/* <NavLink to="/" style={{ textDecoration: "none" }}>
        <h1 className="header__title">
          Muso-task
          <img
            src={guitar}
            alt="guitar"
            style={{ height: "40px", margin: "0 0 5px 8px" }}
          />
        </h1>
      </NavLink> */}

      <h1 className="header__title">
        {" "}
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          activeClassName="active"
        >
          Muso-task{" "}
          <img
            src={guitar}
            alt="guitar"
            style={{ height: "40px", margin: "0 0 5px 8px" }}
          />
        </NavLink>
      </h1>

      {/* <ul className="header__link">
        <NavLink to="/users" style={{ textDecoration: "none" }}>
          <li className="header__link-one">Users</li>
        </NavLink>
        <Link to="/gigs" style={{ textDecoration: "none" }}>
          <li className="header__link-two">Gigs</li>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <li className="header__link-three">Contact Us</li>
        </Link>
      </ul> */}
      <ul className="header__link">
        <li className="header__link-one">
          <NavLink
            to="/users"
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            Users
          </NavLink>
        </li>

        <li className="header__link-two">
          <NavLink
            to="/gigs"
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            Gigs
          </NavLink>
        </li>

        <li className="header__link-three">
          <NavLink
            to="/contact"
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
