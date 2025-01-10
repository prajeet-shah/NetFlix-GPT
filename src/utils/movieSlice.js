import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieVideos:null,
    PopularMovies:null,
    TopRatedMovies:null,
    UpcomingMovies:null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addmovieVideo:(state,action)=>{
      state.movieVideos = action.payload
    },
    addPopularMovies:(state , action)=>{
        state.PopularMovies = action.payload
    },
    addTopRateMovies:(state , action)=>{
      state.TopRatedMovies = action.payload
  },
  addUpcomingMovies:(state , action)=>{
    state.UpcomingMovies = action.payload
}
  },
});

export const { addNowPlayingMovie , addmovieVideo, addPopularMovies , addTopRateMovies , addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;
