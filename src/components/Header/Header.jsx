import React from "react";
import styles from "../Header/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 href="#" className={styles.logo}>
        Travel<span className={styles.trucks}>Trucks</span>
      </h1>
      <div className={styles.nav}>
        <a href="#" className={styles.link}>
          Home
        </a>
        <a href="#" className={styles.link}>
          Category
        </a>
      </div>
    </div>
  );
};

export default Header;
