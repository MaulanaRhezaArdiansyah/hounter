import React from "react";
import { FeaturedCard } from "../../../molecules/FeaturedCard";
import { FeaturedSectionButtons } from "../../../molecules/FeaturedSectionButtons";

export const OurRecomendation: React.FC = () => {
  return (
    <div className="pl-20 pt-20 flex flex-col">
      <FeaturedSectionButtons />
      <FeaturedCard />
    </div>
  );
};
