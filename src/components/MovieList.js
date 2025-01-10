import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, Movies }) => {
  return (
    <div>
      <h1 className="mx-4 p-2">{title}</h1>
      <div className="flex overflow-x-scroll  mx-4">
        <div className="flex ">
          {Movies.map((image) => (
            <MovieCard key={image.id} Movie_images={image.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
