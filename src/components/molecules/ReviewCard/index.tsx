import React from "react";
// import { BsFillStarFill } from "react-icons/bs";
import { ReviewImage } from "../../atoms/ReviewImage";
import { ReviewText } from "../../atoms/ReviewText";
import { Props } from "../../atoms/ReviewText";

export const ReviewCard: React.FC<Props> = ({
  title,
  subtitle,
  customerAvatar,
  customerName,
  profession,
  rating,
}) => {
  return (
    <div className="relative min-h-[600px]">
      <ReviewImage />
      <ReviewText
        title={title}
        subtitle={subtitle}
        customerAvatar={customerAvatar}
        customerName={customerName}
        profession={profession}
        rating={rating}
      />
    </div>
  );
};
