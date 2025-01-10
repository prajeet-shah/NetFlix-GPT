import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieVideos:null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addmovieVideo:(state,action)=>{
      state.movieVideos = action.payload
    }
  },
});

export const { addNowPlayingMovie , addmovieVideo} = movieSlice.actions;
export default movieSlice.reducer;
