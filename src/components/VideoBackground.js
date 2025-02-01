import { useSelector } from "react-redux";
import useMovieVideo from "../hooks/useMovieVideo";

const VideoBackground = ({ movieId }) => {
  useMovieVideo(movieId);

  const trailer = useSelector((store) => store.movies.movieVideos);
  if (!trailer) return;

  return (
    <div className="w-full aspect-video">
      <iframe
        className=" w-full h-full bg-gradient-to-r from-black to-transparent "
        src={`https://www.youtube.com/embed/${trailer.key}?si=A4Y9Y9o2wohfP_-m&autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&disablekb=1&rel=0&iv_load_policy=3`}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
