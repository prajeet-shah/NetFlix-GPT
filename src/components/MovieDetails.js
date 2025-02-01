import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { options } from "../utils/constants";
import { IMAGE_URL } from "../utils/constants";
import RecommendationMovies from "./RecommendationMovies";
import { useDispatch } from "react-redux";
import { addRecommendedMoviesId } from "../utils/movieSlice";

const MovieDetails = () => {
  const { movieName } = useParams();
  const [title, setTitle] = useState(null);
  const [overview, setOverview] = useState(null);
  const [id, setId] = useState(null);
  const [key, setKey] = useState(null);
  const [poster, setPoster] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);

  const dispatch = useDispatch();

  const apiDate = releaseDate;
  const dateObj = new Date(apiDate);

  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const tmdbMovieSearch = async (movieName) => {
    let data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1`,
      options
    );

    let json = await data.json();

    // console.log(json.results[0]);
    const { original_title, overview, id, poster_path, release_date } =
      json?.results[0];
    // console.log(id);
    setId(id);
    dispatch(addRecommendedMoviesId(id));
    setTitle(original_title);
    setOverview(overview);
    setPoster(poster_path);
    setReleaseDate(release_date);
  };

  const getMovieVideo = async (id) => {
    try {
      let data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?`,
        options
      );
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }
      let json = await data.json();
      // console.log(json.results);

      const fetchData = json.results.filter(
        (movie) => movie.type === "Trailer"
      );
      const trailer = fetchData[0];
      // console.log(trailer);
      // console.log(trailer.key);
      setKey(trailer.key);
    } catch (error) {
      console.error("Failed to fetch movie video:", error);
    }
  };

  useEffect(() => {
    tmdbMovieSearch(movieName);
    getMovieVideo(id);
  }, [movieName, id]);

  return (
    <>
      <div className="bg-gray-300">
        <div>
          <iframe
            className="w-full aspect-video bg-gradient-to-r from-black"
            src={`https://www.youtube.com/embed/${key}?si=a9OMK15-rt-wS7Qn&=1&controls=0`}
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="py-6 mx-10 flex items-center my-4 bg-black ">
          <div className="w-44 mx-2">
            <img src={IMAGE_URL + poster} alt="movie_poster" />
          </div>
          <div className="w-1/2 ">
            <h1 className="text-2xl font-bold mx-4 my-2 text-white">{title}</h1>
            <h2 className="text-md font-semibold mx-4 my-1 text-white">
              {overview}
            </h2>
            <h2 className="text-lg text-gray-500 font-bold mx-4 my-1">
              {formattedDate}
            </h2>
          </div>
        </div>

        <div>
          <RecommendationMovies />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
