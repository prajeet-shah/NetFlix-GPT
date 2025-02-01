import React, { useState } from "react";
import { IMAGE_URL } from "../utils/constants";

const MovieCard = ({ poster_path, title, release_date }) => {
  const [cardOver, setCardOver] = useState(null);

  // console.log(poster_path, title, release_date);
  if (!poster_path || !title || !release_date) return;

  const handleMouseEnter = () => {
    setCardOver(true);
  };

  const handleMouseLeave = () => {
    setCardOver(false);
  };

  return (
    <>
      <div
        className="w-36 md:w-52 hover:scale-110 transition-transform duration-300 mx-2 my-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={IMAGE_URL + poster_path} alt="movie_poster" />
        {cardOver && <p className="text-sm">{title} </p>}
        {cardOver && (
          <p className="text-sm text-gray-500">{release_date.split("-")[0]} </p>
        )}
      </div>
    </>
  );
};

export default MovieCard;
