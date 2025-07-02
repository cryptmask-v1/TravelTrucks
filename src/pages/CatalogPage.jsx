import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Catalog from "../components/Catalog/Catalog";

const CatalogPage = () => {
  return (
    <div className="page-content catalog-content">
      <Sidebar />
      <Catalog />
    </div>
  );
};

export default CatalogPage;
