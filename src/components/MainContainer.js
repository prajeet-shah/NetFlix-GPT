import React, { useState, useEffect, useMemo } from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    if (movies && movies.length > 0 && randomNumber === null) {
      const number = Math.floor(Math.random() * movies.length);
      setRandomNumber(number);
    }
  }, [movies, randomNumber]);

  const playingMovie = useMemo(() => {
    if (randomNumber === null || !movies || movies.length === 0) return null;
    return movies[randomNumber];
  }, [randomNumber, movies]);

  // console.log(playingMovie);
  if (!playingMovie) return null;

  const { original_title, overview, id } = playingMovie;

  return (
    <div className="md:pt-0 pt-40 bg-black">
      <VideoTitle title={original_title} overview={overview} movieId={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
