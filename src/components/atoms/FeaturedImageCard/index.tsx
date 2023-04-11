import React from "react";
import { Badge } from "./Badge";

interface Props {
  source: string;
  preferences?: string;
  alt: string;
}

export const ImageCard: React.FC<Props> = ({ source, preferences, alt }) => {
  return (
    <div className="relative">
      <div className="w-[300px] h-[340px] rounded-2xl bg-transparent bg-cover overflow-hidden mb-5">
        <img
          src={source}
          alt={alt}
          className="w-full h-full hover:scale-110 duration-150"
        />
      </div>
      <Badge preferences={preferences} />
    </div>
  );
};
