import React from "react";
import ReactPlayer from "react-player";

const SubVideoPlayer = ({ video, setLink }) => {
  const { link, id } = video;
  console.log(video.link);
  const handleLink = (id) => {
    setLink(id);
  };

  return (
    <div className=" ">
      <div className="h-10 w-52 bg-cyan-300 mt-6 flex justify-center items-center font-bold rounded-sm ">
        <button className="btn " onClick={() => handleLink(link)}>
          Video
        </button>
      </div>
    </div>
  );
};

export default SubVideoPlayer;
