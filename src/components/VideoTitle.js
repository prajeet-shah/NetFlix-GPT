import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="mt-40">
      <h1 className="font-bold text-4xl mx-10 mb-4">{title}</h1>
      <p className="text-lg w-1/3 mx-10 my-5">{overview}</p>
      <button className="bg-gray-500 text-white rounded-lg px-8 py-2 text-2xl font-semibold ml-20">Play</button>
      <button className="bg-gray-500 text-white rounded-lg px-8 py-2 text-2xl font-semibold mx-10">More Info</button>
    </div>
  );
};

export default VideoTitle;
