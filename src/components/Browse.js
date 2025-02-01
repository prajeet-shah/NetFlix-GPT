import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRateMovies from "../hooks/useTopRateMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import useRecommendationMovies from "../hooks/useRecommendationMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRateMovies();
  useUpcomingMovies();
  useRecommendationMovies();

  const showGpt = useSelector((store) => store.gpt.showGptToggleView);

  return (
    <div>
      {/*<Header />*/}

      {showGpt ? (
        <>
          <GptSearch />
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
