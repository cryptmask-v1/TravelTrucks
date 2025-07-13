import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleViewNow = () => {
    navigate("/catalog");
  };

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <p className={styles.subtitle}>
            You can find everything you want in our catalog
          </p>
          <button className={styles.button} onClick={handleViewNow}>
            View Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
