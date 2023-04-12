import React from "react";
import { BsFillStarFill } from "react-icons/bs";

export interface Props {
  id?: string;
  title: string;
  subtitle: string;
  customerAvatar: string;
  customerName: string;
  profession: string;
  rating: number;
}
export const ReviewText: React.FC<Props> = ({
  title,
  subtitle,
  customerAvatar,
  customerName,
  profession,
  rating,
}) => {
  return (
    <div className="absolute flex flex-col justify-center p-10 gap-4 bg-white rounded-2xl w-[600px] h-[260px] bottom-16 left-12 review-text">
      <h2 className="capitalize font-semibold text-xl text-primary-800">
        {title}
      </h2>
      <p className="text-primary-600">{subtitle}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            // src="https://househunter.vercel.app/rheza.png"
            src={customerAvatar}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col capitalize font-medium">
            <p className="text-primary-900">{customerName}</p>
            <p className="text-primary-400">{profession}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BsFillStarFill size={24} color="#F59E0B" />
          <p className="font-semibold text-primary-700 text-xl">{rating}</p>
        </div>
      </div>
    </div>
  );
};
