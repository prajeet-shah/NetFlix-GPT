import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  console.log(movies);
  if (!movies) return;

  const randomNumber = Math.floor(Math.random() * 20);

  const playingMovie = movies[randomNumber];
  // console.log(playingMovie);
  const { original_title, overview, id } = playingMovie;

  return (
    <div className="md:pt-0 pt-40 bg-black">
      <VideoTitle title={original_title} overview={overview} movieId={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
