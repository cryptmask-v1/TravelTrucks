import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Catalog from "../components/Catalog/Catalog";
import styles from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Sidebar />
        <Catalog />
      </div>
    </div>
  );
};

export default CatalogPage;
