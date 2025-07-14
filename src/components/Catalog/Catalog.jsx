import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Catalog.module.css";
import hearthIcon from "../../assets/icons/hearth.svg";
import mapIcon from "../../assets/icons/map.svg";
import ratingIcon from "../../assets/icons/rating.svg";
import FeatureIcon from "../shared/FeatureIcon";
import { getCatalogTrucks } from "../../redux/slices/catalogSlice";
import {
  selectCatalogTrucks,
  selectCatalogLoading,
  selectCatalogError,
  selectCatalogFilters,
  selectShouldShowLoadMore,
  selectCatalogSummary,
} from "../../redux/catalogSelectors";
import { selectFavorites } from "../../redux/selectors";
import { toggleFavorite } from "../../redux/slices/trucksSlice";

const Catalog = () => {
  const dispatch = useDispatch();

  // Redux state'lerini al
  const trucks = useSelector(selectCatalogTrucks);
  const loading = useSelector(selectCatalogLoading);
  const error = useSelector(selectCatalogError);
  const filters = useSelector(selectCatalogFilters);
  const shouldShowLoadMore = useSelector(selectShouldShowLoadMore);
  const catalogSummary = useSelector(selectCatalogSummary);
  const favorites = useSelector(selectFavorites);

  // Resim URL'ini güvenli bir şekilde al
  const getTruckImage = (truck) => {
    if (
      truck.gallery &&
      Array.isArray(truck.gallery) &&
      truck.gallery.length > 0
    ) {
      const firstImage = truck.gallery[0];
      return firstImage.thumb || firstImage.original || "/src/assets/Pic.png";
    }
    return "/src/assets/Pic.png";
  };

  // Component mount olduğunda ve filtreler değiştiğinde karavanları yükle
  useEffect(() => {
    dispatch(getCatalogTrucks({ page: 1, filters }));
  }, [dispatch, filters]);

  // Load more işlevi
  const handleLoadMore = () => {
    const nextPage = Math.floor(trucks.length / 4) + 1;
    dispatch(getCatalogTrucks({ page: nextPage, filters }));
  };

  // Favorilere ekleme/çıkarma
  const handleToggleFavorite = (truckId) => {
    dispatch(toggleFavorite(truckId));
  };

  // Loading durumu
  if (loading && trucks.length === 0) {
    return (
      <div className={styles.catalog}>
        <div className={styles.loading}>Loading trucks...</div>
      </div>
    );
  }

  // Error durumu
  if (error) {
    return (
      <div className={styles.catalog}>
        <div className={styles.error}>Error: {error}</div>
      </div>
    );
  }

  // Boş sonuç durumu
  if (catalogSummary.isEmpty) {
    return (
      <div className={styles.catalog}>
        <div className={styles.noResults}>
          No trucks found matching your criteria.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.catalog}>
      <div className={styles.catalogList}>
        {trucks.map((truck) => {
          const isFavorite = favorites.includes(truck.id);

          return (
            <div key={truck.id} className={styles.catalogItem}>
              <div className={styles.imageContainer}>
                <img
                  src={getTruckImage(truck)}
                  alt={truck.name}
                  className={styles.vehicleImage}
                  onError={(e) => {
                    e.target.src = "/src/assets/Pic.png";
                  }}
                />
              </div>
              <div className={styles.itemContent}>
                <div className={styles.headerRatingGroup}>
                  <div className={styles.itemHeader}>
                    <h2 className={styles.vehicleName}>{truck.name}</h2>
                    <div className={styles.priceContainer}>
                      <span className={styles.price}>
                        €{truck.price.toFixed(2)}
                      </span>
                      <img
                        src={hearthIcon}
                        alt="Add to favorites"
                        className={`${styles.heartIcon} ${
                          isFavorite ? styles.favorite : ""
                        }`}
                        onClick={() => handleToggleFavorite(truck.id)}
                      />
                    </div>
                  </div>

                  <div className={styles.ratingLocationGroup}>
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
                </div>

                <div className={styles.descriptionGroup}>
                  <p className={styles.description}>
                    {truck.description?.substring(0, 100)}...
                  </p>
                </div>

                <div className={styles.featuresGroup}>
                  <div className={styles.features}>
                    {truck.transmission === "automatic" && (
                      <span className={styles.feature}>
                        <FeatureIcon
                          type="automatic"
                          className={styles.featureIcon}
                        />
                        Automatic
                      </span>
                    )}
                    {truck.engine && (
                      <span className={styles.feature}>
                        <FeatureIcon
                          type="petrol"
                          className={styles.featureIcon}
                        />
                        {truck.engine}
                      </span>
                    )}
                    {truck.kitchen && (
                      <span className={styles.feature}>
                        <FeatureIcon
                          type="kitchen"
                          className={styles.featureIcon}
                        />
                        Kitchen
                      </span>
                    )}
                    {truck.AC && (
                      <span className={styles.feature}>
                        <FeatureIcon type="ac" className={styles.featureIcon} />
                        AC
                      </span>
                    )}
                  </div>
                </div>

                <div className={styles.buttonGroup}>
                  <a
                    href={`/catalog/${truck.id}`}
                    className={styles.showMoreBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Show more
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {shouldShowLoadMore && (
        <div className={styles.loadMoreContainer}>
          <button
            className={styles.loadMoreBtn}
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Catalog;
