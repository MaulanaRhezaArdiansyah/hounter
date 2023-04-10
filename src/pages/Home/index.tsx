import React from "react";
import { OurRecomendation } from "../../components/organisms/Home/OurRecomendation";
import { ReadyToSell } from "../../components/organisms/Home/ReadyToSell";
import { Hero } from "../../components/organisms/Home/Hero";
import { Review } from "../../components/organisms/Home/Review";
import { ArticleHome } from "../../components/organisms/Home/Article";
import { EmailSubs } from "../../components/organisms/Home/EmailSubs";
import { Footer } from "../../components/organisms/Home/Footer";

export const Home: React.FC = () => {
  return (
    <div className="h-[500vh] w-full">
      <Hero />
      <OurRecomendation />
      <ReadyToSell />
      <Review />
      <ArticleHome />
      <EmailSubs />
      <Footer />
    </div>
  );
};
