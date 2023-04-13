import React from "react";
import { ImageCard } from "../../atoms/FeaturedImageCard";
import { TitleCard } from "../../atoms/FeaturedTitleCard";
import { PriceCard } from "../../atoms/FeaturedPriceCard";
import { OwnerCard } from "../../atoms/FeaturedOwnerCard";
import { featureCards } from "../../../data";

interface Props {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}
export const FeaturedCard: React.FC<Props> = ({ active, setActive }) => {
  const filteredCategory = featureCards.filter(
    (item) => item.category === active
  );

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
