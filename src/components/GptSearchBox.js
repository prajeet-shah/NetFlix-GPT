import React, { useRef, useState } from "react";
import lang from "../utils/LanuageConstants";
import { useDispatch, useSelector } from "react-redux";
import { HfInference } from "@huggingface/inference";
import { options } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";
import OpenAI from "openai";

const GptSearchBox = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [output, setOutput] = useState(null);
  const dispatch = useDispatch();
  // search movie in TMDB
  const searchMovieTmdb = async (movie) => {
    let data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      options
    );

    let json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    try {
      const openai = new OpenAI({
        baseURL: "https://openrouter.ai/api/v1", // OpenRouter endpoint
        apiKey: process.env.REACT_APP_OPENROUTER_API_KEY,
        dangerouslyAllowBrowser: true, // Store in .env
      });

      // Your existing query format
      const query =
        "Act as a movie recommendation system and suggest 5 movies for the query: " +
        searchText.current.value +
        ". Only return the names as a comma-separated string like this: Gadar, Sholay, Don, Heropanti, Golmaal";

      // Call DeepSeek via OpenRouter (free tier)
      const response = await openai.chat.completions.create({
        model: "deepseek/deepseek-chat:free", // Free model
        messages: [{ role: "user", content: query }],
        temperature: 0.7,
        max_tokens: 2048,
      });

      // Process response (same as your original code)
      if (response.choices?.[0]?.message?.content) {
        const newContent = response.choices[0].message.content.split(",");
        setOutput(newContent);
      }

      // Your existing TMDB integration
      if (!output) return;
      const promiseArray = output.map((movie) => searchMovieTmdb(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResults({ movieName: output, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error("API Error:", error);
      alert(
        "Failed to fetch recommendations. You may have hit the free tier limit."
      );
    }
  };

  return (
    <div className="md:pt-60 md:mx-80 pt-52 w:full md:w-3/4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black grid grid-cols-4 gap-4 md:p-5 p-2"
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-3 md:px-8 px-2 py-4 rounded-lg"
          placeholder={lang[langKey].SearchPlaceholder}
        />
        <button
          className="col-span-1 md:px-10 py-4 bg-red-600 text-white rounded-lg md:text-2xl text-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBox;
