import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { SocialIcon } from "react-social-icons";

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
          <SocialIcon
            url="https://github.com/CarolinaFledgling"
            className={styles.iconSocial}
            target="_blank"
            fgColor="#f4f4f8"
            style={{ height: 35, width: 35, }}
          ></SocialIcon>
        </nav>
      </div>
    </header>
  );
}
