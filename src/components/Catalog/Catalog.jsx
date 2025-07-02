import React from "react";
import styles from "./Catalog.module.css";
import hearthIcon from "../../assets/icons/hearth.svg";

const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <div className={styles.catalogList}>
        <div className={styles.catalogItem}>
          <div className={styles.imageContainer}>
            <img
              src="/src/assets/Pic.png"
              alt="Mavericks camper van"
              className={styles.vehicleImage}
            />
          </div>
          <div className={styles.itemContent}>
            <div className={styles.itemHeader}>
              <h2 className={styles.vehicleName}>Mavericks</h2>
              <div className={styles.priceContainer}>
                <span className={styles.price}>€8000.00</span>
                <img
                  src={hearthIcon}
                  alt="Add to favorites"
                  className={styles.heartIcon}
                />
              </div>
            </div>
            <div className={styles.ratingLocation}>
              <span className={styles.rating}>★ 4.4(2 Reviews)</span>
              <span className={styles.location}>📍Kyiv, Ukraine</span>
            </div>
            <p className={styles.description}>
              Embrace simplicity and freedom with the Mavericks panel truck...
            </p>
            <div className={styles.features}>
              <span className={styles.feature}>🚗 Automatic</span>
              <span className={styles.feature}>⛽ Petrol</span>
              <span className={styles.feature}>🍳 Kitchen</span>
              <span className={styles.feature}>❄️ AC</span>
            </div>
            <button className={styles.showMoreBtn}>Show more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
