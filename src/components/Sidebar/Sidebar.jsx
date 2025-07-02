import React from "react";
import styles from "./Sidebar.module.css";

// Import SVG icons
import acIcon from "../../assets/icons/ac.svg";
import automaticIcon from "../../assets/icons/automatic.svg";
import kitchenIcon from "../../assets/icons/kitchen.svg";
import tvIcon from "../../assets/icons/tv.svg";
import bathroomIcon from "../../assets/icons/bathroom.svg";
import vanIcon from "../../assets/icons/van.svg";
import integratedIcon from "../../assets/icons/fully.svg";
import alcoveIcon from "../../assets/icons/alcove.svg";
import mapIcon from "../../assets/icons/map.svg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.search}>
        <p>Location</p>
        <div className={styles.inputContainer}>
          <img src={mapIcon} alt="Location" className={styles.locationIcon} />
          <input
            type="text"
            className={styles.locationInput}
            placeholder="City"
          />
        </div>
      </div>
      <div className={styles.filters}>
        <p>Filters</p>
      </div>
      <div className={styles.veichleEquipment}>
        <h2 className={styles.veichleTitle}>Veichle equipment</h2>
        <div className={styles.veichleEquipmentList}>
          <div className={styles.item}>
            <img src={acIcon} alt="AC" className={styles.icon} />
            <span>AC</span>
          </div>
          <div className={styles.item}>
            <img src={automaticIcon} alt="Automatic" className={styles.icon} />
            <span>Automatic</span>
          </div>
          <div className={styles.item}>
            <img src={kitchenIcon} alt="Kitchen" className={styles.icon} />
            <span>Kitchen</span>
          </div>
          <div className={styles.item}>
            <img src={tvIcon} alt="TV" className={styles.icon} />
            <span>TV</span>
          </div>
          <div className={styles.item}>
            <img src={bathroomIcon} alt="Bathroom" className={styles.icon} />
            <span>Bathroom</span>
          </div>
        </div>
      </div>
      <div className={styles.veichleType}>
        <h2 className={styles.veichleTitle}>Veichle Type</h2>
        <div className={styles.veichleEquipmentList}>
          <div className={styles.item}>
            <img src={vanIcon} alt="Van" className={styles.icon} />
            <span>Van</span>
          </div>
          <div className={styles.item}>
            <img
              src={integratedIcon}
              alt="Fully Integrated"
              className={styles.icon}
            />
            <span>Fully Integrated</span>
          </div>
          <div className={styles.item}>
            <img src={alcoveIcon} alt="Alcove" className={styles.icon} />
            <span>Alcove</span>
          </div>
        </div>
      </div>
      <button className={styles.sidebarButton}>Search</button>
    </div>
  );
};

export default Sidebar;
