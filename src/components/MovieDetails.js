import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { options } from "../utils/constants";

const MovieDetails = () => {
  const { movieName } = useParams();
  const [title, setTitle] = useState(null);
  const [overview, setOverview] = useState(null);
  const [id, setId] = useState(null);
  const [key, setKey] = useState(null);

  const tmdbMovieSearch = async (movieName) => {
    let data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1`,
      options
    );

    let json = await data.json();

    // console.log(json.results[0]);
    const { original_title, overview, id } = json?.results[0];
    // console.log(id);
    setId(id);
    setTitle(original_title);
    setOverview(overview);
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
      <div>
        <iframe
          className="w-full aspect-video bg-gradient-to-r from-black"
          src={`https://www.youtube.com/embed/${key}?si=a9OMK15-rt-wS7Qn&=1&controls=0`}
          title="YouTube video player"
        ></iframe>
      </div>
      <div className="pt-20 mx-10">
        <h1>{title}</h1>
        <h2>{overview}</h2>
      </div>
    </>
  );
};

export default MovieDetails;
