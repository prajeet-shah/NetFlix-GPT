import React from "react";
import GptSearchBox from "./GptSearchBox";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative ">
      <div className="fixed">
        <img 
          className="h-screen object-cover md:h-auto"
          src={BACKGROUND_IMAGE}
          alt="background_image"
        />
      </div>
      <div className="relative z-20">
        <GptSearchBox />
        <GptMovieSuggestions />
        
      </div>
    </div>
  );
};

export default GptSearch;
