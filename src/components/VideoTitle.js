import React from "react";
import { Link } from "react-router";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute  mt-[20%]  text-white">
      <h1 className="font-bold text-lg md:text-4xl mx-10 mb-4">{title}</h1>
      <p className="hidden md:block text-lg w-1/3 mx-10 my-5">{overview}</p>
      <Link to={`/browse/movie/${title}`}>
        {" "}
        <button className="bg-white hover:bg-gray-700 hover:text-white text-black rounded-lg px-4 md:px-8 py-1 md:py-2 text-lg md:text-2xl font-semibold ml-8 md:ml-20">
          Play
        </button>
      </Link>
      <button className="hidden md:inline-block bg-white text-black hover:bg-gray-700 hover:text-white rounded-lg md:px-8 px-4 py-1 md:py-2 text-lg md:text-2xl font-semibold mx-4 md:mx-10">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
