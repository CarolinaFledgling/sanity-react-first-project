import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.modules.scss";

export default function NavBar() {
  return (
    <header className="header">
      <div className="container">
        <NavLink to="/" exact className='logo'>
          Logo
        </NavLink>
        <nav className="navigation">
          <NavLink to="/post" className='navLink'>Blog Posts</NavLink>
          <NavLink to="/project" className='navLink'>Projects</NavLink>
          <NavLink to="/about" className='navLink'>About me</NavLink>
        </nav>
      </div>
    </header>
  );
}
