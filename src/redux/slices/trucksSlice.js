import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trucks: [],
  loading: false,
  error: null,
  filters: {}, // Filtre durumları
  favorites: [], // Favori karavanlar
};

const trucksSlice = createSlice({
  name: "trucks",
  initialState,
  reducers: {
    setTrucks(state, action) {
      state.trucks = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    addFavorite(state, action) {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
    clearTrucks(state) {
      state.trucks = [];
    },
  },
});

export const {
  setTrucks,
  setLoading,
  setError,
  setFilters,
  addFavorite,
  removeFavorite,
  clearTrucks,
} = trucksSlice.actions;
export default trucksSlice.reducer;
