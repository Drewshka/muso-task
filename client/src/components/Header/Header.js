import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import guitar from "../../assets/icons/guitar.svg";

export default function Header() {
  return (
    <div className="header">
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
      <ul className="header__link">
        <li className="header__link-one">
          <NavLink
            to="/gigs"
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            Gigs
          </NavLink>
        </li>

        <li className="header__link-two">
          <NavLink
            // to="/contact"
            to="/map"
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            Events Map
          </NavLink>
        </li>

        <li className="header__link-three">
          <NavLink
            to="/users"
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            Find a Musician
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
