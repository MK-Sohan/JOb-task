import React, { useEffect, useState } from "react";
import SubVideoPlayer from "./SubVideoPlayer";
import ReactPlayer from "react-player";
const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);
  const [link, setLink] = useState("");
  useEffect(() => {
    fetch(
      "https://care-box-backend.herokuapp.com/api/v1/applicant_test/get_video_link/"
    )
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <>
      <h1 className="mt-20 mr-52 p-10 text-4xl ">Video Player</h1>
      <div className="flex  justify-center items-center gap-14 ">
        <div className="border-solid border-2 rounded-md border-sky-500 flex justify-center items-center w-[900px] h-[400px] ">
          {link ? (
            <ReactPlayer
              width="800px"
              height="360px"
              style={{ height: "900px" }}
              url={link}
              controls={true}
              playing={true}
            />
          ) : (
            <p className="font-bold text-2xl">Play Video</p>
          )}
        </div>
        <div>
          <h1 className="font-bold text-2xl">List of Videos</h1>
          {videos.map((video) => (
            <SubVideoPlayer key={video.id} video={video} setLink={setLink} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
