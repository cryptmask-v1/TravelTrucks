import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTrucks } from "../api.js";

export const getCatalogTrucks = createAsyncThunk(
  "catalog/getCatalogTrucks",
  async (params = {}) => {
    try {
      const { page = 1, limit = 4, filters = {} } = params;
      const response = await fetchTrucks();

      let allTrucks = [];
      if (response && response.items && Array.isArray(response.items)) {
        allTrucks = response.items;
      } else if (Array.isArray(response)) {
        allTrucks = response;
      } else if (response && response.data && Array.isArray(response.data)) {
        allTrucks = response.data;
      } else {
        console.error("Unexpected API response format:", response);
        throw new Error("Invalid API response format");
      }

      let filteredTrucks = [...allTrucks];

      if (filters.location && filters.location.trim()) {
        filteredTrucks = filteredTrucks.filter(
          (truck) =>
            truck.location &&
            truck.location
              .toLowerCase()
              .includes(filters.location.toLowerCase())
        );
      }

      if (filters.equipment) {
        const { equipment } = filters;
        filteredTrucks = filteredTrucks.filter((truck) => {
          if (equipment.ac && !truck.AC) return false;
          if (equipment.automatic && truck.transmission !== "automatic")
            return false;
          if (equipment.kitchen && !truck.kitchen) return false;
          if (equipment.tv && !truck.TV) return false;
          if (equipment.bathroom && !truck.bathroom) return false;
          return true;
        });
      }

      if (filters.form && filters.form.trim()) {
        filteredTrucks = filteredTrucks.filter(
          (truck) => truck.form === filters.form
        );
      }

      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedTrucks = filteredTrucks.slice(startIndex, endIndex);

      return {
        trucks: paginatedTrucks,
        totalCount: filteredTrucks.length,
        currentPage: page,
        totalPages: Math.ceil(filteredTrucks.length / limit),
        hasMore: endIndex < filteredTrucks.length,
      };
    } catch (error) {
      console.error("Error fetching catalog trucks:", error);
      throw error;
    }
  }
);

const initialState = {
  trucks: [],
  totalCount: 0,
  currentPage: 1,
  totalPages: 0,
  hasMore: false,
  loading: false,
  error: null,
  filters: {
    location: "",
    equipment: {
      ac: false,
      automatic: false,
      kitchen: false,
      tv: false,
      bathroom: false,
    },
    form: "",
  },
  itemsPerPage: 4,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setCatalogTrucks(state, action) {
      state.trucks = action.payload;
    },
    appendCatalogTrucks(state, action) {
      state.trucks = [...state.trucks, ...action.payload];
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
      state.currentPage = 1;
    },
    clearFilters(state) {
      state.filters = {
        location: "",
        equipment: {
          ac: false,
          automatic: false,
          kitchen: false,
          tv: false,
          bathroom: false,
        },
        form: "",
      };
      state.currentPage = 1;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    resetCatalog(state) {
      state.trucks = [];
      state.currentPage = 1;
      state.totalCount = 0;
      state.totalPages = 0;
      state.hasMore = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCatalogTrucks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCatalogTrucks.fulfilled, (state, action) => {
        const { trucks, totalCount, currentPage, totalPages, hasMore } =
          action.payload;
        state.loading = false;

        if (currentPage === 1) {
          state.trucks = trucks;
        } else {
          state.trucks = [...state.trucks, ...trucks];
        }

        state.totalCount = totalCount;
        state.currentPage = currentPage;
        state.totalPages = totalPages;
        state.hasMore = hasMore;
      })
      .addCase(getCatalogTrucks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch catalog trucks";
      });
  },
});

export const {
  setCatalogTrucks,
  appendCatalogTrucks,
  setLoading,
  setError,
  setFilters,
  clearFilters,
  setCurrentPage,
  resetCatalog,
} = catalogSlice.actions;

export default catalogSlice.reducer;
