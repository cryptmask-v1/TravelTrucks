import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Sidebar.module.css";
import { setFilters, resetCatalog } from "../../redux/slices/catalogSlice";
import { selectCatalogFilters } from "../../redux/catalogSelectors";

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
  const dispatch = useDispatch();
  const filters = useSelector(selectCatalogFilters);

  // Local state for filters - only apply when search button is clicked
  const [localLocation, setLocalLocation] = useState(filters.location || "");
  const [localEquipment, setLocalEquipment] = useState(
    filters.equipment || {
      ac: false,
      automatic: false,
      kitchen: false,
      tv: false,
      bathroom: false,
    }
  );
  const [localForm, setLocalForm] = useState(filters.form || "");

  // Ekipman filtrelerini local state'te güncelle
  const handleEquipmentChange = (equipmentType) => {
    setLocalEquipment((prev) => ({
      ...prev,
      [equipmentType]: !prev[equipmentType],
    }));
  };

  // Form tipini local state'te güncelle
  const handleFormChange = (formType) => {
    setLocalForm((prev) => (prev === formType ? "" : formType));
  };

  // Lokasyonu güncelle
  const handleLocationChange = (e) => {
    setLocalLocation(e.target.value);
  };

  // Arama butonu - tüm filtreleri uygula
  const handleSearch = () => {
    dispatch(resetCatalog());
    dispatch(
      setFilters({
        location: localLocation.trim(),
        equipment: localEquipment,
        form: localForm,
      })
    );
  };
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
            value={localLocation}
            onChange={handleLocationChange}
          />
        </div>
      </div>
      <div className={styles.filters}>
        <p>Filters</p>
      </div>
      <div className={styles.veichleEquipment}>
        <h2 className={styles.veichleTitle}>Vehicle equipment</h2>
        <div className={styles.veichleEquipmentList}>
          <div
            className={`${styles.item} ${
              localEquipment.ac ? styles.active : ""
            }`}
            onClick={() => handleEquipmentChange("ac")}
          >
            <img src={acIcon} alt="AC" className={styles.icon} />
            <span>AC</span>
          </div>
          <div
            className={`${styles.item} ${
              localEquipment.automatic ? styles.active : ""
            }`}
            onClick={() => handleEquipmentChange("automatic")}
          >
            <img src={automaticIcon} alt="Automatic" className={styles.icon} />
            <span>Automatic</span>
          </div>
          <div
            className={`${styles.item} ${
              localEquipment.kitchen ? styles.active : ""
            }`}
            onClick={() => handleEquipmentChange("kitchen")}
          >
            <img src={kitchenIcon} alt="Kitchen" className={styles.icon} />
            <span>Kitchen</span>
          </div>
          <div
            className={`${styles.item} ${
              localEquipment.tv ? styles.active : ""
            }`}
            onClick={() => handleEquipmentChange("tv")}
          >
            <img src={tvIcon} alt="TV" className={styles.icon} />
            <span>TV</span>
          </div>
          <div
            className={`${styles.item} ${
              localEquipment.bathroom ? styles.active : ""
            }`}
            onClick={() => handleEquipmentChange("bathroom")}
          >
            <img src={bathroomIcon} alt="Bathroom" className={styles.icon} />
            <span>Bathroom</span>
          </div>
        </div>
      </div>
      <div className={styles.veichleType}>
        <h2 className={styles.veichleTitle}>Vehicle Type</h2>
        <div className={styles.veichleEquipmentList}>
          <div
            className={`${styles.item} ${
              localForm === "panelTruck" ? styles.active : ""
            }`}
            onClick={() => handleFormChange("panelTruck")}
          >
            <img src={vanIcon} alt="Van" className={styles.icon} />
            <span>Van</span>
          </div>
          <div
            className={`${styles.item} ${
              localForm === "fullyIntegrated" ? styles.active : ""
            }`}
            onClick={() => handleFormChange("fullyIntegrated")}
          >
            <img
              src={integratedIcon}
              alt="Fully Integrated"
              className={styles.icon}
            />
            <span>Fully Integrated</span>
          </div>
          <div
            className={`${styles.item} ${
              localForm === "alcove" ? styles.active : ""
            }`}
            onClick={() => handleFormChange("alcove")}
          >
            <img src={alcoveIcon} alt="Alcove" className={styles.icon} />
            <span>Alcove</span>
          </div>
        </div>
      </div>
      <button className={styles.sidebarButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Sidebar;
