import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteRecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const recipe = action.payload;
      const isFavorite = state.favoriteRecipes.some(
        (favRecipe) => favRecipe.idFood === recipe.idFood
      );
      if (isFavorite) {
        state.favoriteRecipes = state.favoriteRecipes.filter(
          (favRecipe) => favRecipe.idFood !== recipe.idFood
        );
      } else {
        state.favoriteRecipes.push(recipe);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
