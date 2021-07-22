import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";


export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" exact className={styles.logo}>
          Logo
        </NavLink>
        <nav className={styles.navigation}>
          <NavLink to="/post" className={styles.navLink}>
            Blog Posts
          </NavLink>
          <NavLink to="/project" className={styles.navLink}>
            Projects
          </NavLink>
          <NavLink to="/about" className={styles.navLink}>
            About me
          </NavLink>
          <div></div>
        </nav>
      </div>
    </header>
  );
}
