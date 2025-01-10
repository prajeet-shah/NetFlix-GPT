import React, { useEffect } from "react";
import { options } from "../utils/constants";

const VideoBackground = () => {
  const getMovieVideo = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/939243/videos?language=en-US",
      options
    );
    let json = await data.json();
    console.log(json.results);
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return <div></div>;
};

export default VideoBackground;
