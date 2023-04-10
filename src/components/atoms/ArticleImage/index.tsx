import React from "react";

interface Props {
  source: string;
  imageSize?: string;
}
export const ArticleImage: React.FC<Props> = ({ source, imageSize }) => {
  return (
    <div className={`flex items-center justify-center ${imageSize}`}>
      <img src={source} alt="" className="w-full h-full" />
    </div>
  );
};
