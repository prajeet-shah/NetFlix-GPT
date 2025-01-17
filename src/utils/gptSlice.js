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
  },
});

export const { addToggleGptView, addGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
