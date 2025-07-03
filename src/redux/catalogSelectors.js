// Catalog state selector'ları
import { createSelector } from "@reduxjs/toolkit";

// Temel selector'lar
const selectCatalogState = (state) => state.catalog;

export const selectCatalogTrucks = createSelector(
  [selectCatalogState],
  (catalog) => catalog.trucks
);

export const selectCatalogLoading = createSelector(
  [selectCatalogState],
  (catalog) => catalog.loading
);

export const selectCatalogError = createSelector(
  [selectCatalogState],
  (catalog) => catalog.error
);

export const selectCatalogFilters = createSelector(
  [selectCatalogState],
  (catalog) => catalog.filters
);

export const selectCatalogCurrentPage = createSelector(
  [selectCatalogState],
  (catalog) => catalog.currentPage
);

export const selectCatalogTotalPages = createSelector(
  [selectCatalogState],
  (catalog) => catalog.totalPages
);

export const selectCatalogTotalCount = createSelector(
  [selectCatalogState],
  (catalog) => catalog.totalCount
);

export const selectCatalogHasMore = createSelector(
  [selectCatalogState],
  (catalog) => catalog.hasMore
);

export const selectCatalogItemsPerPage = createSelector(
  [selectCatalogState],
  (catalog) => catalog.itemsPerPage
);

// Load more butonunun gösterilip gösterilmeyeceğini belirleyen selector
export const selectShouldShowLoadMore = createSelector(
  [selectCatalogHasMore, selectCatalogLoading],
  (hasMore, loading) => hasMore && !loading
);

// Aktif filtrelerin olup olmadığını kontrol eden selector
export const selectHasActiveFilters = createSelector(
  [selectCatalogFilters],
  (filters) => {
    // Lokasyon filtresi var mı?
    if (filters.location.trim()) return true;

    // Ekipman filtreleri var mı?
    const hasEquipmentFilters = Object.values(filters.equipment).some(
      (value) => value
    );
    if (hasEquipmentFilters) return true;

    // Form filtresi var mı?
    if (filters.form) return true;

    return false;
  }
);

// Pagination bilgilerini döndüren selector
export const selectPaginationInfo = createSelector(
  [
    selectCatalogCurrentPage,
    selectCatalogTotalPages,
    selectCatalogTotalCount,
    selectCatalogItemsPerPage,
  ],
  (currentPage, totalPages, totalCount, itemsPerPage) => ({
    currentPage,
    totalPages,
    totalCount,
    itemsPerPage,
    startItem: (currentPage - 1) * itemsPerPage + 1,
    endItem: Math.min(currentPage * itemsPerPage, totalCount),
  })
);

// Catalog durumunu özetleyen selector
export const selectCatalogSummary = createSelector(
  [
    selectCatalogTrucks,
    selectCatalogLoading,
    selectCatalogError,
    selectCatalogTotalCount,
  ],
  (trucks, loading, error, totalCount) => ({
    trucksCount: trucks.length,
    totalCount,
    loading,
    error,
    isEmpty: trucks.length === 0 && !loading,
    hasResults: trucks.length > 0,
  })
);
