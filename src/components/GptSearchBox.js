import React, { useRef, useState } from "react";
import lang from "../utils/LanuageConstants";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";
import OpenAI from "openai";

const GptSearchBox = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      options
    );
    return (await data.json()).results;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchText.current.value) return;

    try {
      setIsLoading(true);

      // 1. Get movie recommendations
      const openai = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1",
        apiKey: process.env.REACT_APP_OPENROUTER_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const query =
        "Act as a movie recommendation system and suggest 5 movies for the query: " +
        searchText.current.value +
        ". Only return the names as a comma-separated string like this: Gadar, Sholay, Don, Heropanti, Golmaal";

      const response = await openai.chat.completions.create({
        model: "deepseek/deepseek-chat:free",
        messages: [
          {
            role: "user",
            content: query,
          },
        ],
        temperature: 0.7,
        max_tokens: 2048,
      });

      const movieNames =
        response.choices[0]?.message?.content?.split(",") || [];

      // 2. Fetch TMDB data for all movies at once
      const tmdbResults = await Promise.all(
        movieNames.map((movie) => searchMovieTmdb(movie.trim()))
      );

      dispatch(
        addGptMovieResults({
          movieName: movieNames,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.error("API Error:", error);
      alert("Please check your API key or try again later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="md:pt-60 md:mx-80 pt-52 w-full md:w-3/4">
      <form
        onSubmit={handleSubmit}
        className="bg-black grid grid-cols-4 gap-4 md:p-5 p-2"
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-3 md:px-8 px-2 py-4 rounded-lg"
          placeholder={lang[langKey].SearchPlaceholder}
          disabled={isLoading}
        />
        <button
          type="submit"
          className={`col-span-1 md:px-10 py-4 bg-red-600 text-white rounded-lg md:text-2xl text-lg
            ${
              isLoading ? "opacity-75 cursor-not-allowed" : "hover:bg-red-700"
            }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="spinner animate-spin inline-block w-5 h-5 border-2 border-white rounded-full border-t-transparent"></span>
              {lang[langKey].loading || "Loading..."}
            </span>
          ) : (
            lang[langKey].search
          )}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBox;
