import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Catalog from "../components/Catalog/Catalog";

const CatalogPage = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "48px 64px",
        gap: "64px",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Sidebar />
      <Catalog />
    </div>
  );
};

export default CatalogPage;
