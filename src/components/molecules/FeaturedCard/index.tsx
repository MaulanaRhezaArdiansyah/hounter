import React from "react";
import { ImageCard } from "../../Atoms/FeaturedImageCard";
import { TitleCard } from "../../Atoms/FeaturedTitleCard";
import { PriceCard } from "../../Atoms/FeaturedPriceCard";

export const FeaturedCard: React.FC = () => {
  const featureCards = [
    {
      id: 1,
      image: "house-1.jpg",
      name: "Rheza's House",
      price: 20000000,
    },
    {
      id: 2,
      image: "roselands-house.png",
      name: "Roselands House",
      price: 35000000,
    },
    {
      id: 3,
      image: "woodlandside.png",
      name: "Woodlandside",
      price: 45000000,
    },
    {
      id: 4,
      image: "theoldlighthouse.png",
      name: "The Old Light House",
      price: 55000000,
    },
  ];
  return (
    <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide no-scrollbar">
      {featureCards?.map(({ id, image, name, price }) => (
        <div key={id} className="pl-12 flex flex-col">
          <ImageCard source={`../../../../public/${image}`} />
          <TitleCard>{name}</TitleCard>
          <PriceCard>{price}</PriceCard>
        </div>
      ))}
    </div>
  );
};
