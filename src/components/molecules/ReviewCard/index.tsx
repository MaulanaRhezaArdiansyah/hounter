import React from "react";
import { ReviewImage } from "../../atoms/ReviewImage";
import { ReviewText } from "../../atoms/ReviewText";
import { Props } from "../../atoms/ReviewText";
import { PropsReviewImage } from "../../atoms/ReviewImage";

// interface PropsReviewImage {
//   source: string;
//   alt: string;
// }
export const ReviewCard: React.FC<PropsReviewImage & Props> = ({
  id,
  title,
  subtitle,
  customerAvatar,
  customerName,
  profession,
  rating,
  source,
  alt,
}) => {
  return (
    <div className="relative min-h-[600px]">
      <ReviewImage source={source} alt={alt} />
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
