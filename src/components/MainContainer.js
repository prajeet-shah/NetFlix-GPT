import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  // console.log(movies);
  if (!movies) return;

  const playingMovie = movies[0];
  // console.log(playingMovie);
  const { original_title, overview, id } = playingMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} movieId={id} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
