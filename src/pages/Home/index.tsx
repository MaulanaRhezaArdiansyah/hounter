import React from "react";
import { OurRecomendation } from "../../components/organisms/Home/OurRecomendation";
import { ReadyToSell } from "../../components/organisms/Home/ReadyToSell";
import { Hero } from "../../components/organisms/Home/Hero";

export const Home: React.FC = () => {
  return (
    <div className="h-[500vh] w-full">
      <Hero />
      <OurRecomendation />
      <ReadyToSell />
    </div>
  );
};
