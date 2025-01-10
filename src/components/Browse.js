import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import FirstPart from "./FirstPart";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRateMovies from "../hooks/useTopRateMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRateMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <FirstPart />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
