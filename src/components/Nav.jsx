import React, { useContext, useState } from "react";
import { Link } from "react-scroll/modules";
import { ThemeContext } from "../context/ThemeContext";
import "./navbar.css";
const Nav = () => {
    const { isLight, toggleTheme } = useContext(ThemeContext);
    const [click,setClick]=useState(true)

  return (
    <div>
      <div className={click?'topnav':'topnav responsive'} id="myTopnav">
        <Link className="a" to="#home" >
        <div onClick={toggleTheme} className="button">
         { !isLight?<i class="fa-solid fa-sun"></i>:
          <i class="fa-solid fa-moon"></i>}
          </div>
        </Link>
        <Link className="a" to="header">Home</Link>
        <Link className="a" to="profile">About</Link>
        <Link className="a" to="skills">Projects</Link>
        <Link className="a" to="project">Skills</Link>
        <Link className="a" to="footer">Contact</Link>
        <Link  to="javascript:void(0);" class="icon" onClick={()=>setClick(!click)}>
          <i class="fa fa-bars"></i>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
