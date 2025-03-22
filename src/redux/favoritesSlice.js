import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteRecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
