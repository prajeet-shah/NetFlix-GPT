import React, { useRef, useState } from "react";
import lang from "../utils/LanuageConstants";
import { useDispatch, useSelector } from "react-redux";
import { HfInference } from "@huggingface/inference";
import { options } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

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
    // console.log(searchText.current.value);
    const client = new HfInference(
      process.env.REACT_APP_YI_34B_CHAT_ACCESS_TOKEN
    );

    const query =
      "acts as a movie recommedation system and suggest some movies for the query : " +
      searchText.current.value +
      "only give name of 5 movies in string format, comma separated like the example result given ahead. Example Result: Gadar, sholay, don, heropanti, Golmaal";

    const response = await client.chatCompletion({
      model: "01-ai/Yi-1.5-34B-Chat",
      messages: [{ role: "user", content: query }],
      temperature: 0.7,
      max_tokens: 2048,
      top_p: 0.7,
    });

    if (response.choices && response.choices.length > 0) {
      const newContent = response?.choices[0]?.message?.content?.split(",");
      setOutput(newContent);
    }

    // console.log(output);
    if (!output) return;

    const promiseArray = output.map((movie) => searchMovieTmdb(movie));
    //it will return [promise, promise , promise , promise, promise]

    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);

    dispatch(
      addGptMovieResults({ movieName: output, movieResults: tmdbResults })
    );
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
