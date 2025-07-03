import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTrucks, fetchTruckById } from "../api.js";

// Async thunk – API'den karavanları çekme
export const getTrucks = createAsyncThunk("trucks/getTrucks", async () => {
  try {
    const response = await fetchTrucks();
    return response;
  } catch (error) {
    console.error("Error fetching trucks:", error);
    throw error;
  }
});

// Async thunk – API'den tek karavan çekme
export const getTruckById = createAsyncThunk(
  "trucks/getTruckById",
  async (id) => {
    try {
      const response = await fetchTruckById(id);
      return response;
    } catch (error) {
      console.error("Error fetching truck by ID:", error);
      throw error;
    }
  }
);

const initialState = {
  trucks: [],
  currentTruck: null,
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
    form: "", // van, alcove, integrated
  },
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const trucksSlice = createSlice({
  name: "trucks",
  initialState,
  reducers: {
    setTrucks(state, action) {
      state.trucks = action.payload;
    },
    setCurrentTruck(state, action) {
      state.currentTruck = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
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
    },
    addFavorite(state, action) {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    toggleFavorite(state, action) {
      const id = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((favId) => favId !== id);
      } else {
        state.favorites.push(id);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    clearTrucks(state) {
      state.trucks = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Get all trucks
      .addCase(getTrucks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTrucks.fulfilled, (state, action) => {
        state.loading = false;
        state.trucks = action.payload;
      })
      .addCase(getTrucks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch trucks";
      })
      // Get single truck
      .addCase(getTruckById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTruckById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentTruck = action.payload;
      })
      .addCase(getTruckById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch truck";
      });
  },
});

// Action exportları
export const {
  setTrucks,
  setCurrentTruck,
  setLoading,
  setError,
  setFilters,
  clearFilters,
  addFavorite,
  removeFavorite,
  toggleFavorite,
  clearTrucks,
} = trucksSlice.actions;

// Reducer exportu
export default trucksSlice.reducer;
