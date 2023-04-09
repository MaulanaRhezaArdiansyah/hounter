import React from "react";

interface Props {
  source: string;
}

export const ImageCard: React.FC<Props> = ({ source }) => {
  return (
    <div className="w-[300px] h-[340px] rounded-2xl bg-transparent bg-cover overflow-hidden mb-5">
      <img
        src={source}
        alt=""
        className="w-full h-full hover:scale-105 duration-150"
      />
    </div>
  );
};
