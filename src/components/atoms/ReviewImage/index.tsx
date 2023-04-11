import React from "react";

export interface PropsReviewImage {
  source: string;
  alt: string;
}
export const ReviewImage: React.FC<PropsReviewImage> = ({ source, alt }) => {
  return (
    <div className="flex items-center justify-center rounded-md w-[700px] h-[400px] overflow-hidden">
      <img src={source} alt={alt} className="w-full h-full" />
    </div>
  );
};
