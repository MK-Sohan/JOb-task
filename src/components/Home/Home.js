import React from "react";
import GoogleMap from "./GoogleMap/GoogleMap";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <VideoPlayer></VideoPlayer>
      <GoogleMap></GoogleMap>
    </div>
  );
};

export default Home;
