// Trucks state selector'ları
import { createSelector } from "@reduxjs/toolkit";

// Temel selector'lar
const selectTrucksState = (state) => state.trucks;

export const selectTrucks = createSelector(
  [selectTrucksState],
  (trucks) => trucks.trucks
);

export const selectCurrentTruck = createSelector(
  [selectTrucksState],
  (trucks) => trucks.currentTruck
);

export const selectLoading = createSelector(
  [selectTrucksState],
  (trucks) => trucks.loading
);

export const selectError = createSelector(
  [selectTrucksState],
  (trucks) => trucks.error
);

export const selectFilters = createSelector(
  [selectTrucksState],
  (trucks) => trucks.filters
);

export const selectFavorites = createSelector(
  [selectTrucksState],
  (trucks) => trucks.favorites
);

// Filtrelenmiş karavanları döndüren selector
export const selectFilteredTrucks = createSelector(
  [selectTrucks, selectFilters],
  (trucks, filters) => {
    return trucks.filter((truck) => {
      // Lokasyon filtresi
      if (
        filters.location &&
        !truck.location.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }

      // Ekipman filtreleri
      const { equipment } = filters;
      if (equipment.ac && !truck.AC) return false;
      if (equipment.automatic && truck.transmission !== "automatic")
        return false;
      if (equipment.kitchen && !truck.kitchen) return false;
      if (equipment.tv && !truck.TV) return false;
      if (equipment.bathroom && !truck.bathroom) return false;

      // Form filtresi
      if (filters.form && truck.form !== filters.form) return false;

      return true;
    });
  }
);

// Favori karavanları döndüren selector
export const selectFavoriteTrucks = createSelector(
  [selectTrucks, selectFavorites],
  (trucks, favorites) => trucks.filter((truck) => favorites.includes(truck.id))
);

// Bir karavan'ın favori olup olmadığını kontrol eden selector factory
export const makeSelectIsFavorite = () =>
  createSelector(
    [selectFavorites, (state, truckId) => truckId],
    (favorites, truckId) => favorites.includes(truckId)
  );

// Favori sayısını döndüren selector
export const selectFavoritesCount = createSelector(
  [selectFavorites],
  (favorites) => favorites.length
);

// Filtrelenmiş karavan sayısını döndüren selector
export const selectFilteredTrucksCount = createSelector(
  [selectFilteredTrucks],
  (filteredTrucks) => filteredTrucks.length
);
