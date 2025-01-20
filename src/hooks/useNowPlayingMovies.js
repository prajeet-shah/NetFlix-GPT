import { useEffect } from "react";
import { options, url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const dispatch = useDispatch();
  useEffect(() => {
    // memoization technique to reduce the no of API calls
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    let data = await fetch(url, options);
    let json = await data.json();
    dispatch(addNowPlayingMovie(json.results));
  };
};

export default useNowPlayingMovies;
