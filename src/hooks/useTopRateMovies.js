import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRateMovies } from "../utils/movieSlice";

const useTopRateMovies = () => {
  const topMovies = useSelector((store) => store.movies.TopRatedMovies);
  const dispatch = useDispatch();
  const getTopMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      options
    );
    let json = await data.json();
    console.log(json.results);
    dispatch(addTopRateMovies(json.results));
  };

  useEffect(() => {
    // Memoization
    if (!topMovies) getTopMovies();
  }, []);
};

export default useTopRateMovies;
