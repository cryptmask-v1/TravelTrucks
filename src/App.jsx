import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import TruckDetailPage from "./pages/TruckDetailPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./Root.css";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {!isHomePage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<TruckDetailPage />} />
      </Routes>
      {!isHomePage && <Footer />}
    </>
  );
}

export default App;
