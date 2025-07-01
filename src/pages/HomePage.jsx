import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Footer from "../components/Footer/Footer.jsx";

const HomePage = () => {
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header isHomePage={true} />
      <div style={{ flex: 1 }}>
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
