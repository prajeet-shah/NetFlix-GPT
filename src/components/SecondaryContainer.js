import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const popular = useSelector((store) => store.movies.PopularMovies);
  const TopRated = useSelector((store)=>store.movies.TopRatedMovies)
  const upcoming = useSelector((store)=>store.movies.UpcomingMovies)
  if (!movies || !popular || !TopRated || !upcoming) return;

  return (
    <div className="text-2xl font-bold  bg-black text-white">
      <div className="-mt-52">
        <MovieList title="Now Playing Movies" Movies={movies} />
        <MovieList title="Popular Movies" Movies={popular} />
        <MovieList title="Top Rated Movies" Movies={TopRated} />
        <MovieList title="Upcoming Movies" Movies={upcoming} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
