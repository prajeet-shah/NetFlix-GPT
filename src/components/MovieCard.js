import React from "react";
import { IMAGE_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  // console.log(Movie_images)
  if (!poster_path) return;
  return (
    <div className="w-36 md:w-52 p-1">
      <img src={IMAGE_URL + poster_path} alt="movie_poster" />
    </div>
  );
};

export default MovieCard;
