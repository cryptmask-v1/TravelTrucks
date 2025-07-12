import Hero from "../components/Hero/Hero.jsx";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
