import React from "react";
import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addmovieVideo } from "../utils/movieSlice";

const useMovieVideo = (movieId) => {
    
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      options
    );
    let json = await data.json();
    console.log(json.results);
    const filterData = json.results.filter((movie) => movie.type === "Trailer");
    // console.log(filterData);
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer.key);
    
    dispatch(addmovieVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieVideo;
