import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const RecommendationMovies = () => {
  const recommendedMovies = useSelector(
    (store) => store.movies.recomendedMovies
  );

  if (!recommendedMovies) return;
  return (
    <div>
      <MovieList title={"Recommended Movies"} Movies={recommendedMovies} />
    </div>
  );
};

export default RecommendationMovies;
