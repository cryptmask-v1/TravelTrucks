import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Header/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 href="#" className={styles.logo}>
        Travel<span className={styles.trucks}>Trucks</span>
      </h1>{" "}
      <div className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
        >
          Catalog
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
