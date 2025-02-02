import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router";

const MovieList = ({ title, Movies }) => {
  return (
    <div>
      <h1 className="mx-4 p-2 text-lg font-bold  text-white md:text-3xl">
        {title}
      </h1>
      <div className="flex overflow-x-scroll overflow-y-hidden  mx-4 scrollbar-hide ">
        <div className="flex ">
          {Movies.map((movie) => (
            <Link key={movie.id} to={`/browse/movie/${movie.original_title}`}>
              <MovieCard
                poster_path={movie.poster_path}
                title={movie.original_title}
                release_date={movie.release_date}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
