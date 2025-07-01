import React from "react";
import styles from "./Portfolio.module.css";
import profile from "../../assets/pp.jpg"; // Assuming you have a profile image

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.header}>
        <div className={styles.profileImage}>
          <img src={profile} alt="Profile" className={styles.image} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.name}>Yunus Emre Özkurt</h2>
          <p className={styles.title}>Full-stack Developer</p>
        </div>
      </div>

      <div className={styles.description}>
        <p>
          Passionate full-stack developer specializing in React and modern web
          technologies. Currently studying at GOIT Academy to enhance my skills
          in full-stack development.
        </p>
      </div>

      <div className={styles.links}>
        <a
          href="https://github.com/cryptmask-v1"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <span className={styles.icon}>🔗</span>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yunus-emre-özkurt/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <span className={styles.icon}>💼</span>
          LinkedIn
        </a>
        <a href="mailto:yns.emreozkurt@gmail.com" className={styles.link}>
          <span className={styles.icon}>📧</span>
          Email
        </a>
      </div>

      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>Skills</h3>
        <div className={styles.skillsList}>
          <span className={styles.skill}>React</span>
          <span className={styles.skill}>JavaScript</span>
          <span className={styles.skill}>CSS</span>
          <span className={styles.skill}>HTML</span>
          <span className={styles.skill}>Redux</span>
          <span className={styles.skill}>Node.js</span>
          <span className={styles.skill}>Express</span>
          <span className={styles.skill}>MongoDB</span>
          <span className={styles.skill}>Git</span>
          <span className={styles.skill}>REST APIs</span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
