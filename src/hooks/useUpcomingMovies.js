import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const upComingMovies = useSelector((store) => store.movies.UpcomingMovies);
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      options
    );
    let json = await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    // Memoization
    if (!upComingMovies) getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
