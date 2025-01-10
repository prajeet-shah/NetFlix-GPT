import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRateMovies } from "../utils/movieSlice";

const useTopRateMovies = () => {
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
    getTopMovies();
  }, []);
};

export default useTopRateMovies;
