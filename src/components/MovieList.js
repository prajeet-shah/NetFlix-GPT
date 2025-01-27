import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router";

const MovieList = ({ title, Movies }) => {
  return (
    <div>
      <h1 className="mx-4 p-2 text-lg  md:text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll  mx-4">
        <div className="flex ">
          {Movies.map((movie) => (
            <Link key={movie.id} to={`/browse/movie/${movie.original_title}`}>
              <MovieCard poster_path={movie.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
