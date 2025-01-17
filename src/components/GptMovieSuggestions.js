import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  if (!movieName) return;

  return (
    <div>
      <div className="p-4 m-4 bg-black text-white bg-opacity-80">
        {/*<MovieList title={movieName[0]} Movies={movieResults[0]} />*/}

        {movieName.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            Movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
