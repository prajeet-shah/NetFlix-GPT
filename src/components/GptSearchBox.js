import React from "react";
import lang from "../utils/LanuageConstants";
import { useSelector } from "react-redux";
const GptSearchBox = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-60  mx-80 w-3/4">
      <form className="bg-black grid grid-cols-4 gap-4 p-5">
        <input
          type="text"
          className="col-span-3 px-8 py-4 rounded-lg"
          placeholder={lang[langKey].SearchPlaceholder}
        />
        <button className="col-span-1 px-10 py-4 bg-red-600 text-white rounded-lg text-2xl">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBox;
