import React, { useRef, useState } from "react";
import lang from "../utils/LanuageConstants";
import { useSelector } from "react-redux";
import { HfInference } from "@huggingface/inference";
import { DEEP_SEEK_ACCESS_TOKEN } from "../utils/constants";

const GptSearchBox = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [output, setOutput] = useState("");

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const client = new HfInference(DEEP_SEEK_ACCESS_TOKEN);

    let out = "";

    const query =
      "acts as a movie recommedation system and suggest some movies for the query : " +
      searchText.current.value +
      "only give name of 5 movies in string format, comma separated like the example result given ahead. Example Result: Gadar, sholay, don, heropanti, Golmaal";

    try {
      const response = await client.chatCompletion({
        model: "01-ai/Yi-1.5-34B-Chat",
        messages: [{ role: "user", content: query }],
        temperature: 0.5,
        max_tokens: 2048,
        top_p: 0.7,
      });

      if (response.choices && response.choices.length > 0) {
        const newContent = response.choices[0].message.content;
        setOutput(newContent);
        console.log(newContent.split(","));
      }
    } catch (error) {
      console.error("Error fetching data from DeepSeek-v3:", error);
    }
  };

  return (
    <div className="pt-60 mx-80 w-3/4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black grid grid-cols-4 gap-4 p-5"
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-3 px-8 py-4 rounded-lg"
          placeholder={lang[langKey].SearchPlaceholder}
        />
        <button
          className="col-span-1 px-10 py-4 bg-red-600 text-white rounded-lg text-2xl"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
      <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg">{output}</div>
    </div>
  );
};

export default GptSearchBox;
