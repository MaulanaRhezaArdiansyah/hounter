import React from "react";
import { SectionCategory } from "../../../atoms/SectionCategory";
import { SectionTitle } from "../../../atoms/SectionTitle";
import { GreenButton } from "../../../atoms/GreenButton";
import { ArticleCard } from "../../../molecules/ArticleCard";
import { BlurArticle } from "../../../atoms/BlurImageArticle";
import { useNavigate } from "react-router-dom";

export const ArticleHome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center pt-36 mb-32">
      <BlurArticle />
      <SectionCategory display="flex-col gap-2">
        See tips and trick from our partnership
      </SectionCategory>
      <SectionTitle classname="md:w-[50%] text-center">
        Find out more about selling and buying homes
      </SectionTitle>
      <div onClick={() => navigate("/article")}>
        <GreenButton classname="mt-5">More Article</GreenButton>
      </div>
      <div className="flex w-full px-20 mt-10 z-10">
        <div className="flex flex-col gap-10 w-[60%]">
          <ArticleCard
            source="https://househunter.vercel.app/article-1.png"
            publisherAvatar="https://househunter.vercel.app/dianne-russell.png"
            publisherName="Dianne Russell"
            articleTitle="The things we need to check when we want to buy a house"
            timeStamp="4 min read | 25 Apr 2021"
            classname="items-center"
            imageSize="w-56 h-40"
            titleWidth="w-[50%]"
          />
          <ArticleCard
            source="https://househunter.vercel.app/article-2.png"
            publisherAvatar="https://househunter.vercel.app/robert-fox.png"
            publisherName="Courtney Henry"
            articleTitle="7 Ways to distinguish the quality of the house we want to buy"
            timeStamp="6 min read | 24 Apr 2021"
            classname="items-center"
            imageSize="w-56 h-40"
            titleWidth="w-[50%]"
          />
          <ArticleCard
            source="https://househunter.vercel.app/article-3.png"
            publisherAvatar="https://househunter.vercel.app/ronald-richards.png"
            publisherName="Darlene Robertson"
            articleTitle="The best way to know the quality of the house we want to buy"
            timeStamp="2 min read | 24 Apr 2021"
            classname="items-center"
            imageSize="w-56 h-40"
            titleWidth="w-[50%]"
          />
        </div>
        <div className="w-[45%]">
          <ArticleCard
            source="https://househunter.vercel.app/article-4.png"
            publisherAvatar="https://househunter.vercel.app/ronald-richards.png"
            publisherName="Darlene Robertson"
            articleTitle="12 Things to know before buying a house"
            timeStamp="8 min read | 25 Apr 2021"
            classname="flex-col items-start"
            imageSize="w-[500px] h-[250px] bg-contain"
            titleWidth="w-[85%]"
            articleContent="Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house"
          />
        </div>
      </div>
    </div>
  );
};
