import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store.movies.PopularMovies);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    let json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    // Memoization technique
    if (!popularMovies) getPopularMovies();
  }, []);
};

export default usePopularMovies;
