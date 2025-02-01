import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptToggleView: false,
    movieResults: null,
    movieName: null,
  },
  reducers: {
    addToggleGptView: (state) => {
      state.showGptToggleView = !state.showGptToggleView;
    },
    addGptMovieResults: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieName = movieName;
    },
    clearMovies: (state) => {
      state.movieResults = null;
    },
  },
});

export const { addToggleGptView, addGptMovieResults, clearMovies } =
  gptSlice.actions;
export default gptSlice.reducer;
