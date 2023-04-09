import React from "react";
import { Hero } from "../../components/Organisms/Home/Hero";
import { OurRecomendation } from "../../components/Organisms/Home/OurRecomendation";

export const Home: React.FC = () => {
  return (
    <div className="h-[300vh] w-full">
      <Hero />
      <OurRecomendation />
    </div>
  );
};
