import { useEffect } from "react";
import { options, url } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    let data = await fetch(url, options);
    let json = await data.json();
    dispatch(addNowPlayingMovie(json.results));
  };
};

export default useNowPlayingMovies;
