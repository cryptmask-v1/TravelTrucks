import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTruckById } from "../redux/slices/trucksSlice";
import {
  selectCurrentTruck,
  selectLoading,
  selectError,
} from "../redux/selectors";
import styles from "./TruckDetailPage.module.css";
import FeatureIcon from "../components/shared/FeatureIcon";
import mapIcon from "../assets/icons/map.svg";
import ratingIcon from "../assets/icons/rating.svg";

const TruckDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("features");

  const truck = useSelector(selectCurrentTruck);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(getTruckById(id));
    }
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.loading}>Loading truck details...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.error}>Error: {error}</div>
        </div>
      </div>
    );
  }

  if (!truck) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.notFound}>Truck not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.truckName}>{truck.name}</h1>
          <div className={styles.ratingLocation}>
            <span className={styles.rating}>
              <img
                src={ratingIcon}
                alt="Rating"
                className={styles.ratingIcon}
              />
              {truck.rating}({truck.reviews?.length || 0} Reviews)
            </span>
            <span className={styles.location}>
              <img
                src={mapIcon}
                alt="Location"
                className={styles.locationIcon}
              />
              {truck.location}
            </span>
          </div>
          <div className={styles.priceContainer}>
            <span className={styles.price}>€{truck.price?.toFixed(2)}</span>
          </div>
        </div>

        {/* Gallery Section */}
        <div className={styles.gallery}>
          <ul className={styles.galleryList}>
            {truck.gallery?.slice(0, 3).map((image, index) => (
              <li key={index} className={styles.galleryItem}>
                <img
                  src={image.thumb || image.original}
                  alt={`${truck.name} ${index + 1}`}
                  className={styles.galleryImage}
                  onError={(e) => {
                    e.target.src = "/src/assets/Pic.png";
                  }}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Description */}
        <p className={styles.description}>{truck.description}</p>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${
              activeTab === "features" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "reviews" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        <div className={styles.tabContent}>
          <div className={styles.leftColumn}>
            {activeTab === "features" && (
              <div className={styles.features}>
                {/* Equipment */}
                <div className={styles.equipment}>
                  {truck.AC && (
                    <div className={styles.equipmentItem}>
                      <FeatureIcon type="ac" className={styles.equipmentIcon} />
                      <span>AC</span>
                    </div>
                  )}
                  {truck.transmission === "automatic" && (
                    <div className={styles.equipmentItem}>
                      <FeatureIcon
                        type="automatic"
                        className={styles.equipmentIcon}
                      />
                      <span>Automatic</span>
                    </div>
                  )}
                  {truck.engine && (
                    <div className={styles.equipmentItem}>
                      <FeatureIcon
                        type={truck.engine === "petrol" ? "petrol" : "gas"}
                        className={styles.equipmentIcon}
                      />
                      <span>{truck.engine}</span>
                    </div>
                  )}
                  {truck.kitchen && (
                    <div className={styles.equipmentItem}>
                      <FeatureIcon
                        type="kitchen"
                        className={styles.equipmentIcon}
                      />
                      <span>Kitchen</span>
                    </div>
                  )}
                  {truck.radio && (
                    <div className={styles.equipmentItem}>
                      <FeatureIcon
                        type="radio"
                        className={styles.equipmentIcon}
                      />
                      <span>Radio</span>
                    </div>
                  )}
                  {truck.bathroom && (
                    <div className={styles.equipmentItem}>
                      <FeatureIcon
                        type="bathroom"
                        className={styles.equipmentIcon}
                      />
                      <span>Bathroom</span>
                    </div>
                  )}
                  {truck.TV && (
                    <div className={styles.equipmentItem}>
                      <FeatureIcon type="tv" className={styles.equipmentIcon} />
                      <span>TV</span>
                    </div>
                  )}
                  {truck.microwave && (
                    <div className={styles.equipmentItem}>
                      <FeatureIcon
                        type="microwave"
                        className={styles.equipmentIcon}
                      />
                      <span>Microwave</span>
                    </div>
                  )}
                  {truck.refrigerator && (
                    <div className={styles.equipmentItem}>
                      <FeatureIcon
                        type="refrigerator"
                        className={styles.equipmentIcon}
                      />
                      <span>Refrigerator</span>
                    </div>
                  )}
                  {truck.water && (
                    <div className={styles.equipmentItem}>
                      <FeatureIcon
                        type="water"
                        className={styles.equipmentIcon}
                      />
                      <span>Water</span>
                    </div>
                  )}
                  {truck.gas && (
                    <div className={styles.equipmentItem}>
                      <FeatureIcon
                        type="gas"
                        className={styles.equipmentIcon}
                      />
                      <span>Gas</span>
                    </div>
                  )}
                </div>

                {/* Vehicle Details */}
                <div className={styles.vehicleDetails}>
                  <h3>Vehicle details</h3>
                  <div className={styles.detailsGrid}>
                    <div className={styles.detailRow}>
                      <span>Form</span>
                      <span>{truck.form}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span>Length</span>
                      <span>{truck.length}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span>Width</span>
                      <span>{truck.width}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span>Height</span>
                      <span>{truck.height}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span>Tank</span>
                      <span>{truck.tank}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <span>Consumption</span>
                      <span>{truck.consumption}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className={styles.reviews}>
                {truck.reviews && truck.reviews.length > 0 ? (
                  truck.reviews.map((review, index) => (
                    <div key={index} className={styles.review}>
                      <div className={styles.reviewHeader}>
                        <div className={styles.reviewerInfo}>
                          <div className={styles.avatar}>
                            {review.reviewer_name?.[0]?.toUpperCase()}
                          </div>
                          <div>
                            <div className={styles.reviewerName}>
                              {review.reviewer_name}
                            </div>
                            <div className={styles.reviewRating}>
                              {[...Array(5)].map((_, i) => (
                                <img
                                  key={i}
                                  src={ratingIcon}
                                  alt="star"
                                  className={`${styles.star} ${
                                    i < review.reviewer_rating
                                      ? styles.filled
                                      : styles.empty
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className={styles.reviewComment}>{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <div className={styles.noReviews}>No reviews yet</div>
                )}
              </div>
            )}
          </div>

          {/* Booking Form */}
          <div className={styles.rightColumn}>
            <div className={styles.bookingForm}>
              <h3>Book your campervan now</h3>
              <p className={styles.bookingSubtext}>
                Stay connected! We are always ready to help you.
              </p>

              <form className={styles.form}>
                <input
                  type="text"
                  placeholder="Name*"
                  className={styles.input}
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className={styles.input}
                  required
                />
                <input
                  type="date"
                  placeholder="Booking date*"
                  className={styles.input}
                  required
                />
                <textarea
                  placeholder="Comment"
                  className={styles.textarea}
                  rows={4}
                />
                <button type="submit" className={styles.sendButton}>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckDetailPage;
