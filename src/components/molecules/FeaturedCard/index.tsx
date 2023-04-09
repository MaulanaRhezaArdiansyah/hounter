import React from "react";
import { ImageCard } from "../../atoms/FeaturedImageCard";
import { TitleCard } from "../../atoms/FeaturedTitleCard";
import { PriceCard } from "../../atoms/FeaturedPriceCard";
import { OwnerCard } from "../../atoms/FeaturedOwnerCard";

export const FeaturedCard: React.FC = () => {
  const featureCards = [
    {
      id: 1,
      image: "house-1.jpg",
      name: "Rheza's House",
      price: 20000000,
      owner_name: "Rheza",
      owner_address: "Denpasar, Indonesia",
      owner_avatar: "rheza.png",
      category: "house",
      preferences: "Popular",
    },
    {
      id: 2,
      image: "roselands-house.png",
      name: "Roselands House",
      price: 35000000,
      owner_name: "Dianne Russell",
      owner_address: "Manchester, Kentucky",
      owner_avatar: "dianne-russell.png",
      category: "house",
      preferences: "New House",
    },
    {
      id: 3,
      image: "woodlandside.png",
      name: "Woodlandside",
      price: 45000000,
      owner_name: "Robert Fox",
      owner_address: "Dr. San Jose, South Dakota",
      owner_avatar: "robert-fox.png",
      category: "house",
      preferences: "Best Deals",
    },
    {
      id: 4,
      image: "theoldlighthouse.png",
      name: "The Old Light House",
      price: 55000000,
      owner_name: "Ronald Richards",
      owner_address: "Santa Ana, Illinois",
      owner_avatar: "ronald-richards.png",
      category: "house",
      preferences: "Popular",
    },
  ];
  return (
    <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide no-scrollbar">
      {featureCards?.map(
        ({
          id,
          image,
          name,
          price,
          owner_name,
          owner_avatar,
          owner_address,
          preferences,
        }) => (
          <div key={id} className="pl-12 flex flex-col cursor-pointer">
            <ImageCard
              source={`https://househunter.vercel.app/${image}`}
              preferences={preferences}
            ></ImageCard>
            <TitleCard>{name}</TitleCard>
            <PriceCard>{price}</PriceCard>
            <OwnerCard
              source={`https://househunter.vercel.app/${owner_avatar}`}
              name={owner_name}
              owner_name={owner_name}
              owner_address={owner_address}
            />
          </div>
        )
      )}
    </div>
  );
};
