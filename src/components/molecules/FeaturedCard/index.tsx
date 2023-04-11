import React from "react";
import { ImageCard } from "../../atoms/FeaturedImageCard";
import { TitleCard } from "../../atoms/FeaturedTitleCard";
import { PriceCard } from "../../atoms/FeaturedPriceCard";
import { OwnerCard } from "../../atoms/FeaturedOwnerCard";

interface Props {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}
export const FeaturedCard: React.FC<Props> = ({ active, setActive }) => {
  const featureCards = [
    {
      id: 1,
      image: {
        url: "house-1.jpg",
        alt: "house-1",
      },
      name: "Rheza's House",
      price: 20000000,
      owner: {
        name: "Rheza",
        address: "Denpasar, Indonesia",
        avatar: "rheza.png",
      },
      category: "House",
      preferences: "Popular",
    },
    {
      id: 2,
      image: {
        url: "roselands-house.png",
        alt: "roselands-house",
      },
      name: "Roselands House",
      price: 35000000,
      owner: {
        name: "Dianne Russell",
        address: "Manchester, Kentucky",
        avatar: "dianne-russell.png",
      },
      category: "House",
      preferences: "New House",
    },
    {
      id: 3,
      image: {
        url: "woodlandside.png",
        alt: "woodlandside",
      },
      name: "Woodlandside",
      price: 45000000,
      owner: {
        name: "Robert Fox",
        address: "Dr. San Jose, South Dakota",
        avatar: "robert-fox.png",
      },
      category: "House",
      preferences: "Best Deals",
    },
    {
      id: 4,
      image: {
        url: "theoldlighthouse.png",
        alt: "theoldlighthouse",
      },
      name: "The Old Light House",
      price: 55000000,
      owner: {
        name: "Ronald Richards",
        address: "Santa Ana, Illinois",
        avatar: "ronald-richards.png",
      },
      category: "House",
      preferences: "Popular",
    },
    {
      id: 5,
      image: {
        url: "theoldlighthouse.png",
        alt: "theoldlightvilla",
      },
      name: "The Old Light Villa",
      price: 55000000,
      owner: {
        name: "Ronald Richards",
        address: "Santa Ana, Illinois",
        avatar: "ronald-richards.png",
      },
      category: "Villa",
      preferences: "Popular",
    },
  ];
  const filteredCategory = featureCards.filter(
    (item) => item.category === active
  );
  console.log(filteredCategory);

  return (
    <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide no-scrollbar">
      {filteredCategory.length !== 0 ? (
        filteredCategory?.map(
          ({ id, image, name, price, owner, preferences }) => (
            <div key={id} className="pl-12 flex flex-col cursor-pointer">
              <ImageCard
                source={`https://househunter.vercel.app/${image.url}`}
                alt={image.alt}
                preferences={preferences}
              ></ImageCard>
              <TitleCard>{name}</TitleCard>
              <PriceCard>{price}</PriceCard>
              <OwnerCard
                source={`https://househunter.vercel.app/${owner.avatar}`}
                name={owner.name}
                owner_name={owner.name}
                owner_address={owner.address}
              />
            </div>
          )
        )
      ) : (
        <p>Data is empty...</p>
      )}
    </div>
  );
};
