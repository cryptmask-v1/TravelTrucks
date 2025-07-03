import React from "react";
import acIcon from "../../assets/icons/ac.svg";
import automaticIcon from "../../assets/icons/automatic.svg";
import kitchenIcon from "../../assets/icons/kitchen.svg";
import tvIcon from "../../assets/icons/tv.svg";
import bathroomIcon from "../../assets/icons/bathroom.svg";
import vanIcon from "../../assets/icons/van.svg";
import integratedIcon from "../../assets/icons/fully.svg";
import alcoveIcon from "../../assets/icons/alcove.svg";
import mapIcon from "../../assets/icons/map.svg";
import ratingIcon from "../../assets/icons/rating.svg";
import hearthIcon from "../../assets/icons/hearth.svg";

const iconMap = {
  ac: acIcon,
  automatic: automaticIcon,
  kitchen: kitchenIcon,
  tv: tvIcon,
  bathroom: bathroomIcon,
  van: vanIcon,
  fully: integratedIcon,
  alcove: alcoveIcon,
  map: mapIcon,
  rating: ratingIcon,
  hearth: hearthIcon,
  petrol: automaticIcon, // Using automatic icon for petrol/engine
  radio: tvIcon, // Using TV icon for radio
};

const FeatureIcon = ({ type, alt, className, ...props }) => {
  const iconSrc = iconMap[type];

  if (!iconSrc) {
    console.warn(`Icon type "${type}" not found in iconMap`);
    return null;
  }

  return (
    <img src={iconSrc} alt={alt || type} className={className} {...props} />
  );
};

export default FeatureIcon;
