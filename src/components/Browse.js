import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import FirstPart from "./FirstPart";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <FirstPart/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
