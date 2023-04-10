import React, { useState } from "react";
import ReactPlayer from "react-player";

export const ReadyToSellRightSection: React.FC = () => {
  const [play, setPlay] = useState(false);
  return (
    <div className="pr-20 relative w-1/2 flex justify-end items-end">
      <div className="w-[500px] h-[400px] relative bg-white/30 backdrop-blur-md rounded-md flex items-center justify-center overflow-hidden">
        <ReactPlayer
          // playIcon
          onPause={() => {
            console.log("paused");
            setPlay(false);
          }}
          onPlay={() => {
            console.log("resume");
            setPlay(true);
          }}
          playing={true}
          controls
          loop
          light={
            <img
              src="https://househunter.vercel.app/house-play-video.png"
              alt="thumbnail"
              className="w-full h-full"
            />
          }
          url={"https://www.youtube.com/watch?v=3_f9MYe9KiI"}
          width={"100%"}
          height={"100%"}
        />
      </div>
      {play ? (
        <></>
      ) : (
        <>
          <div className="absolute -bottom-10 left-8 rounded-md">
            <img src="https://househunter.vercel.app/sofa.png" alt="" />
          </div>
          <div className="absolute -bottom-10 left-[340px] rounded-md">
            <img src="https://househunter.vercel.app/chair.png" alt="" />
          </div>
          <div className="absolute -bottom-10 right-[90px] rounded-md">
            <img src="https://househunter.vercel.app/accessories.png" alt="" />
          </div>
        </>
      )}
    </div>
  );
};
