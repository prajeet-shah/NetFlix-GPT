import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";

const VideoBackground = ({ movieId }) => {
  useMovieVideo(movieId);

  const trailer = useSelector((store) => store.movies.movieVideos);
  if (!trailer) return;

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailer.key}?si=A4Y9Y9o2wohfP_-m`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
