import React from "react";
import { SectionCategory } from "../../../atoms/SectionCategory";
import { SectionTitle } from "../../../atoms/SectionTitle";
import { GreenButton } from "../../../atoms/GreenButton";

export const ArticleHome: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center pt-36">
      <SectionCategory display="flex-col gap-2">
        See tips and trick from our partnership
      </SectionCategory>
      <SectionTitle classname="md:w-[50%] text-center">
        Find out more about selling and buying homes
      </SectionTitle>
      <GreenButton classname="mt-5">More Article</GreenButton>
    </div>
  );
};
