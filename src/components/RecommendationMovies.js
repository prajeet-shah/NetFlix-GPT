import React, { useEffect, useState } from "react";

import MovieList from "./MovieList";

import { options } from "../utils/constants";

const RecommendationMovies = ({ movieId }) => {
  const [movieResult, setMovieResult] = useState(null);

  // console.log(movieId);

  const recomendedMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/recommendations?&page=1",
      options
    );
    let json = await data.json();

    setMovieResult(json.results);
  };

  useEffect(() => {
    recomendedMovies();
  }, [movieId]);

  if (!movieResult) return;
  return (
    <div>
      <MovieList title={"Recommended Movies"} Movies={movieResult} />
    </div>
  );
};

export default RecommendationMovies;
