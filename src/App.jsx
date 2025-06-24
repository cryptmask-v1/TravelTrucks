import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import TruckDetailPage from "./pages/TruckDetailPage";
import Header from "./components/Header/Header";
import "./Root.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<TruckDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
