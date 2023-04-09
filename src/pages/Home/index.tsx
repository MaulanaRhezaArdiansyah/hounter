import React from "react";
import { Hero } from "../../components/organisms/Home/Hero";
import { OurRecomendation } from "../../components/organisms/Home/OurRecomendation";

export const Home: React.FC = () => {
  return (
    <div className="h-[300vh] w-full">
      <Hero />
      <OurRecomendation />
    </div>
  );
};
