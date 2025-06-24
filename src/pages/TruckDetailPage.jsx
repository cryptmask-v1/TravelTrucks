import React from "react";
import { useParams } from "react-router-dom";

const TruckDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="page-content">
      <h1>Truck Detail</h1>
      <p>Truck ID: {id}</p>
      <p>Here you can see detailed information about the selected truck.</p>
    </div>
  );
};

export default TruckDetailPage;
