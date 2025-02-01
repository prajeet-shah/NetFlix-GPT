import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRecommendationMovies } from "../utils/movieSlice";

const useRecommendationMovies = () => {
  const dispatch = useDispatch();
  const recommendedMoviesId = useSelector(
    (store) => store.movies.recommendedMoviesId
  );

  const recomendatedMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        recommendedMoviesId +
        "/recommendations?&page=1",
      options
    );
    let json = await data.json();
    // console.log(json.results);

    dispatch(addRecommendationMovies(json.results));
  };

  useEffect(() => {
    recomendatedMovies();
  }, []);
};

export default useRecommendationMovies;
