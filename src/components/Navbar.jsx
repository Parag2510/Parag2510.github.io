import React, { useContext } from "react";
import { Link } from "react-scroll/modules";
import styles from "./header.module.css";

import "./nav.css";
import { ThemeContext } from "../context/ThemeContext";
import Toggle from "./Toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const { isLight, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <ul className="topnav">
        { <Toggle/> }
        <li>
          <div onClick={toggleTheme} className="button">
         { !isLight?<i class="fa-solid fa-sun"></i>:
          <i class="fa-solid fa-moon"></i>}
          </div>
        </li>
        <li>
          <Link to="header">Home</Link>
        </li>
        <li>
          <Link to="profile">About</Link>
        </li>
        <li>
          <Link to="skills">Skills</Link>
        </li>
        <li>
          <Link to="project">Projects</Link>
        </li>
        <li>
          <Link to="footer">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;